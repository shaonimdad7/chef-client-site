import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import './Details.css'
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegHandPointDown } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';



const Details = () => {
    const [datastate, setDataState] = useState({});
    const { id: idUrl } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        const findingid = data.find((i) => i.id == idUrl);
        setDataState(findingid || {});
    }, [data, idUrl]);

    const { img, name, Recipeimgone, Recipeimggtwo, Recipeimgggthree, Recipeimgggfour, recipeName, recipeNamee, recipeNameee, ingredient, method, years, recipes, like, ratingone, ratingtwo, ratingthree, ratingfour, recipeNameeee, paraone, paratwo, parathree, parafour } = datastate;

    return (
        <div>
            <h2 className="text-center header_detials">This is the Details of Our chef- <span className="text-danger">{name}</span></h2>
            <div className="details_container">
                <div className="profile_img_container">
                    <div className="img_div">
                        <img src={img} alt="" />

                    </div>
                    <div className="info_div">
                        <h3>{name}</h3>
                        <p> {years}</p>
                        <p><span className="like"><FaRegThumbsUp /></span>  <span className="like">{like}</span></p>
                        <p>{recipes}</p>
                        <p>{ingredient}</p>
                        <p>{method}</p>

                    </div>
                </div>
                <div className="">
                    <h5 className="part_two_header text-center"> Some Recipes of This Chef <FaRegHandPointDown /></h5>
                    <div className="recipe_all_container">
                        <div className="card_container_div">
                            <div className="recipe_img ">
                                <img src={Recipeimgone} alt="" />
                            </div>
                            <h5 className="text-center mt-3">{recipeName}</h5>
                            <div className="rating_container mt-2">
                                <p className="fastar">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                                <p className="rating"><div className="text-center">{ratingtwo}</div></p>
                            </div>
                            <p className="text-center mt-2"> {paraone}</p>
                            <button className="btn_submit">Favorite </button>
                        </div>
                        <div className="card_container_div">
                            <div className="recipe_img ">
                                <img src={Recipeimggtwo} alt="" />
                            </div>
                            <h5 className="text-center mt-3">{recipeNamee}</h5>
                            <div className="rating_container mt-2">
                                <p className="fastar">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                                <p className="rating"><div className="text-center">{ratingone}</div></p>
                            </div>
                            <p className="text-center mt-2"> {paratwo}</p>
                            <button className="btn_submit">Favorite </button>
                        </div>
                        <div className="card_container_div">
                            <div className="recipe_img ">
                                <img src={Recipeimgggthree} alt="" />
                            </div>
                            <h5 className="text-center mt-3">{recipeNameee}</h5>
                            <div className="rating_container mt-2">
                                <p className="fastar">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                                <p className="rating"><div className="text-center">{ratingthree}</div></p>
                            </div>
                            <p className="text-center mt-2"> {parathree}</p>
                            <button className="btn_submit">Favorite </button>
                        </div>
                        <div className="card_container_div">
                            <div className="recipe_img ">
                                <img src={Recipeimgggfour} alt="" />
                            </div>
                            <h5 className="text-center mt-3">{recipeNameeee}</h5>
                            <div className="rating_container mt-2">
                                <p className="fastar">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                                <p className="rating"><div className="text-center">{ratingfour}</div></p>
                            </div>
                            <p className="text-center mt-2"> {parafour}</p>
                            <button className="btn_submit">Favorite </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;