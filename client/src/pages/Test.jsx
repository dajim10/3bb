import { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [content_name, setContent_name] = useState("");
  const [content_detail, setContent_detail] = useState("");
  const [image, setImage] = useState([]);
  const [sdg_id, setSdg_id] = useState([]);
  const [sdg_number, setSdg_number] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(image);
    formData.append("content_name", content_name);
    formData.append("content_detail", content_detail);
    formData.append("file", image);
    console.log(formData);
    // e.preventDefault();

    axios
      .post("/upload", { formData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  function handleChecked(e, id) {
    if (e.target.checked == true) {
      setSdg_id([...sdg_id, e.target.value]);
    } else {
      let check_list = [];
      sdg_id.map((check) => {
        if (check != e.target.value) {
          check_list.push(e.target.value);
        }
      });
      setSdg_id(check_list);
      console.log(sdg_id);
    }
  }

  useEffect(() => {
    axios
      .get(`/sdgs`, {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((res) => setSdg_number(res.data));
    // .then(res => console.log(res.data))
  }, []);

  return (
    <div className="container">
      <h1>เขียนบนความ</h1>
      <form onSubmit={submitForm} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="content_name">ชื่อบทความ</label>
          <input
            type="text"
            className="form-control"
            value={content_name}
            onChange={(e) => setContent_name(e.target.value)}
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
            onChange={(e) => setContent_detail(e.target.value)}
          ></textarea>
        </div>
        <div className="input-group">
          <div className="input-group-prepend "></div>
          <div className="custom-file ">
            <input
              type="file"
              className="custom-file-input form-control"
              id="fileupload"
              aria-describedby="inputGroupFileAddon01"
              value={image}
              name="file"
              onChange={(e) => setImage(e.target.value)}
              // onChange={(e) => setImage(e.target.files[0])}
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
      {sdg_number.map((item, index) => (
        <ul key={index}>
          <input
            type="checkbox"
            value={item.id}
            onChange={(e) => handleChecked(e, item.id)}
            name="sdg_id"
            className="m-2"
          />
          <span
            className="bg-light shadow p-2 m-2 rounded-pill mt-3"
            style={{
              color: item.color,
              borderWidth: "1px",
              borderColor: "#ccc",
            }}
          >
            {item.id}.{item.detail}
          </span>
        </ul>
      ))}
    </div>
  );
};
export default Test;
