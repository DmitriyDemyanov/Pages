const path = require('../utils/path');
const loadFile = require('../utils/loadFile');

module.exports = class SettingsModel {
  static savedSettings = null;
  static path = path.getPathName('data', 'siteSettings.json');

  static async fetchAll() {
    if (!this.savedSettings) {
      this.savedSettings = await loadFile(this.path);
    }
    return this.savedSettings;
  }

  static async fetchExploreLinks() {
    const settings = await this.fetchAll();
    return settings.exploreLink;
  }

  static async fetchUtilityLinks() {
    const settings = await this.fetchAll();
    return settings.utilityLinks;
  }
}
