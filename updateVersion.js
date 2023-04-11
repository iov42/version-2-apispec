const yaml = require('js-yaml');
const fs = require('fs');

const config = require('./package.json');

var version = config.version;

console.log("Updating openapi version to: " + version);

const changeVersion = (newVersion) => {
    doc.info.version = newVersion
    fs.writeFileSync('./openapi/openapi.yml', yaml.dump(doc));
}

let doc = yaml.load(fs.readFileSync('./openapi/openapi.yml'));
changeVersion(version)