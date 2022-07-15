import React from "react";
import "../styles/Content.css";
const Content = ({ userdata }) => {
  return (
    <div>
      <div>
        <h1>Students Enrolled✔ </h1>
      </div>
      {userdata.map((user,id) => {
        return (
          <div className="card mb-3" key={id}>
            <div className="row g-0">
              <div className="col-md-5">
                <div className="card-header">Description</div>
                <div className="card-body details">
                  <h2 className="card-title">{user.name}</h2>
                  <p className="card-text">{user.email}</p>
                  <p className="card-text">{user.web}</p>
                  <p className="card-text">{user.gender}</p>
                 <div className="skill">
                 {
                    user.skill.map((skills,id)=>{
                      return(
                        <p key={id}>{skills}</p>
                      )
                    })
                  }
                 </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card-header im">Image</div>
                <img 
                  src={user.img}
                  className="imageadd"
                  alt="..."
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
