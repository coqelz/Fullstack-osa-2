import React, { useState, useEffect } from 'react'
import data from './services/names'

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

const Names = ({names, newFilter, deleteNumber}) => {
  return(
    <div>
    {names.filter((one) => {
      if(newFilter === '') {
        return one
      } else if(one.name.toLowerCase().includes(newFilter.toLowerCase())) {
        return one
      }
    }).map(name =>    
      <p key={name.id}>
          {name.name} {name.number} <button onClick={() => deleteNumber(name.id)}>delete</button> 
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
    data
    .getAll()
    .then(base => {
      setPersons(base)
    })
  }, [])


  const deleteNumber = (id) => {
    const numberToDelete = persons.find(n => n.id === id)
    if(window.confirm(`Delete ${numberToDelete.name}?`)) {
      data
      .remove(id)
      .then(removed => {
        setPersons(persons.concat(removed))
        setPersons(persons.filter(n => n.id !== id))
    })
    }
  }
console.log(persons)

  const filterNames = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }

  
  const addName = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    const defName = {
      name: newName,
      number: newNumber
    }

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
      data
      .create(defName)
      .then(added => {
    setPersons(persons.concat(added))
    setNewName('')
    setNewNumber('')
    })
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
      <Names names={persons} newFilter={newFilter} deleteNumber={deleteNumber} />
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