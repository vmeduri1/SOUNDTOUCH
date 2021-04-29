const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const { restoreUser, requireAuth } = require ('../../utils/auth');
const { Song } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload } = require('../../cloudinary');

router.get('/', asyncHandler( async (req, res) => {
    const songs = await Song.findAll();
    return res.json(songs);
}));

router.get('/:id', asyncHandler(async function(req, res) {
    const song = await Song.findOne(req.params.id);
    return res.json(song);
  }));

router.post('/upload', singleMulterUpload('file') , asyncHandler(async function(req, res) {
    console.log('=====================');
    console.log(req.body);
    console.log(req.file);
    const song = await singlePublicFileUpload(req.file);
    console.log(song);
    const newSong = Song.create({
      name: req.body.title,
      artist: req.body.artist,
      audio_url: song.url,
    })
    res.json(newSong);
}))

module.exports = router;
