import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className="row text-center p-5 mt-5 border-bottom">
                  <h1>Charges</h1>
                  <h4 class='text-muted fs-5 mt-3 mb-5'>List of all charges and taxes</h4>
            </div>
            <div className="row text-center mt-3 p-5">
                <div className="col-4 p-5">
                    <img src=".\media\images\pricing0.svg" alt="" />
                    <h2 class='text-muted'>Free equity delivery</h2>
                    <p class='text-muted p-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src=".\media\images\intradayTrades.svg" alt="" />
                    <h2  class='text-muted'>Intraday and F&O trades</h2>
                    <p class='text-muted p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                <img src=".\media\images\pricing0.svg" alt="" />
                    <h2  class='text-muted'>Free direct MF</h2>
                    <p class='text-muted p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;