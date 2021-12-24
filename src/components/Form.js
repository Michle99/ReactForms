import React, {useState} from 'react';
import useForm from '../customHooks/useForm';
import '../App.css';

export default function Form() {

      //Final submit function
const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
    console.log("Form Values ", values.gender);
    console.log("Form Values ", values.checked);
  }
  
    const {handleChange, values, errors, handleSubmit} = useForm(formLogin);
    const [color, setBackgroundColor] = useState('');
    
  
    /*
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
  
    const [fruit, setFruit] = useState(''); //select error if ([]) is used for useState
    const [checked, setChecked] = useState('');
    const [comments, setComments] = useState('Enter your comments here!');
  
  
   const handlFirstNameChange = e => {
      // const firstname = e.target.value;
      // this.setState( { firstname } );
      setFirstName(e.target.value)
    }
    const handleLastNameChange = e => {
      setLastName(e.target.value)
    }
  
    
    const handleGender = e => {
      setGender(e.target.value);
    }
  
    const handleCheckBox = e => {
      setChecked(e.target.value);
    }
  
    const handleFruit = e => {
      setFruit(e.target.value);
    }
    const handleComments = e => {
      setComments(e.target.value);
    }
  */
  
  
  
    const changeColor = () =>setBackgroundColor("lightblue");
  
   
  
    //option values for the select tag
    let array = ["","apple","banana","mango","strawberry"]
    let options = array.map( (item, i) =>
        <option key={item} value={item}>{item}</option> )

    return(


        <div className="App" style={{backgroundColor: color}}>
           <div className='App-container'>
               <button onClick={changeColor} >
                    Change background color
               </button>
  
        <form onSubmit={handleSubmit}>
            <fieldset>
               <label>
                    First Name &nbsp;
                    <input 
                    name="firstname" 
                    // value={values} 
                    onChange={handleChange} 
                    type="text" 
                    // onBlur={handleBlur}
                    required />
              </label>
                {errors.firstname && <p>{errors.firstname}</p>}
            </fieldset>
            <fieldset>
               <label>
                    Last Name &nbsp;
                  <input 
                    name="lastname" 
                onChange={handleChange} 
                type="text" 
                // onBlur={handleBlur}
                required />
              </label>
              {errors.lastname && <p>{errors.lastname}</p>}
            </fieldset>
            <fieldset>
              <label>Gender &nbsp;&nbsp;&nbsp;
              <input
                type="radio"
                name="gender"
                // checked={values.gender === 'male'}
                value="male"
                onChange={handleChange}
                required
                // onBlur={handleBlur}
              /> Male
              </label>
              <label> &nbsp;
              <input
                type="radio"
                name="gender"
                value="female"
                // checked={values.gender === 'female'}
                onChange={handleChange}
                // onBlur={handleBlur}
                required
              /> Female
              </label>
            </fieldset>  
          <fieldset>
              <label>Pick your favorite fruit: &nbsp;
              <select 
                // value={values}
                name="fruit"
                // value={fruit}
                onChange={handleChange}
                multiple={false}
                required
                // onBlur={handleBlur}
                >
                  {options}
              </select>
              </label>
            </fieldset>   
            <fieldset>
              <label>Are the above inputs correct?: &nbsp;
              <input 
                type="radio"
                name="checked"
                value="true"
                onChange={handleChange}
                required
                // onBlur={handleBlur}
              />&nbsp;True &nbsp;
               <input 
                type="radio"
                name="checked"
                value="false"
                required
                onChange={handleChange}
                // onBlur={handleBlur}
              />&nbsp;False
              </label>
            </fieldset>  
            <fieldset>
              <label>Comments : &nbsp;
              <textarea 
                name="comments"
                // value={values}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </label>
              {errors.comments && values.touched ? <span style={{color: 'red'}}>{errors.comments}</span> : null}
            </fieldset>
  
  
            <button type='submit' value="Submit">Submit</button>
          </form>
          <strong>The entered first name is: </strong><span>{ values.firstname}</span><br/>
          <strong>The entered last name is: </strong><span>{values.lastname}</span><br/>
          <strong>The entered gender is: </strong><span>{values.gender}</span><br/>
          <strong>The entered fruit is: </strong><span>{values.fruit}</span><br/>
          <strong>The entered inputs are: </strong><span>{values.checked}</span><br/>
          <strong>The entered cooments are: </strong><span>{values.comments}</span><br/>
        </div>
      </div>
    );
};