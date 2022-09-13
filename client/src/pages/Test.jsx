import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [content_name, setContent_name] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});

  const [content_detail, setContent_detail] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    console.log(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a promblem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  return (
    <div className="container">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">Upload</label>
          <input
            type="file"
            className="form-control"
            name="image"
            // value={filename}
            required
            onChange={e=>setImage(e.target.value)}
          />
          <label htmlFor="content_name">Content Name</label>
          <input
            type="text"
            className="form-control"
            name="content_name"
            value={content_name}
            required
            onChange={(e) => setContent_name(e.target.value)}
          />
          <label htmlFor="content_detail">Content Detail</label>
          <textarea
            name="content_detail"
            className="form-control"
            id=""
            cols="30"
            rows="10"
            value={content_detail}
            onChange={(e) => setContent_detail(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Test;
