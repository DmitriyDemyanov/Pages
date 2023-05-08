const express = require('express');
const {
  getFooterExplore,
  getFooterUtils
} = require('../controllers/settingsController');

const router = express.Router();

router.get('/explores', getFooterExplore);
router.get('/utility', getFooterUtils);

module.exports = router;
