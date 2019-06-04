import React from 'react'
import Person from './Person/Person'

function App() {
    return (
      <div className="App">
        <Person name='Max' age='28' />
        <Person name='Manu' age='29'>My Hobbies: Racing </Person>
        <Person name='Stephanie' age='26' />
      </div>
    );
  }

  export default App