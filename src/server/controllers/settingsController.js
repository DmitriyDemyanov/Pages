const SettingsModel = require('../models/settingsModel');

exports.getFooterExplore = async (req, res) => {
  const exploreLinks = await SettingsModel.fetchExploreLinks();
  res.status(200).json(exploreLinks);
}

exports.getFooterUtils = async (req, res) => {
  const exploreLinks = await SettingsModel.fetchUtilityLinks();
  res.status(200).json(exploreLinks);
}
