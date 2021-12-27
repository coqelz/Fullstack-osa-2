import React from 'react'


 

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

  const Course = ({courses}) => {
 console.log('ok?')
    return(
    courses.map(one => 
    <div key ={one.id} >   
      <Header course={one} />
      <Content course={one} />
      <Total course={one} />
    </div>
    )
    )
  
  }


export default Course