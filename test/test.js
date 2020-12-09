const tap = require("tap");
const path = require("path");
const typeGenerator = require("../built/gen-paths");
const json = require("./jobflex.json");

async function run() {
  await tap.test("jobflex", async t => {
    await typeGenerator.genPaths(json, {
      output: path.resolve(__dirname, "type"),
      typesOpts: {
        hideComments: true
      },
      moduleStyle: "esm"
    })
  })
}

run();
