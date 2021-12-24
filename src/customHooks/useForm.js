import {useState} from 'react';
import {omit} from 'lodash';
import { useNavigate } from 'react-router-dom';

const useForm = (callback) => {

     //Form values
     const [values, setValues] = useState({});
     //Errors
     const [errors, setErrors] = useState({});
    //Use history to redirect to success page
    const navigateToSuccessPage = useNavigate();

     const validate = (e,name, value) => {

        switch(name){
            case 'firstname':
                if(value.length <=1 ){
                    setErrors({
                        ...errors,
                        firstname: 'Firstname must have at least 5 characters'
                    })
                } else {
                    let newObj = omit(errors, "firstname");
                    setErrors(newObj);
                }
                break;
            case 'lastname':
                    if(value.length <= 1){
                        setErrors({
                            ...errors,
                            lastname: 'Lastname must have at least 5 characters'
                        });
                    } else {
                        let newObj = omit(errors, "lastname");
                        setErrors(newObj);
                    }
                    break;
            case 'gender':
                if(value.gender === null){
                    setErrors({
                        ...errors,
                        gender: 'Please select gender'
                    });
                } else {
                    let newObj = omit(errors, "gender");
                    console.log(newObj);
                    setErrors(newObj);
                }
                break;
             case 'fruit':
                 if(value.fruit === null){
                    setErrors({
                        ...errors,
                        fruit: 'Please select fruit'
                    })
                 } else {
                     let fruitObj = omit(errors, "fruit");
                     setErrors(fruitObj);
                 }
                 break;
            case 'checked':
                if(value.checked === null){
                    setErrors({
                        ...errors,
                        checked: 'Please make a selection'
                    })
                } else {
                    let checkedObj = omit(errors, "checked");
                    setErrors(checkedObj);
                }
                break;
            case 'comments':
                if(value.comments <= 1){
                    setErrors({
                        ...errors,
                        comments: 'Enter a comment'
                    })
                } else {
                    let commentsObj = omit(errors, "comments");
                    setErrors(commentsObj);
                }
                break;
            default:
                break;
        }
     }
 
   
   //A method to handle form inputs
     const handleChange = (e) => {
         //To stop default events    
         e.persist();
 
         let name = e.target.name; 
         let val = e.target.value; //values is object that consists of the form values
 
         validate(e, name, val);

         //Let's set these values in state
         setValues({
             ...values,
             [name]:val,
         });
 
     }

    let isRegistered = false;
     const handleSubmit = (e) => { 
        isRegistered = true;
        if (e) e.preventDefault();

        if(Object.keys(errors).length ===0 && Object.keys(values).length !==0 &&  isRegistered){
            callback();
            navigateToSuccessPage("/success");
           
        } else {
            alert("There is an error!");
        }
        
      }
 
 
     return {
         values,
         errors,
         handleChange,
         handleSubmit,
      
     }
    
}

export default useForm;