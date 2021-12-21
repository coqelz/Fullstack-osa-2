import React, { useState } from 'react'



const Numbers = ({names}) => {

 return(
   <div>
    {names.map(name => 
      <div key={name.name}>
          {name.name}
        </div>
      )}
   </div>
 )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  
  const addName = (event) => {
    event.preventDefault()
    setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  const change = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={change} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers names={persons} />
    </div>
  )

}

export default App