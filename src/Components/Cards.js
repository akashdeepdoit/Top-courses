import React, { useState } from "react";
import Card from "./Card";
function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  let allCourses = [];
  const[likedCourses,setLikedCourses]=useState( []);
  //return a list of all courses received from the api response
function getCourses(){
  if(category ==="All"){
    let allCourses = [];
  Object.values(courses).forEach(array=>{
    array.forEach(courseData=>{
      allCourses.push(courseData);
    })
  })
  return allCourses;
  }
  else{
    //sirf specific category ka data array krunga
    return courses[category];
  }
  
}
  return(
     <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
       getCourses().map((course)=>(
       <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>))
    
      }
  </div>
  )
}

export default Cards
