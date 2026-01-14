const courses = require('../data/courses');
const Course = require('../model/course.model');
const { validationResult } = require('express-validator');


const getCourses =async  (req,res)=> {
    ///add localization in headera
    const courses = await Course.find();
    res.send(courses);
} ;

const getCourseById = (req,res)=>{
    // console.log(req.params);
    const courseId = +req.params.courseId;
    const course = Course.find(c=>c.id===courseId);
    if(!course) res.status(404).json({msg:"The course with the given ID was not found",status :404});
    res.json(course);
}  ;

const postCourse = async (req, res) => {
  try {
    console.log(req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newCourse = new Course(req.body);
    await newCourse.save();

    console.log("Course added");
    res.status(201).json(newCourse);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

//delete course
const deleteCourse = (req, res) => {
  const courseId = +req.params.courseId;
  const index = courses.findIndex(c => c.id === courseId);

  if (index === -1) {
    return res.status(404).json({ msg: "Course not found" });
  }

  courses.splice(index, 1);
  res.json({ msg: "Course deleted" });
}

//exporting functions
module.exports = {
    getCourses,
    getCourseById,
    postCourse,
    deleteCourse

}
