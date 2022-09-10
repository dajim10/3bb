import React,{useState, useEffect} from 'react'

import axios from 'axios'

const Target = () => {
    const [data,setData] = useState([]);

    useEffect(() =>{
        axios.get(`http://localhost:3000/sdgs`)
        .then(response=>setData(response.data))
        .catch(err=>console.error(err))
    },[])


  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-3 col-md-6 col-sm" key={index}>
            <div className="card">
              <div className="inner text-center">
                <img src={item.img} alt="" width={310} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Target