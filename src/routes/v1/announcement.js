const {
  updateAnnouncement,
  getAllAnnouncement,
} = require('../../api/v1/announcement/controllers');

const router = require('express').Router();

router.put('/announcement', updateAnnouncement);
router.get('/announcement', getAllAnnouncement);

module.exports = router;
