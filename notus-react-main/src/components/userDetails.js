



import AdminHome from "./adminHome";
import UserHome from "./userHome";
import React, { useEffect, useState } from "react";

import ProjectAnalystDashboard from "../screens/ProjectAnalystDashboard";
import AuditorDashboard from "../screens/AuditorDashboard";
import ProjectDirectorDashboard from "../screens/ProjectDirector";

export default function UserDetails() {
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data === "token expired") {
          alert("Token expired, login again");
          window.localStorage.clear();
          window.location.href = "./auth/login";
        } else {
          setUserData(data.data);
          setUserType(data.data.userType);
        }
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  switch (userType) {
    case "Admin":
      return <AdminHome />;
    case "Trainer":
      return <UserHome userData={userData} />;
    case "User":
      return <ProjectAnalystDashboard userData={userData} />;
   
    default:
      return <UserHome userData={userData} />;
  }
}
