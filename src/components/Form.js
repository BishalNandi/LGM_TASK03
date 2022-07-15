import React, { useState } from "react";



const Form = ({ setAlldata }) => {
  const [user, setdata] = useState([]);
  const [useremail, setuseremail] = useState("");
  const [username, setusername] = useState("");
  const [userwebsite, setuserwebsite] = useState("");
  const [userimg, setuserimg] = useState("");
  const [usergender, setusergender] = useState("");
  const [userskill, setskill] = useState([]);
  const deleteit = () => {
    setuseremail("");
    // setusergender("");
    setuserimg("");
    setusername("");
    setuserwebsite("");
    // setskill([]);
  };

  const savedata = () => {
    const newuser = {
      name: username,
      email: useremail,
      web: userwebsite,
      img: userimg,
      gender: usergender,
      skill: userskill,
    };
    setdata([...user, newuser]);
    setAlldata([...user, newuser]);
    deleteit();
  };
  const skilladd = (e) => {
    const s = new Set([...userskill]);
    if(e.target.checked===true)
    s.add(e.target.value);
    else{
      s.delete(e.target.value);
    }
    setskill([...s]);
  };

  const [value,setValue] = useState();

  const refresh = ()=>{
      // it re-renders the component
     setValue({});
  }
  return (
    <div>
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Name📛:
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id=""
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email📧:
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id=""
              value={useremail}
              onChange={(e) => setuseremail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Website🕸:
          </label>
          <div className="col-sm-6">
            <input
              type="url"
              className="form-control"
              id=""
              value={userwebsite}
              onChange={(e) => setuserwebsite(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Image📷:
          </label>
          <div className="col-sm-6">
            <input
              type="url"
              className="form-control"
              id=""
              value={userimg}
              onChange={(e) => setuserimg(e.target.value)}
            />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Gender🧒🧑:</legend>
          <div className="col-sm-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="Female"
                onChange={(e) => setusergender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Female👧
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="Male"
                onChange={(e) => setusergender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Male👦
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <legend className="col-2">Skills🤹‍♀️:</legend>

          <div className="col-2">
            <input
              type="checkbox"
              value="HTML"
              name="scales"
              onClick={(e) => skilladd(e)}
            />
            <label htmlFor="scales">HTML👩‍💻</label>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              id="CSS"
              name="horns"
              value="CSS"
              onClick={(e) => skilladd(e)}
            />
            <label htmlFor="horns">CSS👩‍💻</label>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              id="css"
              name="horns"
              value="JAVASCRIPT"
              onClick={(e) => skilladd(e)}
            />
            <label htmlFor="horns">JAVASCRIPT👩‍💻</label>
          </div>
        </div>
      </form>
      <div className="col-sm-6">
        
        <button className="btn btn-primary" onClick={savedata}>
          Enroll Student ✅
        {/* </button> <div>&nbsp;</div> */}
  </button>        

  <div className="footer">

    <p>Made with 🧡 by Bishal Nandi 😊</p>

  </div>
        
       
      </div>
    </div>
  );
};

export default Form;
