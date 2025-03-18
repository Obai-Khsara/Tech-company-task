import React from 'react'


const Courses = ({courseList, setCourseList , showResult}) => {

    // This function aim to delete specific course from the list based on the id
    function deleteCourse(id, courseTitle){

        // to avoid the deleted random
        const check = confirm(`Are you sure that you want to delete ${courseTitle}`)
        const newCourseList = courseList.filter((course)=>{
            if(course.id != id)
                return true
        })

        if(check){
        setCourseList(newCourseList)
        }
    }
    
  return (
    <>
        {
            (!showResult && 
                <div className='bg-blue-950 p-5 text-center'>
                    <h1 className='mb-5 text-3xl text-blue-400'>Courses List</h1>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                        {
                            // present the courses based on the courseList state passed from the App
                            courseList.map((course , index)=>{
                                return(
                                    <div key={index} className='mb-5 bg-blue-50 rounded-2xl px-1 text-start'>
                                        <h1 className='text-[40px] text-black'>{course.Title}</h1>
                                        <p className='text-[20px] text-slate-950 md:text-[18px]'>{course.Description}</p>
                                        <h1 className='text-[20px] py-3 px-1 text-purple-800'>Teacher :{course.InstructorName}</h1>
                                        <h1 className='text-[20px] py-3 px-1 text-red-950'>Course Duration :{course.Duration}</h1>
                                        <div className='text-center'>
                                            <button className='bg-red-500 mb-2 p-3 rounded-2xl text-xl'
                                            onClick={()=>{deleteCourse(course.id, course.Title)}}>Delete</button>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                    </div>
                </div>
            )
        }
    </>
  )
}

export default Courses