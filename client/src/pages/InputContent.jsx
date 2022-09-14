import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

// const API_URL = "https://77em4-8080.sse.codesandbox.io";
const API_URL = "http://localhost:3000";
const UPLOAD_ENDPOINT = "public";

export default function InputContent({ handleChange, ...props }) {
  const [path, setPath] = useState("");
  const [content_name, setContent_name] = useState("");
  const [content_detail, setContent_detail] = useState("");
  const [image, setImage] = useState("");
  const [sdg_number, setSdg_number] = useState([]);
  const [sdg_id, setSdg_id] = useState([]);
  const [checked, setChecked] = useState(false);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); //ใช้เพื่อภาพ Preview

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
      .get("http://localhost:3000/sdgs", {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((res) => setSdg_number(res.data));
    // .then(res => console.log(res.data))
  }, []);

  // function onClick(e) {
  //   alert(e.target.value);

  // }

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000/public");
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
              // mode: "no-cors",
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `${API_URL}/${UPLOAD_ENDPOINT}/${res.filename}`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function handleSubmit(e) {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("content_name", content_name);
    formData.append("content_detail", content_detail);

    e.preventDefault();
    // alert(e.target.value);
    // setContent_detail(e.target.content_detail)
    // console.log(sdg_id)
    console.log(file);

    axios
      .post("http://localhost:3000/upload", { formData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

  // const onClickUpload = async () => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   formData.append("content_name", content_name);
  //   formData.append("content_detail", content_detail);
  //   // console.log(sdg_number)
  //   formData.append("sdg_id", sdg_id);
  //   const uploadImg = await axios({
  //     method: "post",
  //     url: "http://localhost:3000/upload",
  //     data: formData,
  //   });
  // };

  const onClickUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("content_name", content_name);
    formData.append("content_detail", content_detail);
    formData.append("sdg_id", sdg_id);
    const uploadImage = await axios({
      method: "post",
      url: "http://localhost:3000/upload",
      data: formData,
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const handleUploadImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0]; // เก็บไว้ setState ลงใน file
    console.log(file.fieldname);
    const reader = new FileReader(); // เรียก Class FileReader เพื่อแปลง file image ที่รับเข้ามา
    reader.onloadend = () => {
      // เป็น eventของFileReaderเมื่อโหลดภาพเสร็จ

      setFile(file); // ทำการ setState
      setImagePreviewUrl(reader.result); //เหมือนด้านบน
    };
    reader.readAsDataURL(file); // เป็นส่วนของการแสดงรูป
    setFile(file);
    const formData = new FormData();
    formData.append("file", file);
    const uploadImg = axios({
      method: "post",
      url: "http://localhost:3000/public",
      data: formData,
    });
  };

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <div className="container" style={{ padding: "1rem", height: "100vh" }}>
      <p className="bg-warning p-2 text-dark text-center rounded-pill shadow">
        Upload Content
      </p>
      {/* <form encType="multipart/form-data"> */}
      <form onSubmit={onClickUpload} encType="multipart/form-data">
        <label htmlFor="">หัวข้อ</label>
        <input
          type="text"
          className="form-control mb-2"
          name="content_name"
          onChange={(e) => setContent_name(e.target.value)}
        />
        <img
          src={
            imagePreviewUrl ? imagePreviewUrl : "null"
            // : "https://dcvta86296.i.lithium.com/t5/image/serverpage/image-id/14321i0011CCD2E7F3C8F8/image-size/large?v=1.0&px=999"
          }
          style={{ width: "100%", height: "auto" }}
        />{" "}
        <label htmlFor="" className="mt-3">
          รูปภาพหน้าหลัก
        </label>
        <input
          type="file"
          className="form-control mb-2"
          name="file"
          onChange={handleUploadImage}
          // onChange={e=>setFile(e.target.files[0])}

          // onChange={(e) =>
          //   {
          //     const fileName= e.target.files[0].name;
          //     console.log(e.target.files)
          //     const filePath = e.target.files[0].path;
          //     setImage(`${fileName}`)
          //   }}
          // onChange={(e) => alert(e.target.files[0].name)}
        />
        {/* <button className="btn btn-outline-primary" onClick={onClickUpload}>
          {" "}
          Upload{" "}
        </button>{" "} */}
        <p>เนื้อหา</p>
        <CKEditor
          config={{
            extraPlugins: [uploadPlugin],
            toolber: {
              items: [
                "heading",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "|",
                "blockQuote",
                "insertTable",
                "|",
                "imageUpload",
                "undo",
                "redo",
              ],
            },
          }}
          editor={ClassicEditor}
          onReady={(editor) => {}}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
          onChange={(event, editor) => {
            handleChange(editor.getData());
            setContent_detail(editor.getData());
            // setContent_detail(e.target.value);
            // console.log(editor.getData().files());
          }}
          {...props}
          name="content_detail"

          // onSubmit={(event, editor) => {
          //   handleSubmit(editor.getData());
          // }}
        />
        {/* <div className="form-group form-checkbox"> */}
        {/* {sdg_number} */}
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
        <div>
          <button
            type="submit"
            className="btn btn-primary mt-2 rounded-pill shadow"
            // onClick={onClickUpload}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
