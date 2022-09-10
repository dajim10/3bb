import {useRef, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import eLogo from '../assets/images/e-passport.png'

const Login = () =>{
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd , setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() =>{
        // userRef.current.focus();
    },[])

    useEffect(() =>{
        setErrMsg('');
    },[user,pwd])

    const handleSubmit=(e)=>{
        // e.preventDefault();
        console.log(user,pwd);
       
    }

    return (
      <section
        className="container"
        style={{ height: "100vh", padding: "4rem" }}
      >
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <img src={eLogo} alt=""  className="text-center p-2"/>
            <h3 className="rounded-pill  text-light p-2 shadow m-3" style={{background:'#011b54'}}>RUTs</h3>
            <h3>E-passport Login</h3>
            <br />
            <form onSubmit={handleSubmit} className="card p-4 shadow-lg ">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUser(e.target.value)}
              />
              <label htmlFor="username">password:</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPwd(e.target.value)}
              />
              <div className="text-center">
                <Link to="/inputContent">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-outline-dark mt-2 m-2"
                  />
                </Link>
                <input
                  type="reset"
                  value="Cancel"
                  className="btn btn-outline-danger mt-2 m-2"
                />
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </section>
    );
}

export default Login