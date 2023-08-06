import React from "react";

export function HomeMain() {
    return (
        <main>
            <section id="home-banner" style={{ backgroundImage: `url(/assets/andrewderse-homepage.jpg)` }}>
                <div className="inner-wrap">
                    <div id="left-floater" className="text-white text-center">
                        <h2>I <i className="fa fa-heartbeat" aria-hidden="true"></i>CODE<br/>&<br/> DAD JOKES</h2>
                        <img src={process.env.PUBLIC_URL + "/assets/50dadjokes-logo.png"} alt="50 Dad Jokes Logo" className="img-fluid" />
                    </div>
                </div>
            </section>
            <section id="home-stats" className="m-5">
                <blockquote className="blockquote text-center pt-5 mb-5">
                    <p className="mb-0">Creativity is the way I share my soul with the world.</p>
                    <footer className="blockquote-footer">Brene Brown</footer>
                </blockquote>
                <div className="container text-center my-5 pt-5">
                    <div className="row">
                        <div className="col-sm">
                            <i className="fa fa-code fa-5x" aria-hidden="true"></i>
                            <hr />
                            <h3>15+</h3>
                            <h4>Years of developing</h4>
                        </div>
                        <div className="col-sm">
                            <i className="fa fa-check-square-o fa-5x" aria-hidden="true"></i>
                            <hr />
                            <h3>30+</h3>
                            <h4>Websites developed</h4>
                        </div>
                        <div className="col-sm">
                            <i className="fa fa-heart-o fa-5x" aria-hidden="true"></i>
                            <hr />
                            <h3>100+</h3>
                            <h4>Hours donated to charity</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-sub-banner" style={{ backgroundImage: `linear-gradient(rgba(29,39,49,0.71),rgba(29,39,49,0.71)),url(/assets/andrewderse-homepage-stones.jpg)` }}>
                <h2 className="text-white text-center">Keep moving forward...</h2>
            </section>
        </main>
    );
}