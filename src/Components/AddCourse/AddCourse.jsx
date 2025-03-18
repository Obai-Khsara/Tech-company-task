import React, { useState } from 'react'

function AddCourse({courseList , setCourseList , setShowResult}) {

  // to collect all information from the inputs in one object to make it easier to add the courseList 
  const [newCourse, setNewCourse] = useState({
    Title: "",
    Description: "",
    InstructorName: "",
    Duration: "",
    id: 0
  })

  // array used to take the previous value and add the new course that user entered before we added the courseList state
  const newCourseArray = [...courseList]

  // function check if the user missed one of the input empty and give hime
  // a notification to fill it then it added the courses
  function AddCourse (){
    if(newCourse.Title == "" || newCourse.Description == "" || newCourse.InstructorName == "" || newCourse.Duration == ""){
      alert("Fill All The Filed")
    }else{
      newCourseArray.push(newCourse)
      setCourseList(newCourseArray)
      setNewCourse({
        Title: "",
        Description: "",
        InstructorName: "",
        Duration: "",
        id: 0
      })
      setShowResult(false)
    }
    
  }


  return (
    // some inputs filed to add new courses to courseList
    <div className='bg-blue-950 flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-3 text-blue-400'>Add Course</h1>

        <div className='flex flex-col w-[50%] justify-center items-center'>
          <input className='mb-1 focus:outline-none p-2 w-[100%]' required
          value={newCourse.Title}
          placeholder='Course Tilte' onChange={(e)=>{setNewCourse({...newCourse , Title: e.target.value})}}/>

          
          <textarea className='mb-1 focus:outline-none p-2 w-[100%]' required
          value={newCourse.Description}
          placeholder='Course Description' style={{resize: "none"}}
          onChange={(e)=>{setNewCourse({...newCourse , Description: e.target.value})}}></textarea>


          <input className='mb-1 focus:outline-none p-2 w-[100%]'
          value={newCourse.InstructorName}
          placeholder='Instructor Name of Course'
          onChange={(e)=>{setNewCourse({...newCourse , InstructorName: e.target.value})}}/>
          
          
          <input className='mb-1 focus:outline-none p-2 w-[100%]' required
          value={newCourse.Duration}
          placeholder='Duration'
          onChange={(e)=>{setNewCourse({...newCourse , Duration: e.target.value , id: Math.floor(Math.random() * 10000)})}}/>
          
          
          <button className='w-20 bg-white rounded-xl mb-5 mt-2 text-2xl p-2'
          onClick={AddCourse}>Add</button>
        </div>
    </div>
  )
}

export default AddCourse