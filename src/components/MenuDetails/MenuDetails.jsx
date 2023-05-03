import React, { useState } from 'react';
import './MenuDetails.css'
import { Button } from 'react-bootstrap';
import { FaRegBookmark, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuDetails = ({ menu }) => {
    const { recipe_image, recipe_name, cooking_method, ingredients, rating } = menu

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonClick = () => {
        setIsButtonDisabled(true);
        toast('the recipe is your favorite list!!!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    return (
        <div className='recipie-info d-md-flex gap-5'>
            <ToastContainer />
            <div className='flex-grow-1'>
                <img className='recipe-image' src={recipe_image} alt="" />
            </div>
            <div className='flex-grow-2'>
                <h2>{recipe_name}</h2>
                <p className="coocking-method">{cooking_method}</p>
            </div>
            <div className='flex-grow-3'>
                <h4 className='ingre-info'><span className='fw-bold '>ingredients:</span>{ingredients}</h4>
                <div>
                    <Rating className='' placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}>

                    </Rating>
                </div>
                <Button className='px-5 py-2 mt-5' variant="warning" onClick={handleButtonClick} disabled={isButtonDisabled}>
                    <FaRegBookmark /> FAVORITE
                </Button>
            </div>
        </div>
    );
};

export default MenuDetails;