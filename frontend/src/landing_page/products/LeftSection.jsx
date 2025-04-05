import React from 'react';

function LeftSection(
    {
        imageURL,
        productName,
        productDescription,
        tryDemo,
        learnMore,
        googlePlay,
        appStore,
    }
) {
    return (
        <div className="container">
            <div className="row p-5 mt-5">
                <div className="col-6">
                    <img src={imageURL} alt="img" />
                </div>
                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p class='text-muted fs-5'>{productDescription}</p>
                    <div class='p-3'>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='p-3'>
                        <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore} style={{ marginLeft: "20px" }} ><img src="/media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;