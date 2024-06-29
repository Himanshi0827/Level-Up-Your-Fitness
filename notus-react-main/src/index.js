// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/styles/tailwind.css";

// // layouts

// import Admin from "layouts/Admin.js";
// import Auth from "layouts/Auth.js";

// // views without layouts

// import Landing from "views/Landing.js";
// import Profile from "views/Profile.js";
// import Index from "views/Index.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       {/* add routes with layouts */}
//       <Route path="/admin" component={Admin} />
//       <Route path="/auth" component={Auth} />
//       {/* add routes without layouts */}
//       <Route path="/landing" exact component={Landing} />
//       <Route path="/profile" exact component={Profile} />
//       <Route path="/" exact component={Index} />
//       {/* add redirect for first page */}
//       <Redirect from="*" to="/" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );




import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

// components and screens from the second project

// import Landingpage from './screens/Landingpage';
// import Login from "./screens/Login";
// import SignUp from "./screens/SignUp";
import UserDetails from "./components/userDetails";


function App() {
  return (
    <BrowserRouter>
      {/* Add the Navbar here if it should be present on all pages */}
      <Switch>
        {/* Routes from the first project */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Index} />
        
        
      
        <Route path="/userdetails" exact component={UserDetails} />
        
       
        
        {/* Add redirect for any unmatched route */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
