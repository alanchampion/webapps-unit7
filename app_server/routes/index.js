var express = require('express');
var router = express.Router();
var ctrlClasses = require('../controllers/classes');
// var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlClasses.classlist);
router.get('/class', ctrlClasses.classInfo);
router.get('/class/assignment/new', ctrlClasses.addAssignment);

/* Other pages */
// router.get('/about', ctrlOthers.about);

module.exports = router;
