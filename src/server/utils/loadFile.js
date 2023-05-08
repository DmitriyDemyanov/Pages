const fs = require("fs");

module.exports = async (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, (err, data) => {
      try {
        if (err) {
          return resolve(null);
        }
        resolve(JSON.parse(data));
      } catch (e) {
        resolve(null);
      }
    });
  });
};
