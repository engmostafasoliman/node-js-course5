const courses = require('../data/courses');
const Course = require('../model/course.model');
const { validationResult } = require('express-validator');
const httpStatusText = require('../utils/httpStatusText');
//fetch all courses


const getCourses =async  (req,res)=> {
    ///add localization in headera
    const courses = await Course.find();
    res.send({status: httpStatusText.SUCCESS,data :{courses}});

} ;
//fetch course by id
const getCourseById =async (req,res)=>{
    // console.log(req.params);
    try {
        const courseId = req.params.courseId;
    const course =await Course.findById(courseId);
    if(!course) res.status(404).json({status :httpStatusText.FAIL ,data :{course  :"Course not found"}});

    res.json({status: httpStatusText.SUCCESS,data :{course}});} catch (error) {
        return res.status(400).json({status :httpStatusText.ERROR ,data :null , message : error.message});
    }
}  ;

const postCourse = async (req, res) => {
  try {
    console.log(req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({status :httpStatusText.ERROR ,data :null , message : error.array() });
    }

    const newCourse = new Course(req.body);
    await newCourse.save();

    console.log("Course added");
    res.status(201).json({status: httpStatusText.SUCCESS ,data :{course : newCourse } });

  } catch (error) {
    console.error(error);
    res.status(500).json({status :httpStatusText.ERROR ,data :null , message : "Server Error" });
  }
};
/// edit course
const editCourse = (req, res) => {
  const courseId = req.params.courseId;
  const index = Course.findByIdAndUpdate( courseId, req.body, { new: true });

  if (!index) {
    return res.status(404).json({status :httpStatusText.ERROR ,data :null , message : "Course not found"});
  }}
//delete course
const deleteCourse = (req, res) => {
  const courseId = +req.params.courseId;
  const index = courses.findIndex(c => c.id === courseId);

  if (index === -1) {
    return res.status(404).json({status :httpStatusText.ERROR ,data :null , message : "Course not found"});
  }

  courses.splice(index, 1);
  res.json({status: httpStatusText.SUCCESS ,data :"Course deleted successfully"});
}

//exporting functions
module.exports = {
    getCourses,
    getCourseById,
    postCourse,
    deleteCourse,
    editCourse,

}
