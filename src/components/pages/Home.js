import React from 'react';
import "../../styles/Home.css"

export default function Home() {
  return (
    <div className="homePage">
        <div className="homeWrapper">
            <div className="home-text-Container">
                <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9 col-sm-11 col-xs-11 col-11 type-write-wrapper">
                        <h1 className="hero-header line-1 anim-typewriter">Hello World,</h1>
                        <h1 className="hero-header line-2 anim-typewriter2">I am <span className="span-line2">Zahra</span>.</h1>
                        <p className="hero-header line-3 anim-typewriter3">I'm a full-stack web developer.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}