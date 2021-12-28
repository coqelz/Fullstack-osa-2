import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PersonForm = ({addName, newName, newNumber, changeName, changeNumber}) => (
  <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={changeNumber} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)

const Names = ({names, newFilter}) => {
  return(
    <div>
    {names.filter((one) => {
      if(newFilter === '') {
        return one
      } else if(one.name.toLowerCase().includes(newFilter.toLowerCase())) {
        return one
      }
    }).map(name =>    
      <p key={name.name}>
          {name.name} {name.number}
        </p>
      )
       }
       </div>
      )
}
    


const Filter = ({filterNames, newFilter}) => (
  <form>
    <div>
      filter: <input value={newFilter} onChange={filterNames}/>
    </div>
  </form>
)





const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect (() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    }
    )
  }, [])

  const filterNames = (event) => {
    event.preventDefault()
    console.log(newFilter)
    setNewFilter(event.target.value)
  }

  
  const addName = (event) => {
    event.preventDefault()

    let result = false
     persons.forEach(one=> {
      if(one.name === newName)
      result = true
     }
      )
    
    if(result) {
     alert(`${newName} is already added to phonebook`)
    }
    else {
    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName('')
    setNewNumber('')
    }
  }

  const changeName = (event) => {
    setNewName(event.target.value)
  }
  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterNames={filterNames} newFilter={newFilter}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} addName={addName} newNumber={newNumber} 
      changeName={changeName} changeNumber={changeNumber} />
      <h2>Numbers</h2>
      <Names names={persons} newFilter={newFilter} />
    </div>
  )

}

export default App

/*
return(
   <div>
    {names.map(name => 
      <p key={name.name}>
          {name.name} {name.number}
        </p>
      )}
   </div>
 )
      */