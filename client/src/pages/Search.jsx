import React,{useState} from 'react'
import axios from 'axios'



const Search = () => {

    const [search,setSearch] = useState('');
    const [data,setData] =useState({});


    const handleSearch =(e)=>{
        // console.log(search)
        e.preventDefault(e);
        // alert(search)
        axios.get('http://192.168.1.46:3000/search/'+search)
        .then((response)=>setData(response.data))
        .catch(err=>console.error(err))
        
    }
  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
      <input
        className="form-control me-2 rounded-pill shadow-sm"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" style={{ border: "none", background: "white" }}>
        {}
        <i className="fa fa-search"></i>
      </button>

      
      {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
    </form>
  );
}

export default Search