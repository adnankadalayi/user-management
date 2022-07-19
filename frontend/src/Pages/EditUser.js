import React, { useEffect, useState } from "react";
import SignupForm from "../Components/SignupForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditUser() {
     const [user, setUser] = useState([]);
     const { id } = useParams();
     
     return (
          <div>
               <SignupForm
                    id={id}
                    method={"put"}
                    url={`http://localhost:8000/admin_panel/${id}/`}
                    title={"Edit User"}
                    navigateTo="/admin_panel"
               />
          </div>
     );
}

export default EditUser;
