import jwt_decode from "jwt-decode";

const find = (callBack) => {
     const access_token = localStorage.getItem("access_token");
     if (access_token) {
          const decoded = jwt_decode(access_token);
          if (decoded.is_superuser) {
               callBack("/admin_panel");
          } else {
               callBack("/");
          }
     } else {
          callBack("/login");
     }
};

const logout = (callBack) => {
     localStorage.removeItem("access_token");
     callBack();
};

export default { find, logout };
