const express = require('express');
const app = express();
app.use(express.json());
const coursesRouter=require('./routes/course_route');

app.use('/api/courses/',coursesRouter); //localhost => localhost:4000/api/courses 

///listen server
app.listen(4000,()=>{
    console.log("server started at port 4000");
});
