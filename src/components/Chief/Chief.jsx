import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Chief.css'

const Chief = ({chief}) => {
  const {chief_image,id,chief_name,years_of_experience,number_of_recipes,likes } =chief;
  return (
    <div className=''>
       
  <div className="col">
    <div className="card">
    <img src={chief_image} className="card-img-top img-fluid" alt="..." style={{ width: "3500px", height: "350px" }} />
      <div className="card-body">
        <h5 className="card-title">{chief_name}</h5>
        <p className="card-text">{years_of_experience}</p>
        <p className="card-text">{number_of_recipes}</p>
        <p className="card-text">{likes}</p>
        
        <Link to={`/cheifdetails/${id}`}><Button variant="success">View Recipes </Button></Link>
      </div>
    </div>
  </div>
 
    </div>
  );
};

export default Chief;