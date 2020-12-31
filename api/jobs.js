
const db = require('./db');
const { Router } = require('express')
const router = Router()
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/jobs/jobsList', function (req, res) {
  // var userInput = [];
  var filter = req.body["filter"];
  var params = req.body["params"];

  if (filter) {
    var serverFilter = {
      mainCategoryId: filter.mainCategoryId,
      stateId: filter.stateId,
      freeText: filter.freeText
    }
  }
  if (params) {

  }
  // query to the database and get the data
  db.execProcedure('getJobs', serverFilter).then(data => {
    res.send(data)
  },
    error => console.log(error)
  )
});


router.post('/jobs/jobsListMobile', function (req, res) {
  // var userInput = [];
  var filter = req.body["filter"];
  if (filter) {
    var serverFilter = {
      mainCategoryId: filter.mainCategoryId,
      stateId: filter.stateId,
      freeText: filter.freeText
    }
  }
  // query to the database and get the data
  db.execProcedure('getJobsMobile', serverFilter).then(data => {
    res.send(data)
  },
    error => console.log(error)
  )
});

router.post('/jobs/jobsQueryString', function (req, res) {
  // var userInput = [];
  var qstring = req.body["qstring"];

  // query to the database and get the data
  db.execProcedure('getJobsQueryString', qstring).then(data => {
    res.send(data)
  },
    error => console.log(error)
  )
});

router.post('/jobs/singleJob', function (req, res) {
  // var userInput = [];
  var params = req.body["jobParams"];

  // query to the database and get the data
  db.execProcedure('getSingleJob', params).then(data => {
    res.send(data)
  },
    error => console.log(error)
  )
});


router.post('/jobs/states', function (req, res) {

  // query to the database and get the data
  db.execProcedure('getStates').then(data => {
    res.send(data)
  },
    error => console.log(error)
  )
});




router.post('/jobs/mainCategories', function (req, res) {

  // query to the database and get the data
  db.execProcedure('getMainCategories').then(data => {
    res.send(data)
  },
    error => console.log(error)
  )
});

router.post('/jobs/cities', function (req, res) {
  var stateId = req.body["stateId"];

  // query to the database and get the data
  db.execProcedure('getCities', { stateId: stateId }).then(data => {
    res.send(data)
  },
    error => console.log(error)
  )
});

router.post('/jobs/categories', function (req, res) {
  var mainCategoryId = req.body["mainCategoryId"];

  // query to the database and get the data
  db.execProcedure('getCategories', { mainCategoryId: mainCategoryId }).then(data => {
    res.send(data)
  },
    error => console.log(error)
  )
});

module.exports = router