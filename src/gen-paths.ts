import fs = require("fs");
import {genTypes, genTypesOpts, defaultPrettierOpts, fixVariableName} from "./gen-types";
import mkdirp = require("mkdirp");
import rimraf = require("rimraf");
import path = require("path");
import {promisify} from "util";
import {TypeTemplate} from "./type-template";
import prettier = require("prettier");

type SwaggerDoc = SwaggerIo.V2.SchemaJson

interface Operation extends SwaggerIo.V2.SchemaJson.Definitions.Operation {
    __path__: string
    __tag__: string
    __verb__: string
    __parentParameters__: string
}

type genPathsOpts = {
    output: string
    moduleStyle: "commonjs" | "esm"
    failOnMissingOperationId?: boolean
    typesOpts?: genTypesOpts
    mapOperation?: (
        operation: Operation,
        pathItem: SwaggerIo.V2.SchemaJson.Definitions.PathItem,
        pathKey: string,
        methodKey: string
    ) => Operation
    templateString?: string
    prettierOpts?: prettier.Options
}

export class GenPathsClass {
    constructor(private swaggerDoc: SwaggerDoc, public opts: genPathsOpts) {
        if (!opts.output) throw Error("Missing parameter: output.");
        opts.moduleStyle = opts.moduleStyle || "commonjs";
        opts.templateString = opts.templateString;
        opts.prettierOpts = opts.prettierOpts || defaultPrettierOpts;
        opts.typesOpts = {...(opts.typesOpts || {}), prettierOpts: opts.prettierOpts};
        this.preNormalize();
        this.typegen = new TypeTemplate(this.opts.typesOpts!, "definitions", this.swaggerDoc, "Types.");
    }

    typegen: TypeTemplate;
    lookupPaths = ["#/definitions"];

    preNormalize() {
        this.swaggerDoc = this.swaggerDoc || {};
        this.swaggerDoc.definitions = this.swaggerDoc.definitions || {};

        const mappedDefs = {} as Record<string, JsonSchemaOrg.Draft04.Schema>;
        Object.keys(this.swaggerDoc.definitions!).forEach(key => {
            mappedDefs[fixVariableName(key)] = this.swaggerDoc.definitions![key]
        });
        this.swaggerDoc.definitions = mappedDefs
    }

    async run() {
        const {swaggerDoc, opts} = this;
        await promisify(rimraf)(opts.output);
        await promisify(mkdirp as any)(path.resolve(opts.output, ""));

        const typesFile = await genTypes(swaggerDoc, [...this.lookupPaths, ...this.typegen.foundRefs], {
            external: true,
            ...(opts.typesOpts || {})
        });
        await promisify(fs.writeFile)(path.resolve(opts.output, "types.d.ts"), typesFile)
    }
}

export async function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts) {
    const instance = new GenPathsClass(swaggerDoc, opts);
    return instance.run();
}


