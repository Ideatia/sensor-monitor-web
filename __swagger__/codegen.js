/* eslint-disable @typescript-eslint/no-var-requires */
const { codegen } = require('swagger-axios-codegen');
const axios = require('axios');

const outputDir = `./src/services`;

const host = `http://192.168.59.79:53301`;
axios.get(`${host}/swagger-resources`).then(async ({ data }) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const n of data) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await codegen({
        remoteUrl: `${host}${n.url}`,
        methodNameMode: 'operationId',
        modelMode: 'interface',
        strictNullChecks: false,
        outputDir,
        fileName: `${n.name}.ts`,
        sharedServiceOptions: true,
        extendDefinitionFile: './customerDefinition.ts',
      });
    } catch (e) {
      console.log(`${n.name} service error`, e.message);
    }
  }
});
