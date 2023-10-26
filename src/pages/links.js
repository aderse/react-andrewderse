import React from "react";

export function LinksMain() {
    return(
        <main>
            <section id="sub-header">
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-12 text-center p-5">
                            <h1>Links</h1>
                            <p>(Almost) Everything I Do For Fun</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="resume">
                <div className="container">
                    <div className="row">
                        <h2 className="ml-3"><strong>Developer</strong></h2>
                    </div>
                    <hr />
                    <div className="row mb-5">
                        <div className="col-sm-12">
                            <p><u><a href="https://github.com/aderse">GitHub</a></u></p>
                            <p className="ml-5">A few repos out here where I'm just playing around with some tech while learning new things.</p>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="ml-3"><strong>Author</strong></h2>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-12">
                            <p><u><a href="https://50dadjokes.com">50dadjokes.com</a></u></p>
                            <p className="ml-5">I wrote a series of jokes books called <u>50 Dad Jokes</u>.</p>
                            <p className="ml-5">Some are funny, some not so much...I'm not even sure if some make sense to me!! (lol)</p>
                            <p><u><a href="https://medium.com/@andrewderse">medium.com</a></u></p>
                            <p className="ml-5">I am starting to write some content here from my experience as a web developer and business owner.</p>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="mt-5 ml-3"><strong>Seller</strong></h2>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-12">
                            <p><u><a href="https://www.ebay.com/usr/pops-shop">Pop's Shop</a></u></p>
                            <p className="ml-5">I sell random junk here that could be your treasure!</p>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="mt-5 ml-3"><strong>Designer</strong></h2>
                    </div>
                    <hr />
                    <div className="row mb-5">
                        <div className="col-sm-12">
                            <p><u><a href="https://www.etsy.com/shop/StickersForDevs">Etsy Shop</a></u></p>
                            <p className="ml-5">I create and sell stickers here! Some really funny ones too, so go check it out. (please!!!)</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}