import React, {useState} from 'react';
import './App.css';

function App() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [fruit, setFruit] = useState([]);
  const [checked, setChecked] = useState('');
  const [comments, setComments] = useState('Enter your comments here!');
  const [color, setBackgroundColor] = useState('');

 const handlFirstNameChange = e => {
    // const firstname = e.target.value;
    // this.setState( { firstname } );
    setFirstName(e.target.value)
  }
  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }

  const handleMaleGender = e => {
    setGender("male");
  }
  const handleFemaleGender = e => {
    setGender("female");
  }

  const handleFalseCheckBox = e => {
    setChecked("false");
  }
  const handleTrueCheckBox = e => {
    setChecked("true");
  }
  const handleFruit = e => {
    setFruit(e.target.value);
  }
  const handleComments = e => {
    setComments(e.target.value);
  }

  const changeColor = () =>setBackgroundColor("lightblue");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname + " " +lastname);
    alert(`Submitting Name ${firstname+" "+lastname+" "+gender+" "+fruit+" "+checked+" "+comments}`);
    
  }

  //option values for the select tag
  let array = ["apple","banana","mango","strawberry"]
  let options = array.map( (item) =>
      <option value = {item}>{item}</option> )

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
              onChange={handlFirstNameChange} 
              type="text" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Last Name &nbsp;
              <input 
              lastname="lastname" 
              value={lastname} 
              onChange={handleLastNameChange} 
              type="text" />
            </label>
          </fieldset>
          <fieldset>
            <label>Gender &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={gender === "male"}
              onClick={handleMaleGender}
            /> Male
            </label>
            <label> &nbsp;
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={gender === "female"}
              onClick={handleFemaleGender}
            /> Female
            </label>
          </fieldset>
          <fieldset>
            <label>Pick your favorite fruit: &nbsp;
            <select 
              value={fruit}
              onChange={handleFruit}
              >
                {options}
            {/* <option selected value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="mango">mango</option>
            <option value="strawberry">strawberry</option> */}
            </select>
            </label>
          </fieldset>
          <fieldset>
            <label>Are the above inputs correct?: &nbsp;
            <input 
              type="checkbox"
              name="checked"
              value={checked}
              checked={checked === "true"}
              onClick={handleTrueCheckBox}
            />&nbsp;True &nbsp;
             <input 
              type="checkbox"
              name="checked"
              value={checked}
              checked={checked === "false"}
              onClick={handleFalseCheckBox}
            />&nbsp;False
            </label>
          </fieldset>
          <fieldset>
            <label>Comments : &nbsp;
            <textarea 
              value={comments}
                onInput={handleComments}
              />
            </label>
          </fieldset>


          <button type='submit'>Submit</button>
        </form>
        <strong>The entered first name is: </strong><span>{ firstname}</span><br/>
        <strong>The entered last name is: </strong><span>{lastname}</span><br/>
        <strong>The entered gender is: </strong><span>{gender}</span><br/>
        <strong>The entered fruit is: </strong><span>{fruit}</span><br/>
        <strong>The entered inputs are: </strong><span>{checked}</span><br/>
        <strong>The entered cooments are: </strong><span>{comments}</span><br/>
      </div>
    </div>
  );
}

export default App;
