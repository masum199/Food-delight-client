import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Chief.css'

const Chief = ({chief}) => {
  const {chief_image, id, chief_name, years_of_experience, number_of_recipes, likes } = chief;
  return (
    <div className=''>
      <div className="chief-card">
        <div className="chief-image">
          <img src={chief_image} alt={chief_name} />
        </div>
        <div className="chief-details">
          <h3>{chief_name}</h3>
          <p><span>Experience:</span> {years_of_experience}</p>
          <p><span>Recipes:</span> {number_of_recipes}</p>
          <p><span>Likes:</span> {likes}</p>
          <Link to={`/cheifdetails/${id}`}><Button variant="success">View Recipes </Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Chief;