import React, { useEffect, useState } from 'react';
import { FaChessKing, FaHamburger } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import './ChiefDetails.css'
import MenuDetails from '../MenuDetails/MenuDetails';


const ChiefDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const [chiefs, setChiefs] = useState([]);
    console.log(id)
    useEffect(() => {
        const chiefData = datas.find((item) => item.id === id);
        setChiefs(chiefData);
    }, [datas, id]);
    console.log(chiefs)
    const menus = chiefs.recipes
    console.log(menus)
  
    return (
        <div className='background-image glass-background'>
        <div className="row">
        <div className="col-md-4">
  <div className="chief-info">
    <div className='ms-5 ps-5 me-5 pe-5'>
    <img className='chief-image' src={chiefs.chief_image} alt="" />
    <h2 className='fw-bold my-4'>{chiefs.chief_name}</h2>
    <p><FaChessKing className='fs-4'/> {chiefs.years_of_experience}</p>
    <p><FaHamburger className='fs-4'/> {chiefs.number_of_recipes}</p>
    <p><FcLike className='fs-4'/> {chiefs.likes}</p>
    <p className='text'>{chiefs.bio}</p>
    </div>
  </div>
</div> 

  <div className="col-md-8">
  {menus && menus.map(menu => (
    <MenuDetails menu={menu} key={menu.id} />
  ))}
</div>
</div>
      </div>
    );
};

export default ChiefDetails;