import React from 'react';

function Team() {
    return ( 
        
        <div className="container">
        <div className="row text-center">
            <h1 class='fs-2'>People</h1>
        </div>

        <div className="row  p-5 mb-5 fs-6" style={{lineHeight:"1.8"}}>
            <div className="col-6 p-5 text-center text-muted">
                <img src="\media\images\Santoshpro.jpg" alt="Img" style={{borderRadius:"100%",width:"300px"}} />
                <h3 class='p-3'>Santosh Kumar Pradhan</h3>
                <p>Founder, CEO</p>
            </div>
            <div className="col-6 p-5">
                <p>Santosh bootstrapped and founded Zerodha in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a student of the Biju Pattnaik University & Technology (BPUT) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on Homepage / TradingQnA / Twitter</p>
            </div>
        </div>
    </div>
     );
}

export default Team;