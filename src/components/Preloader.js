import React from 'react'; // needed to make JSX syntax work
import PreloaderImg from '../assets/preloading.png';

const Preloader = () => (
    <div className="App container">
        <h1> The average H1B in tech pays ... </h1>
        <p className="lead">
            Since 2012 the US tech has done this.
            Immigration salaries. <b>This is bold text.</b>
        </p>
        <img src={PreloaderImg} style={{width: '100%'}} alt="" />
        <h2 className="text-center">Loading data ...</h2>
    </div>
);

export default Preloader;