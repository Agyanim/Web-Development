import React from 'react'
import "./course.css"
const Courses = ({name,img,text}) => {
  return (
    <div className='course-card-wrapper'>
      <img src={img} alt="img" />
      <h1>{name}</h1>
      <h3>{text}</h3>

    </div>
  )
}

export default Courses