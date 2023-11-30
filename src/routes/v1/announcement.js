const {
  updateAnnouncement,
  getAllAnnouncement,
} = require('../../api/v1/announcement/controllers');
const router = require('express').Router();
const verifyToken = require('../../middlewares/verifyToken');

router.put('/announcement', verifyToken, updateAnnouncement);
router.get('/announcement', verifyToken, getAllAnnouncement);

module.exports = router;
