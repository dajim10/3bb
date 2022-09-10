import React,{useState} from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// const API_URL = "https://77em4-8080.sse.codesandbox.io";
const API_URL = "http://172.16.163.89:3000"
const UPLOAD_ENDPOINT = "public";

export default function InputContent({ handleChange, ...props }) {

  const [path,setPath] = useState('');

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
                  default: `${API_URL}/${res.filename}`,
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
    // e.preventDefault(props);
    alert(e.target.value);
  }

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
      <form action="">
        <label htmlFor="">หัวข้อ</label>
        <input type="text" class="form-control mb-2" />
        <label htmlFor="">รูปภาพหน้าหลัก</label>
        <input type="file" class="form-control mb-2" />
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
            console.log(event);
          }}
          {...props}
        />
      </form>
    </div>
  );
}
