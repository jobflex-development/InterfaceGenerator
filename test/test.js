const tap = require("tap")
const tstemplate = require("../built/main")
const jobflex = require("./jobflex.json")
const path = require("path")

async function run() {


  await tap.test("jobflex", async t => {
    await tstemplate.genPaths(jobflex, {
      output: path.resolve(__dirname, "type"),
      typesOpts: {
        hideComments: true
      },
      moduleStyle: "esm"
    })
  })
}

run()
