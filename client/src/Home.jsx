import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./pages/Navbar";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Test from "./pages/Test";
import "./App.css";
// import FunctionColor from './FunctionColor'

// import './App.css'

function Home() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    date: new Date(),
    name: "",
    home: "",
  });
  const [search, setSearch] = useState("");

  const [searchParam, setSearchParam] = useState();

  

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length > 0) {
      // console.log(input);
      axios
        .get(`http://localhost:3000/search/${input}`)
        .then((response) => setData(response.data))
        .catch((err) => console.error(err));
    } else {
      axios
        .get("http://localhost:3000/getall")
        .then((response) => setData(response.data))
        .catch((err) => console.error(err));
    }
  };

  const FetchQuery = (e) => { };



  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = data.filter((newVal) => {
      return newVal.id === 6;
      // comparing category for displaying data
    });
    setData(newData);
  };

  const FunctionColor = (sdg, index) => {
    const number = sdg;
    switch (number) {
      case 1:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#eb1c2d" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 2:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#e3a029" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 3:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#279b48" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 4:
        return (
          <button
            className="btn bnt-sm m-2"
            style={{ background: "#c31f33" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 5:
        return (
          <button
            className="btn bnt-sm m-2"
            style={{ background: "#ef402b" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 6:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#00aed9" }}
            value={sdg}
            onClick={FetchQuery}
            key={index}
          >
            {sdg}
          </button>
        );

      case 7:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#fdb713" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 8:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#8f1838" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 9:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#3b6d25" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 10:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#e11484" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 11:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#f99d26" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 12:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#cfb2da" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 13:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#48773e" }}
            value={sdg}
            onClick={FetchQuery}
            key={index}
          >
            {sdg}
          </button>
        );

      case 14:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#007dbc" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 15:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#3eb049" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 16:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#02558b" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      case 17:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#183668" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );

      default:
        return (
          <button
            className="btn bnt-sm m-2 text-light"
            style={{ background: "#fff" }}
            key={index}
            onClick={FetchQuery}
          >
            {sdg}
          </button>
        );
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/getAll", {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((res) => setData(res.data));
    // .then(res => console.log(res.data))
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      {/* <Test /> */}
      <div className="container text-center mb-3 p-2">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 rounded-pill shadow-sm"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchParam}
            name="search"
            // onChange={(e) => setSearch(e.target.value)}
            onChange={(e) => handleChange(e)}
          />
          {/* <button type="submit" style={{ border: "none", background: "white" }}>
            {}
            <i className="fa fa-search"></i>
          </button> */}

          {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
        </form>
      </div>
      <Main />
      <div className="container d-block">
        <div className="row">
          {data.map((item, idx) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={idx}>
              <div
                className="card shadow-lg"
              // style={{ height: "350px" }}
              >
                <div className="inner">
                  <img
                    src={item.image}
                    alt=""
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  />
                  {/* <div dangerouslySetInnerHTML={{ __html: `<img src="${item.image}"/>`  }} /> */}
                  {/* <p>{item.image}</p> */}
                </div>
                <div className="card-body">
                  <small>{item.content_name}</small>
                </div>

                <div
                  key={idx}

                // style={{ position: "absolute", bottom: "20", right: "0" }}
                >
                  {/* <div className="card-footer"> */}

                  {item.sdg_number.map((sdg, index) =>
                    FunctionColor(sdg, index)
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* end Table */}
    </>
  );
}

export default Home;
