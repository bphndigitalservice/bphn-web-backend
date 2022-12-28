'use strict';


const path = require("path");
const customPagePath = path.resolve(__dirname, "../../.cache/admin/src/pages/HomePage");
/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.plugins.push(new webpack.NormalModuleReplacementPlugin(
    /admin\/src\/pages\/(.*).js/,
    (resource) => {
      if (resource.createData.resource){
        const replacedFilePath = resource.createData.resource.replace(customPagePath,path.resolve(__dirname,'extensions/pages/HomePage'));
        if (replacedFilePath.endsWith('.js')) {
          resource.createData.resource = replacedFilePath;
        }
      }
    }));

  return config;
};
