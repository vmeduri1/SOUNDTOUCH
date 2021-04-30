const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const { restoreUser, requireAuth } = require ('../../utils/auth');
const { Song } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload, singlePublicImageUpload } = require('../../cloudinary');

router.get('/', asyncHandler( async (req, res) => {
    const songs = await Song.findAll();
    return res.json(songs);
}));

router.get('/:id', asyncHandler(async function(req, res) {
    const song = await Song.findOne(req.params.id);
    return res.json(song);
  }));

router.post('/upload', singleMulterUpload('file') , asyncHandler(async function(req, res) {
    // console.log('=====================');
    // console.log(req.body);
    // console.log(req.file);
    const song = await singlePublicFileUpload(req.file);
    // console.log(song);
    const newSong = Song.create({
      name: req.body.title,
      artist: req.body.artist,
      audio_url: song.url,
    })
    res.json(newSong);
}))

router.put('/update/:id', singleMulterUpload('image') , asyncHandler(async function(req, res) {
  // console.log('=====================');
  // console.log(req.file);
  // console.log(song);
  const image = await singlePublicImageUpload(req.file);
  // console.log(image);
  const song = await Song.findByPk(req.params.id);
  const newSong = await song.update({image_url: image.url})
  res.json(newSong);
}))

router.delete('/:id', asyncHandler(async function(req, res) {
  const { id } = req.params;
  const deletePhoto = await Song.findByPk(id);
  await deletePhoto.destroy();
  res.status(204).end();
}))


module.exports = router;
