const path = require('path');

const pathModule = {
  rootDir: path.dirname(process.mainModule.filename),
  getPathName(...args) {
    return path.join.apply(null, [__dirname, '..', ...args]);
  }
}

module.exports = pathModule;
