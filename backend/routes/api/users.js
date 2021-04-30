const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
// const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');
const router = express.Router();

const validateSignup = [
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

// Sign up
router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
);

// Post /api/users ---Sign up
// router.post(
//   "/",
//   singleMulterUpload("audio"),
//   validateSignup,
//   asyncHandler(async (req, res) => {
//     const { email, password, username } = req.body;
//     const profileImageUrl = await singlePublicFileUpload(req.file);
//     const user = await User.signup({
//       username,
//       email,
//       password,
//       profileImageUrl,
//     });

//     setTokenCookie(res, user);

//     return res.json({
//       user,
//     });
//   })
// );

module.exports = router;
