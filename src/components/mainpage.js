import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Recipe from './recipe';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';
import { getRecipes, getAllData } from '../API/data.js';//data.js file

const article = (data) => {
    // console.log(data.filter(data => data.fields.name === 'Quinoa and Eggplant Stuffed Peppers'));
    console.log(data);
    const result = data;
    return result.map(iteration => {
        return (
            <div className="col md-4" >
                <div className="card w-100 md-4" style={{ border: "white" }}>
                    <img alt='testing' className="card-img" src={iteration.fields.image.fields.file.url} />
                    <div className="card-body">
                        <p className="card-text" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                            {iteration.fields.name}
                        </p>

                    </div>
                </div>
                <Link className="btn btn-primary" to={`/DetailedRecipe/${iteration.fields.name}`}>Read more</Link>
            </div>
        )
    });
};
const MainPage = () => {
    const [fetchdata, setFetchdata] = useState();
    useEffect(() => {
        (async () => {
            getRecipes()
                .then(jsonobj => setFetchdata(article(jsonobj)))
        })();
    }, []);
    return (
        <div>
            
            <main className="m-0 jumbotron">
                <div className="topper container">
                    <div style={{ backgroundImage: 'url(assets/intro.jpeg)', height: '500px', backgroundRepeat: 'no-repeat', backgroundSize: '100% auto' }}>
                        <div className="row h-100 p-0 mx-0">
                            <div className="col text-center bg-light bg-opacity-10 text-dark border-dark my-auto">
                                <h2 className="mx-auto p-2" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Welcome to the Amazing Cookbook</h2>
                                <h4 className="mx-auto-2 p-2" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Here you will be able to find some of <br /> the best recipes in the World.</h4>
                                <h4 className="mx-auto-1 p-2" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Enjoy!</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-dark p-2 mr-2" style={{ fontFamily: '"Times New Roman", Times, serif', color: 'violet' }}>Recipes</h1>
                <h4 className="text-center text-dark p-2 mr-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Here you can find some of our most popular recipes.</h4>
                <div className="container">
                    <div className="row">

                        {fetchdata}
                    </div>
                </div>
            </main>
            <footer className style={{ backgroundImage: 'url(assets/gbbb.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="container">
                </div>
                <div className="container d-flex flex-column align-items-start justify-content-center">
                    <form action="action_page.php">
                        <div className="d-flex flex-column align-items-start justify-content-start mw-25" style={{ width: '420px' }}>
                            <div className="container">
                                <h4 className="text-white">Want to recieve oure latest Recipes?</h4>
                                <p className="text-white">
                                    Then subscribe to our Newsletter and you will be the first to try out our newest creations!
                                </p>
                            </div>
                            <div className="container d-flex flex-row justify-content-start align-content-center p-0">
                                <div className="container">
                                    <input className="email" type="text" placeholder="Email address" />

                                    <input type="submit" defaultValue="Subscribe" className="btn btn-outline-light" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="container p-2 m-2">
                        <a href><img className="mr-3" src="assets/logo_facebook.png" width="30px" margin-right="5px" height="true" alt='testing' /></a>
                        <a href><img className="mr-3" src="assets/logo_instagram.png" width="30px" height="true" margin-right="5px" alt='testing' /></a>
                        <a href><img className="mr-3" src="assets/logo_twitter.png" width="30px" height="true" margin-right="5px" alt='testing' /></a>
                        <a href><img className="mr-3" src="assets/logo_youtube.png" width="30px" height="true" margin-right="5px" alt='testing' /></a>
                    </div>
                </div>
                <div className="copyright d-flex flex-row justify-content-around mt-3 pt-2 bg-light">
                    <div className="privacy">
                        HELP &nbsp; &nbsp; &nbsp; &nbsp;TERM &amp; CONDITION &nbsp; &nbsp; &nbsp;PRIVACY
                    </div>
                    <p className="copyright-text">copyright © 2022 - The International Cookbook</p>
                </div>
            </footer>
        </div>
    );
}

export default MainPage;