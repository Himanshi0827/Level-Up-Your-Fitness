// components/TeamSection.js
import React from 'react';

const TeamSection = () => (
  <section className="team-section section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="section-title text-center">
            <h2 className="title">Team Members</h2>
            <p className="sub-title">Introduction to Team Members</p>
          </div>
        </div>
      </div>
      
      <div className="row text-center">
        <div className="col-md-6 col-lg-4">
          <div className="team-member">
            <div className="img-box">
              <img src="./img/team/1.jpg" className="img-fluid" alt="Team member" />
            </div>
            <h3>Himanshi Singh</h3>
            <p>Developer</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="team-member">
            <div className="img-box">
              <img src="./img/team/3.jpg" className="img-fluid" alt="Team member" />
            </div>
            <h3>Smit Patel</h3>
            <p>Developer</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="team-member">
            <div className="img-box">
              <img src="./img/team/4.jpg" className="img-fluid" alt="Team member" />
            </div>
            <h3>Aditya Patel</h3>
            <p>Developer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
