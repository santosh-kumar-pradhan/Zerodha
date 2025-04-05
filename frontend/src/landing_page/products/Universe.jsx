import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className=" p-3 mt-5 mb-5">
                    <img src="media/images/smallcaseLogo.png" />
                    <p className="text-small text-muted">Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
    

                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup for free
                </button>
            </div>
        </div>
    );
}

export default Universe;