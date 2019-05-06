var express = require('express');
var router = express.Router();
var multer = require('multer');

/* GET home page. */
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Create Blogs' });
});

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({storage: storage})  

router.post('/upload', upload.single('blogimage'), function(req, res, next){
    var fileinfo = req.file.filename;
    var title = req.body.title;
    console.log(title);
    res.send(fileinfo);
})

router.post('/uploads', upload.array('blogimage', 5), function(req, res, next){
    var fileinfo = req.files;
    var title = req.body.title;
    console.log(title);
    res.send(fileinfo);
})

module.exports = router;
