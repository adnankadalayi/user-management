import React from "react";
import SignupForm from "../Components/SignupForm";
import { useParams } from "react-router-dom";

function Signup() {
     
     const { value } = useParams();

    

     return (
          <div>
               <SignupForm title={"Sign Up"} method={"post"} url={"http://localhost:8000/api/register/"} navigateTo={!value === "createuser" ? "/login" : '/admin_panel'}/>
          </div>
     );
}

export default Signup;
