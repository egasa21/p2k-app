var express = require('express');
const { checkUser, requireAuth } = require('../middleware/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'P2k' });
});
router.get('/admin/login', function (req, res, next) {
  res.render('login')
})

router.get('/admin', requireAuth, function (req, res, next) {
  res.render('admin')
})


module.exports = router;
