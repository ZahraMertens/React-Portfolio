import React, { useState } from 'react'
import "../../../styles/Contact.css"
import { validateEmail, validateInput } from "../../../utils/helpers"

export default function Form() {

    //Asign empty values to states
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    //Need to attach state to input value in order to see change
    const handleInputChange = (event) => {
        //Getting name and value of the input which triggered the change
        //Access target property of event object
        // const {name, value} = e.target
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        console.log(inputValue.length)

        if(inputType === "email"){
            setEmail(inputValue);
        } else if (inputType === "name"){
            setName(inputValue);
        } else if (inputType === "message") {
            setMessage(inputValue);
        }
    };

    // const handleBlank = (event) => {

    //     if(event.target.name === "name" && event.target.value.length === 0) {
    //         setErrorMessage(`${event.target.name} is required`)
    //     } else if(event.target.name === "message" && event.target.value.length === 0) {
    //         setErrorMessage(`${event.target.name} is required`)
    //     } else if(event.target.name === "email" && event.target.value.length === 0) {
    //         setErrorMessage(`${event.target.name} is required`)
    //     }
    // }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage("Email is not valid");
            return;
        }

        if(!validateInput(name)) {
            setErrorMessage("A name is required!");
            return
        }

        if(!validateInput(message)) {
            setErrorMessage("A message is required!");
            return;
        }

        //Reset values when button clicked if all values provided
        setEmail("");
        setName("");
        setMessage("");
        setErrorMessage("");
    }

    return (
        <div>
        <form>
            <label className="form-label">Email:</label>
                <input
                className="form-control"
                value={email}
                name="email"
                onChange={handleInputChange}
                // onBlank={handleBlank}
                type="email"
                placeholder="Email address"
                />
            <label className="form-label">Name:</label>
                <input
                className="form-control"
                value={name}
                name="name"
                onChange={handleInputChange}
                // onBlank={handleBlank}
                type="text"
                placeholder="Full Name"
                />
            <label className="form-label">Message:</label>
                <textarea
                className="form-control"
                value={message}
                name="message"
                onChange={handleInputChange}
                // onBlank={handleBlank}
                type="text"
                placeholder="Message"
                />
            <button className="form-btn btn btn-warning" type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
    )
}
