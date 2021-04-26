const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const { restoreUser, requireAuth } = require ('../../utils/auth');
const { Song } = require('../../db/models');

router.get('/', asyncHandler( async (req, res) => {
    const songs = await Song.findAll();
    return res.json(songs);
}));

router.get('/:id', asyncHandler(async function(req, res) {
    const song = await Song.findOne(req.params.id);
    return res.json(song);
  }));


module.exports = router;
