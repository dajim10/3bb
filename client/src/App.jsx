import React,{useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './Home'
import About from './pages/About'
import Target from './pages/Target'
import Login from './pages/Login'
import InputContent from './pages/InputContent'
import Footer from './pages/Footer'
import TextEditor from './pages/TextEditor'
import axios from 'axios'
const App = (props) => {
  const [editor,setEditor] = useState(null)

  function handleSubmit(editor) {
    axios.post('http://localhost:3000/insertcontent',editor)
    .then(response => {console.log(response)})
  }

  return (
    <>
      <Navbar />
      {/* <TextEditor /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/target" element={<Target />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/inputContent"
          element={
            <InputContent
              handleChange={(data) => {
                setEditor(data);
              }}

              handleSubmit={(data)=> {
                setEditor(data);
              }}

              data={editor}
              {...props}
              
              />
            }
            />
      </Routes>
            {/* {editor} */}
      <Footer />
    </>
  );
}

export default App