import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import './Details.css'



const Details = () => {
    const [datastate, setDataState] = useState({});
    const { id: idUrl } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        const findingid = data.find((i) => i.id == idUrl);
        setDataState(findingid || {});
    }, [data, idUrl]);

    const { img, name, Recipeimg, Recipeimgg, Recipeimggg, recipeName, recipeNamee, recipeNameee, ingredient, method, years, recipes, like } = datastate;

    return (
        <div>
            <h2 className="text-center mt-5">This is the Details of Our chef- <span className="text-danger">{name}</span></h2>
            <div className="details_container">
                <div>
                    <div><img src={img} alt="" />
                    </div>
                    <div className="mt-5">
                        <h4 className="mt-3">{name}</h4>
                        <h6><span className="text-danger ">Years of Experience:</span> {years}</h6>
                        <h6><span className="text-danger">Recipes</span> {recipes}</h6>
                        <h6><span className="text-danger">People Liked:</span> {like}</h6>
                    </div>
                </div>
                <div>
                    <h3 className="mb-4">Details of this Chef</h3>
                    <div>
                        <h6 className="text-danger">recipe Names:</h6>
                        <ul className="recipe_div">
                            <li >{recipeName}</li>
                            <li>{recipeNamee}</li>
                            <li>{recipeNameee}</li>
                        </ul>
                        <h6><span className="text-danger">Ingredient used:</span> {ingredient}</h6>
                        <h6 className="text-danger mt-4">Some of Recipes:</h6>
                        <div className="recipe_img_container">
                            <div className="recipe_img">
                                <img src={Recipeimg} alt="" />
                            </div>
                            <div className="recipe_img">
                                <img src={Recipeimgg} alt="" />
                            </div>
                            <div className="recipe_img">
                                <img src={Recipeimggg} alt="" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h6 className="text-danger">The method used:</h6>
                            <p>{method}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;