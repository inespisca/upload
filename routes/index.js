const { Router } = require('express');
const router = Router();

const multer = require('multer');
const upload = multer({ dest:'tmp/' });
const fs = require('fs');

/* GET index page. */
router.get('/myupload', (req, res) => {
  res.render('index', {
    title: 'this wonderful, marvelous uploader'
  });
});

router.post('/myupload', upload.single('myfile'), (req, res, next) => {
  console.log("im running")
  fs.rename(
    req.file.path,
    'public/images/' + req.file.originalname,
    (err) => {
      if (err) {
          res.send('problem sending your marvelous picture');
      } else {
          res.send('your marvelous picture has been wonderfully sent');
      }
    }
  );
})

module.exports = router;
