import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

const Search = ({courseList , setCourseList , showResult , setShowResult , searchResult , setSearchResult}) => {

  const resultArray = []

  // this state to take the user input
  const [textSearch, setTextSearch] = useState("")

  

  // this function take the user input and compare it with courseList and store the matched result in
  // resultArray and then added it to show searchResult state to present it
  const handleSearch = () =>{

    if(textSearch != ""){
    courseList.filter(course =>{
      if(course.Title.toLowerCase().match(textSearch.toLowerCase())){
        resultArray.push(course)
      }
    })}
    setSearchResult(resultArray)
    setShowResult(true)
  }

  // This function aim to delete specific course from the list based on the id but it have another instruction 
  // to change the value of showResult and present it the client and remove the user input from the filed
  function deleteCourse(id, courseTitle){
    const check = confirm(`Are you sure that you want to delete ${courseTitle}`)
    const newCourseList = courseList.filter((course)=>{
        if(course.id != id)
            return true
    })

    if(check){
    setCourseList(newCourseList)
    setShowResult(false)
    setTextSearch("")
    }
}
  
  return (
    <div>
      <div className='py-5 text-center flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
          <input
          className='w-72 md:w-96 focus:outline-none border-2 border-blue-950 placeholder:text-black rounded-lg p-1'
          placeholder='Search based on the Course Title'
          value={textSearch}
          onChange={(e)=>{setTextSearch(e.target.value)}}/>
          <button onClick={handleSearch}
          className='text-xl w-fit bg-sky-900 p-1 rounded-lg mt-1 md:text-2xl text-white'>Search</button>
        </div>


            {
              // To choose to present htm tags or not depend on the value of showResult
              (showResult && 

                // to start the search process
                <span onClick={()=>{
                  setShowResult(false)
                  setTextSearch("")
                }}
                className='flex items-center gap-2 bg-blue-500 m-5 p-3 rounded-xl cursor-pointer'>
                  <FaArrowLeft /> Back to the list
                </span>
              )
            }
      </div>

      {
        // to choose it present the result of search or not depend on the value of showResult
        (showResult && 
          <div className='bg-blue-950 p-5 text-center mb-5'>
                <h1 className='mb-5 text-3xl text-blue-400'>Result Of Your Search</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    {
                        searchResult.map((search , index)=>{
                            return(
                                <div key={index} className='mb-5 bg-blue-50 rounded-2xl px-1 text-start'>
                                    <h1 className='text-[40px] text-black'>{search.Title}</h1>
                                    <p className='text-[20px] text-slate-950'>{search.Description}</p>
                                    <h1 className='text-[20px] py-3 px-1 text-purple-800'>Teacher :{search.InstructorName}</h1>
                                    <h1 className='text-[20px] py-3 px-1 text-red-950'>Course Duration :{search.Duration}</h1>
                                    <div className='text-center'>
                                        <button className='bg-red-500 mb-2 p-3 rounded-2xl text-xl'
                                        onClick={()=>{deleteCourse(search.id, search.Title)}}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
          </div>
        )
      }
    </div>
  )
}

export default Search