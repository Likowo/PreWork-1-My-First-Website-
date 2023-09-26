// Upload componeent boilerplate using rfce
import React from 'react';
import {useState} from 'react';

function SignInForm (props){
    // Set useState (useState is a hook)
    const [data, setData] = useState('');

     //NB: data ( we used the name data to stand for names that will be typed in to the signin sheet- i.e its a more logical way of naming things), is the variable that tells us what will return once the fxn runs while setData is the function that updates the data in the form.
    // All logic or fxns go between the fxn declaration and the return

    const handleNameChange = (event) => {
        console.log(event.target.value)
        //use setData to update the data
        setData(event.target.value);
    };

    const handleSubmit = (event) => {
        //To prevent  the page from reloading upon form submission, use the event.preventDefault 
        event.preventDefault();

        // To keep track of everyone who signs in 
    // props.setLearners([data]);
             // Use a spreed operator to add props onto an array .i.e gives the indivual values of an array not the whole array 
    props.setLearners([...props.learners,data])

        // To prevent last name entered from staying on screen, set  the setData function to an empty string like below
        setData('');
    };

  return (
    <form
    onSubmit={(event) => {
        handleSubmit(event);
      }}
     >
        <h1> Daily SignIn Sheet</h1>
        <input 
        //use the attributes below to set up the box for leaners(students 0 to enter their names when signing in)
        type="text"
         name='name' 
         placeholder='Your Name Here'
         value={data}
         onChange={(event)=>{ handleNameChange(event) }} />
        <input type='submit' value='Submit'/>
    </form>
  )
}

export default SignInForm