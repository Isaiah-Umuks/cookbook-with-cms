import { React, useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { getPost, getPosts } from "./api";


const Recipe = () => {
    // const [searchParams] = useSearchParams();
    // const selectedRecipe = searchParams.get('id'); // 'name' 
    const { recipename } = useParams();
    fetch("recipes.json")
        .then(response => response.json())
        .then(jsonobj => console.log(jsonobj));

    /// you access webapi 

    /// get date from webapi
    //result api , filter with this recipename 

    //you will get data 
    //assign the data to you htm
    return (
        <>
            <h3>ID: {recipename}</h3>
            <div className="container ">
                <div className="umarecipe " style={{ textAlign: "center" }}>
                    <div className="container">
                        <h4 className="display-4 font-weight-light text-danger ">
                            {recipename} <span className="text-secondary">|</span>{" "}
                            <span className="text-warning">Indian Recipes</span>
                        </h4>
                        <div className="row d-flex flex-row justify-content-center mb-4">
                            <div className="col-md-4">
                                <p>
                                    Cooks in <strong> 2 Hours, 00 Minutes</strong>
                                </p>
                            </div>
                            <div className="col-md-">
                                <p>
                                    Difficulty <strong>Medium</strong>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p>
                                    Servings <strong> 8 portions</strong>

                                </p>
                            </div>
                        </div>
                        <div className="box text-center ">
                            <img alt='imgdetails' img src="./assets/images.jpg" title="Chicken Biryani " />

                        </div>
                        <div className="p-4 my-4 bg-light">
                            <br />
                            <p className="first_letter">
                                Hyderabadi chicken biryani is an
                                <mark>aromatic, mouth watering and authentic Indian dish </mark> with
                                succulent chicken in layers of fluffy rice, fragrant spices and fried
                                onions.It is one of the royal delicacies to enjoy on
                                <mark>special ocassions.</mark>You'll find variations of Biryani all
                                across the Indian subcontinent, from Pakistan to Bangladesh,
                                Afghanistan to India. There are 2 main types – one where the protein
                                and/or vegetables are cooked mixed throughout the rice, and the other
                                version known as Hyderabad-style biryani in India where meat and rice
                                are layered and cook in a sealed pot over fire. The latter is the
                                style of biryani I'm sharing today.
                            </p>
                        </div>
                        <br />
                        <div className="row justify-content-center m-0 p-0 ">
                            <table className="table-bordered col-lg-9">
                                <thead>
                                    <tr className="table-dark">
                                        <th>Ingredients</th>
                                        <th>Quantity</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chicken</td>
                                        <td>1 kg</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Rice</td>
                                        <td>3 cups</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>Yogurt</td>
                                        <td>3 spoons</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <td>Ginger paste</td>
                                        <td>2 spoons</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="container m-5">
                            <h4 className="display-4 text-muted text-center py-5">
                                <u>Preparation</u>
                            </h4>
                            <div className="row ">
                                <div className="col-md-3 ">
                                    <h5>Step1</h5>
                                    <img alt='imgdetails' src="./assets/step1.jpg " style={{ width: 130 }} />
                                    <p className="first_letter">
                                        Marinate the Chicken with Ground Spices.Soak 300g basmati rice in
                                        warm water, then wash in cold until the water runs clear.
                                    </p>
                                </div>
                                <div className="col-md-3 ">
                                    <h5>Step2</h5>
                                    <img alt='imgdetails' src="./assets/step2.jpg " style={{ width: 130 }} />
                                    <p className="first_letter">
                                        Cook the Chicken.Stir the rice into the pan with 85g raisins, then
                                        pour over 850ml chicken stock.
                                    </p>
                                </div>
                                <div className="col-md-3 ">
                                    <h5>Step3</h5>
                                    <img alt='imgdetails' src="./assets/step3.jpg " style={{ width: 130 }} />
                                    <p className="first_letter">
                                        Boil Rice and add chicken.Place a tight-fitting lid on the pan and
                                        bring to a hard boil, then lower the heat to a minimum and cook
                                        the rice for another 5 mins.
                                    </p>
                                </div>
                                <div className="col-md-3 ">
                                    <h5>Step4</h5>
                                    <img alt='imgdetails' src="./assets/step4.jpg " style={{ width: 130 }} />
                                    <p className="first_letter">
                                        Turn off the heat and leave for 10 mins. Stir well, mixing through
                                        15g chopped coriander. To serve, scatter over the leaves of the
                                        remaining 15g coriander and 2 tbsp toasted almondsand its done.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h4 className="display-4 col-lg-12 text-muted ">
                                <u>Recommended Recipes</u>
                            </h4>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="col-lg-6">
                                <img alt='imgdetails'
                                    src=" ./assets/chicken.jpg "
                                    style={{ textAlign: "center", width: "100%", height: "100%" }}
                                    title="Chicken Biryani "
                                />
                            </div>
                            <div className="col-lg-6 ">
                                <img alt='imgdetails'
                                    src="./assets/egg.jpg "
                                    style={{ textAlign: "center", width: "100%", height: "100%" }}
                                    title="Egg Curry "
                                />
                            </div>
                            <div className="col-lg-6 ">
                                <img alt='imgdetails'
                                    src="./assets/laddu.webp "
                                    style={{
                                        textAlign: "center",
                                        width: "100%",
                                        height: "100%",
                                        marginTop: "2%"
                                    }}
                                    title="Laddu "
                                />
                            </div>
                            <div className="col-lg-6 ">
                                <img alt='imgdetails'
                                    src="./assets/paratha.webp "
                                    style={{
                                        textAlign: "center",
                                        width: "100%",
                                        height: "100%",
                                        marginTop: "2%"
                                    }}
                                    title="Paratha "
                                />
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className="card-footer text-right text-danger ">
                        Contact us info@wbs.com
                    </div>
                    <div
                        className=""
                        style={{
                            backgroundImage: "url(./assets/gbbb.jpeg)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h3 className="text-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container d-flex flex-column align-items-start justify-content-center">
                        <form action="action_page.php">
                            <div
                                className="d-flex flex-column align-items-start justify-content-start mw-25"
                                style={{ width: 420 }}
                            >
                                <div className="container">
                                    <h4 className="text-white">Want to recieve oure latest Recipes?</h4>
                                    <p className="text-white">
                                        Then subscribe to our Newsletter and you will be the first to try
                                        out our newest creations!
                                    </p>
                                </div>
                                <div className="container d-flex flex-row justify-content-start align-content-center p-0">
                                    <div className="container" style={{ backgroundColor: "white" }}>
                                        <input
                                            className="p-1 flex-grow-1"
                                            type="text"
                                            placeholder="Email address"
                                            name="mail"
                                            required=""
                                        />
                                    </div>
                                    <div className="container">
                                        <input
                                            type="submit"
                                            defaultValue="Subscribe"
                                            className="btn btn-outline-light"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="container p-2 m-2">
                            <a href="#">
                                <img
                                    className="mr-3"
                                    src="./assets/logo_facebook.png"
                                    width="30px"
                                    height=""
                                    alt="recipe-logo"
                                />
                            </a>
                            <a href="#">
                                <img
                                    className="mr-3"
                                    src="./assets/logo_instagram.png"
                                    width="30px"
                                    height=""
                                    alt="recipe-logo"
                                />
                            </a>
                            <a href="#">
                                <img
                                    className="mr-3"
                                    src="./assets/logo_twitter.png"
                                    width="30px"
                                    height=""
                                    alt="recipe-logo"
                                />
                            </a>
                            <a href="#">
                                <img
                                    className="mr-3"
                                    src="./assets/logo_youtube.png"
                                    width="30px"
                                    height=""
                                    alt="recipe-logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Recipe;