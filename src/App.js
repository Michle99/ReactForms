import React, {useState} from 'react';
import './App.css';

function App() {

  const [firstname, setFirstName] = useState('');
  const [color, setBackgroundColor] = useState('');

 const handleNameChange = e => {
    // const firstname = e.target.value;
    // this.setState( { firstname } );
    setFirstName(e.target.value)
  }

  const changeColor = () =>setBackgroundColor("#142634");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname);
    alert(`Submitting Name ${firstname}`);
    
  }

  return (
    <div className="App" style={{backgroundColor: color}}>

      <h3 className="App-header">My First React App</h3>
      <div className='App-container'>
      <button onClick={changeColor} >
        Change background color
        </button>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              First Name &nbsp;
              <input 
              firstname="firstname" 
              value={firstname} 
              onChange={handleNameChange} 
              type="text" />
            </label>
          </fieldset>

          <button type='submit'>Submit</button>
        </form>
        <strong>The entered name is: </strong><span>{ firstname}</span>
      </div>
    </div>
  );
}

export default App;
