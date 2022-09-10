import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Sdg = () => {
  const [data,setData] = useState({});

  useEffect(() =>{
    axios
      .get("http://172.16.163.89:3000/getAll")
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  },[])

  
  return (
    <div>

    </div>
  )
}

export default Sdg