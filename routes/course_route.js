const express = require('express');
const router = express.Router();
const {body }=require('express-validator');
const validationSchema = require('../middleware/validation_schema');



let coursesController = require('../controller/courses_controller');

/// get all courses
router.route('/')
.get(coursesController.getCourses  )
.post(validationSchema, coursesController.postCourse );


/// get course by id
router.route('/:courseId')
.get(coursesController.getCourseById )
.patch(validationSchema,coursesController.postCourse)
.delete( coursesController.deleteCourse );


module.exports = router;