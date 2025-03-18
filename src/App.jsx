import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import AddCourse from './Components/AddCourse/AddCourse'
import Courses from './Components/Courses/Courses'


function App() {
  // The below variable to give initial value to courseList state that I passed to all components which use it
  const courseListArray = [
    {
      Title: "Html",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quos.",
      InstructorName: "Ahmad",
      Duration: "2 Weeks",
      id: 1
    },
    {
      Title: "Css",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quos.",
      InstructorName: "Mohammad Abo Zaed",
      Duration: "6 Weeks",
      id: 2
    },
    {
      Title: "JavaScript",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quos.",
      InstructorName: "Mostafa Yaroub",
      Duration: "12 Weeks",
      id: 3
    },
    {
      Title: "React Js",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quos.",
      InstructorName: "Mohamad Alkurdy",
      Duration: "4 Weeks",
      id: 4
    }
  ]

  // below state contains the all courses and it will change repeatedly and many components will use it
  const [courseList, setCourseList] = useState(courseListArray)


  // this state used to check if present the search result or not based on its value
  const [showResult,setShowResult] = useState(false)
  // this state to collect all matched course and present them
  const [searchResult , setSearchResult] = useState([])

  

  return (
    <>
      <Header/>
      <Search courseList = {courseList} setCourseList = {setCourseList} showResult={showResult} setShowResult={setShowResult} searchResult={searchResult} setSearchResult={setSearchResult}/>
      <Courses courseList = {courseList} setCourseList = {setCourseList} showResult={showResult}/>
      {
        (!showResult && 
        <AddCourse courseList = {courseList} setCourseList = {setCourseList} setShowResult={setShowResult}/>)
      }
    </>
  )
}

export default App
