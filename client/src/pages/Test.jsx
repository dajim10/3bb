import { useState } from "react";
import axios from "axios";


const Test = () => {
  const [state, setState] = useState({
    content_name: "",
    content_detail: "",
    image: "",
  });

  const { content_name, content_detail, image } = state;

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(process.env);
  };

  return (
    <div className="container">
      <h1>เขียนบนความ</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="content_name">ชื่อบทความ</label>
          <input
            type="text"
            className="form-control"
            value={content_name}
            onChange={inputValue("content_name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content_detail">รายละเอียด</label>
          <textarea
            name="content_detail"
            className="form-control mb-3"
            id="content_detail"
            cols="30"
            rows="10"
            value={content_detail}
            onChange={inputValue("content_detail")}
          ></textarea>
        </div>
        <div className="input-group">
          <div className="input-group-prepend ">
            {/* <span className="input-group-text" id="inputGroupFileAddon01">
              Upload
            </span> */}
          </div>
          <div className="custom-file ">
            <input
              type="file"
              className="custom-file-input form-control"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              value={image}
              onChange={inputValue("image")}
            />
            {/* <label className="custom-file-label" for="inputGroupFile01">
              Choose file
            </label> */}
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary btn-sm mt-3"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};
export default Test;
