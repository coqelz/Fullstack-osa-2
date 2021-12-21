import { configure } from '@testing-library/react'
import React from 'react'
import Course from './components/Course'




const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>
        Web development curriculum
      </h1>
      <Course course={courses} />
    </div>
  )
}

export default App;

/*
const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

const Header = ({course}) => {
  return(
    <div>
   <h2> {course.name} </h2>
   </div>
  )
 }

 const Content = ({course}) => {
  return(
    <div>
    
    {course.parts.map(one => 
    <p key={one.id}>
      {one.name} {one.exercises}
    </p>
      )}
     
    </div>
  )
}

const Total = ({course}) => {
  const copy = course.parts
  const count  = (pv, cv) => pv + cv
  return(
    <div>
    <h3>
    total of {Array.from(copy, x => x.exercises).reduce(count)} exercises
    </h3>
    </div>
  )
}

  
  



const Course = ({course}) => {
 
  return(
  course.map(one => 
  <div key ={one.id} >   
    <Header course={one} />
    <Content course={one} />
    <Total course={one} />
  </div>
  )
  )

}
*/