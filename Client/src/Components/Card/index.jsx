import React, { useContext } from 'react'
import { IoBasketSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { BasketContext } from '../../context/BasketContext';
import { Link } from 'react-router-dom';
const Card = ({ image, text, info, price, product, id }) => {
    const { addBasket } = useContext(BasketContext)
    return (
        <div>
            <div className="CardArea">
                <div className="CardBox">
                    <div className="CardImage">
                        <img src={image} alt="" />
                    </div>
                    <div className="CardText">
                        <h1>{text}</h1>
                        <h4>{info}</h4>
                    </div>
                    <div className="CardPrice">
                        <p>${price}</p>
                    </div>

                </div>
                <div className="CardIcon">
                    <div><button onClick={() => addBasket(product)}><IoBasketSharp /></button></div>
                    <Link to={`/${id}`}><MdRemoveRedEye /></Link>
                </div>
            </div>
        </div>
    )
}

export default Card