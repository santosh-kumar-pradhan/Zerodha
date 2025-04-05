import React from 'react';

function RightSection(
    {
        productName,
        productDescription,
        learnMore,
        imageURL,
    }
) {
    return (

        <div className="container">
            <div className="row p-5 mt-5">
                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p class='text-muted fs-5'>{productDescription}</p>
                    <div class='p-3'>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt="img" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;