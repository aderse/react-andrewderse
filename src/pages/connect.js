import React from "react";

export function ConnectMain() {
    return(
        <main>
            <section id="sub-header">
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-12 text-center p-5">
                            <h2>Connect</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <a href="https://www.facebook.com/derseandrew"><i className="fa fa-facebook fa-3x" aria-hidden="true"></i><br></br>facebook</a>
                        </div>
                        <div className="col-sm-4 text-center">
                            <a href="https://www.instagram.com/derseandrew/"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i><br></br>instagram</a>
                        </div>
                        <div className="col-sm-4 text-center">
                            <a href="https://www.linkedin.com/in/andrew-derse-56692235/"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i><br></br>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}