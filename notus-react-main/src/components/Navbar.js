// // components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <header className="header">
//     <div className="container">
//       <div className="header-main d-flex justify-content-between align-items-center">
//         <div className="header-logo">
//           <Link to="/">Project Management <span>Portal</span></Link>
//         </div>
//         <button type="button" className="header-hamburger-btn js-header-menu-toggler">
//           <span></span>
//         </button>
//         <div className="header-backdrop js-header-backdrop"></div>
//         <nav className="header-menu js-header-menu">
//           <button type="button" className="header-close-btn js-header-menu-toggler">
//             <i className="fas fa-times"></i>
//           </button>
//           <ul className="menu">
//             <li className="menu-item"><Link to="/">Home</Link></li>
//             <li className="menu-item"><Link to="/sign-in">Login</Link></li>
//             <li className="menu-item"><Link to="/sign-up">Register</Link></li>
//             <li className="menu-item"><Link to="/contact">Contact</Link></li>
//             <li className="menu-item"><button onClick={() => alert('Query button clicked!')} className="btn btn-query">Query</button></li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   </header>
// );

// export default Navbar;
