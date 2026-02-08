import { useState } from "react";
import "./SignField.css"
import { SubmitButton } from "./SubmitButton";
import {Link } from "react-router-dom";
const signinField = [{
  name : "email",
  type : "email",
  autoComplete : "email",
  label: "E-mailAddress"
},
{
  name : "password",
  type : "password",
  autoComplete : "current-password",
  label: "Password"
}];
const signupField = [
  ...signinField,
  {
  name : "name",
  type : "text",
  autoComplete : "name",
  label: "Name"
}]
  const labels = {
    true : "Register",
    false : "Login"
  };
  const links = {
    true : "/signup",
    false : "/signin"
  }


export const SignField = ({isSignUp,id,errorMessage,onSubmit,SubmitState}) =>{
const handleSubmit = (event) => {
  event.preventDefault();
  onSubmit(formData); 
};
  const currentField = isSignUp ? signupField : signinField;
  const title = labels[isSignUp]
  const [formData,setformData] = useState({
    email : "",
    name : "",
    password : ""
  });
  const handleChange = (name, value) => {
  setformData((prev) => ({ ...prev, [name]: value }))};
  return(
     <main className="sign">
          <h2 className="sign__title">{title}</h2>
          <p className="sign__error">{errorMessage}</p>
          <form className="sign__form" onSubmit={handleSubmit}>
            {currentField.map((field)=>(
               <fieldset key={field.name} className="sign__form_field">
              <label htmlFor={`${id}-${field.name}`} className="sign__form_label">
                {field.label}
              </label>
              <input
                id={`${id}-${field.name}`}
                type={field.type}
                autoComplete={field.autoComplete}
                className="app_input"
                value={formData[field.name]||""}
                onChange={(e) => handleChange(field.name,e.target.value)}
              />
            </fieldset>
            ))}
            <div className="sign__form_actions">
              <Link className="app_button" data-variant="secondary" to={links[!isSignUp]}>
                {labels[!isSignUp]}
              </Link>
              <div className="sign__form_actions_spacer"></div>
              <SubmitButton SubmitState={SubmitState} text={title}></SubmitButton>
            </div>
          </form>
        </main>
  );
};