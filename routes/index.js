var express = require('express');
var router = express.Router();
var mongoose =  require('mongoose');
var {Student} = require('../models/student');



mongoose.connect(
  process.env.MONGO_CRED
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fahid\'s App' });
});


router.get('/api/student', async function (req, res) {
  const students = await Student.find();
  return res.json(students);
});


router.post('/api/student', async function (req, res) {
  const student = new Student({
      username: req.body.username,
      class: req.body.class,
      rollnumber: req.body.rollnumber
  });
  await student.save();
  res.json(student);
});
module.exports = router;
