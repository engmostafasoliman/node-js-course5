const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = "mongodb+srv://engmostafasoliman0_db_user:devmostafasoliman01@nodejs-course.mz0v0xe.mongodb.net/coffeeCode?appName=nodejs-course";

mongoose.connect(url,)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.use(express.json());
const coursesRouter=require('./routes/course.route');

app.use('/api/courses/',coursesRouter); //localhost => localhost:4000/api/courses 

///listen server
app.listen(4000,()=>{
    console.log("server started at port 4000");
});
