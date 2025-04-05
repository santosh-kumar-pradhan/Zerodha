import React from 'react';

function Hero() {
    return (
        <div className="container-fluid" id='supportHero'>
            <div className="" id='supportWrap' >
                <h3 class='fs-4 p-5'>Support Portal</h3>
                <a href="" class='p-5'>Track Tickets</a>
            </div>
            <div className="container">
            <div className="row mb-5 ">
                <div className="col-6 p-5">
                    <h1 class='fs-4'>Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected... '/>
                    <br /> <br />
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href=""> Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                <h1 class='fs-4'>Featured
                    </h1>
                   <ol>
                    <li> <a href="">
                    Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]
                    </a></li>
                    <li> <a href="">Surveillance measure on scrips - April 2025</a></li>
                   </ol>
                   
                </div>
            </div>
            </div>
           
        </div>
    );
}

export default Hero;