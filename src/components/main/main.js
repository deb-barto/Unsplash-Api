import React, {useState} from "react";
import axios from "axios";
import './main.css'


function Main() {
 
 const [photo,setPhoto] = useState("");
 const [clientId, setClientId] = useState ("cGwNrV7VFY0H8dzHSPArh5HBWK9UCN_acFydNNYPsWA");

 const [result,setResult] = useState([]);
 
 function handleChange(event){
    setPhoto(event.target.value)
 }
 function handleSubmit(event){
     console.log(photo);
     const url ="https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId;

     axios.get(url)
     .then((response)=>{
         console.log(response)
         setResult(response.data.results)
     })
 }

    return (
    <div className="container">  
        <div className="header">
            <h1 className='title'>Search for COOL Photos</h1>
            <div className="input">
            <input onChange={handleChange} type="text" name="photo" placeholder="Search for photos" className="search"/>
            <button onClick={handleSubmit} className="submit" type="submit">Search</button>
            </div>
        </div>
        <div className="cards">
            {result.map((photo)=>(
                <img className="photos"src={photo.urls.small} alt="photoResult"/>
            ))}
        </div>
    </div>      
  );
}

  export default Main;