// import React, { useEffect, useState } from "react";

// export default function AuditorDashboard({ userData }) {
//   const [projects, setProjects] = useState([]);
//   const [showFeedbackModal, setShowFeedbackModal] = useState(false);
//   const [feedback, setFeedback] = useState({ projectId: "", description: "", rating: "1" });

//   useEffect(() => {
//     fetch("http://localhost:5000/auditor-projects")
//       .then((response) => response.json())
//       .then((data) => setProjects(data))
//       .catch((error) => console.error("Error fetching projects:", error));
//   }, []);

//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };

//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     console.log('Feedback Submitted:', feedback);
//     // Post the feedback to the server or handle accordingly
//     setShowFeedbackModal(false);
//   };

//   const handleFeedbackChange = (e) => {
//     const { name, value } = e.target;
//     setFeedback(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div style={{ backgroundColor: "#e6f7ff", height: "100vh", padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ backgroundColor: "#66b2ff", color: "white", padding: "10px 20px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div>
//           <p style={{ margin: "0" }}>Name: <strong>{userData.fname}</strong></p>
//           <p style={{ margin: "0" }}>Email: <strong>{userData.email}</strong></p>
//         </div>
//         <div>
//           <button onClick={logOut} style={{ backgroundColor: "#ff4d4d", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer" }}>
//             Log Out
//           </button>
//         </div>
//       </div>
//       <h2 style={{ color: "#004080", textAlign: "center", marginTop: "20px" }}>Auditor Dashboard</h2>
//       <h3 style={{ color: "#004080", marginTop: "20px" }}>Project List</h3>
//       {projects.length > 0 ? (
//         projects.map((project) => (
//           <div key={project.id} style={{ backgroundColor: "white", padding: "10px 20px", margin: "10px 0", borderRadius: "5px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}>
//             <h4 style={{ margin: "0", color: "#004080" }}>{project.name}</h4>
//             <p style={{ margin: "5px 0" }}>Status: {project.status}</p>
//             <p>CP: {project.cp}%</p>
//           </div>
//         ))
//       ) : (
//         <p>No projects available.</p>
//       )}
//       <button onClick={() => setShowFeedbackModal(true)} style={{ backgroundColor: "#004080", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", position: "fixed", bottom: "20px", right: "20px" }}>
//         Feedback
//       </button>
//       {showFeedbackModal && (
//         <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px", width: "300px" }}>
//             <h4 style={{ color: "#004080" }}>Submit Feedback</h4>
//             <form onSubmit={handleFeedbackSubmit}>
//               <label>
//                 Project:
//                 <select name="projectId" value={feedback.projectId} onChange={handleFeedbackChange} style={{ display: "block", width: "100%", marginTop: "5px" }}>
//                   <option value="">Select Project</option>
//                   {projects.map(project => (
//                     <option key={project.id} value={project.id}>{project.name}</option>
//                   ))}
//                 </select>
//               </label>
//               <label style={{ marginTop: "10px" }}>
//                 Description:
//                 <textarea name="description" value={feedback.description} onChange={handleFeedbackChange} style={{ display: "block", width: "100%", height: "80px", marginTop: "5px" }} />
//               </label>
//               <label style={{ marginTop: "10px" }}>
//                 Rating:
//                 <select name="rating" value={feedback.rating} onChange={handleFeedbackChange} style={{ display: "block", width: "100%", marginTop: "5px" }}>
//                   {[...Array(10).keys()].map(num => (
//                     <option key={num + 1} value={num + 1}>{num + 1}</option>
//                   ))}
//                 </select>
//               </label>
//               <button type="submit" style={{ marginTop: "10px", backgroundColor: "#004080", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px" }}>Submit</button>
//               <button type="button" onClick={() => setShowFeedbackModal(false)} style={{ marginTop: "10px", marginLeft: "5px", backgroundColor: "#ff4d4d", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px" }}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function AuditorDashboard({ userData }) {
  const [projects, setProjects] = useState([]);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState({ projectId: "", description: "", rating: "1" });

  useEffect(() => {
    fetch("http://localhost:5000/auditor-projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/sign-in";
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', feedback);
    // Post the feedback to the server or handle accordingly
    setShowFeedbackModal(false);
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-blueGray-600">
                    Name: <strong>{userData.fname}</strong>
                  </p>
                  <p className="text-blueGray-600">
                    Email: <strong>{userData.email}</strong>
                  </p>
                </div>
                <div>
                  <button
                    onClick={logOut}
                    className="bg-red-500 text-white active:bg-red-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <h2 className="text-blueGray-700 text-2xl font-bold text-center">
                Auditor Dashboard
              </h2>
              <h3 className="text-blueGray-600 text-xl font-bold mt-4">
                Project List
              </h3>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white p-4 my-2 rounded shadow-md"
                  >
                    <h4 className="text-blueGray-700 font-bold">{project.name}</h4>
                    <p className="text-blueGray-500">Status: {project.status}</p>
                    <p className="text-blueGray-500">CP: {project.cp}%</p>
                  </div>
                ))
              ) : (
                <p>No projects available.</p>
              )}
              <button
                onClick={() => setShowFeedbackModal(true)}
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                style={{ position: "fixed", bottom: "20px", right: "20px" }}
              >
                Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      {showFeedbackModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-3xl w-full">
            <h4 className="text-blueGray-600 text-xl font-bold mb-4">Submit Feedback</h4>
            <button
              onClick={() => setShowFeedbackModal(false)}
              className="absolute top-4 right-4 bg-red-500 text-white active:bg-red-700 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            >
              Close
            </button>
            <form onSubmit={handleFeedbackSubmit}>
              <div className="form-group mb-4">
                <label className="block text-blueGray-600 text-sm font-bold mb-2">
                  Project:
                </label>
                <select
                  name="projectId"
                  value={feedback.projectId}
                  onChange={handleFeedbackChange}
                  className="form-control w-full px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                >
                  <option value="">Select Project</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mb-4">
                <label className="block text-blueGray-600 text-sm font-bold mb-2">
                  Description:
                </label>
                <textarea
                  name="description"
                  value={feedback.description}
                  onChange={handleFeedbackChange}
                  className="form-control w-full px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-blueGray-600 text-sm font-bold mb-2">
                  Rating:
                </label>
                <select
                  name="rating"
                  value={feedback.rating}
                  onChange={handleFeedbackChange}
                  className="form-control w-full px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowFeedbackModal(false)}
                  className="ml-4 bg-red-500 text-white active:bg-red-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}






// import React, { useEffect, useState } from "react";

// export default function AuditorDashboard({ userData }) {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch project data
//     fetch("http://localhost:5000/auditor-projects")
//       .then((response) => response.json())
//       .then((data) => setProjects(data))
//       .catch((error) => console.error("Error fetching projects:", error));
//   }, []);

//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };

//   return (
//     <div style={{ backgroundColor: "#e6f7ff", height: "100vh", padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ backgroundColor: "#66b2ff", color: "white", padding: "10px 20px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div>
//           <p style={{ margin: "0" }}>Name: <strong>{userData.fname}</strong></p>
//           <p style={{ margin: "0" }}>Email: <strong>{userData.email}</strong></p>
//         </div>
//         <div>
//           <button onClick={logOut} style={{ backgroundColor: "#ff4d4d", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer" }}>
//             Log Out
//           </button>
//         </div>
//       </div>
//       <h2 style={{ color: "#004080", textAlign: "center", marginTop: "20px" }}>Auditor Dashboard</h2>
//       <h3 style={{ color: "#004080", marginTop: "20px" }}>Project List</h3>
//       {projects.length > 0 ? (
//         projects.map((project) => (
//           <div key={project.id} style={{ backgroundColor: "white", padding: "10px 20px", margin: "10px 0", borderRadius: "5px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", cursor: "pointer" }}>
//             <h4 style={{ margin: "0", color: "#004080" }}>{project.name}</h4>
//             <p style={{ margin: "5px 0" }}>Status: {project.status}</p>
//             <p>CP: {project.cp}%</p>
//           </div>
//         ))
//       ) : (
//         <p>No projects available.</p>
//       )}
//       <button onClick={() => alert("Feedback functionality to be implemented")} style={{ backgroundColor: "#004080", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", position: "fixed", bottom: "20px", right: "20px" }}>
//         Feedback
//       </button>
//     </div>
//   );
// }
