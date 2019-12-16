const { Router } = require('express');
const router = Router();

const multer = require('multer');
const upload = multer({
  dest:'tmp/',
  limits: {
    fileSize: 3000000,
  }
});
const fs = require('fs');

/* GET index page. */
router.get('/myupload', (req, res) => {
  res.render('index', {
    title: 'this wonderful, marvelous uploader'
  });
});

router.post('/myupload', upload.array('myfile', 3), function (req, res, next) {
  console.log(req.files)
  req.files.forEach(function (file) {
    fs.renameSync(
      file.path,
      'public/images/' + file.originalname,
    );
  })
  res.send('your marvelous picture has been wonderfully sent');
})

module.exports = router;