const courses = require('../data/courses');
const { validationResult } = require('express-validator');


const getCourses = (req,res)=>{
    ///add localization in headera
    
    res.send(courses);
} ;

const getCourseById = (req,res)=>{
    // console.log(req.params);
    const courseId = +req.params.courseId;
    const course = courses.find(c=>c.id===courseId);
    if(!course) res.status(404).json({msg:"The course with the given ID was not found",status :404});
    res.json(course);
}  ;

const postCourse = (req,reqs)=>{
    console.log(req.body)
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        return reqs.status(400).json({errors:errors.array()});
    }
    courses.push({id:courses.length+1,...req.body});
    reqs.status(201).json({msg:"course created"});
} ;
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
