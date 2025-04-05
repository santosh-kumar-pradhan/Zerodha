import React from 'react';

function CreateTicket() {
    return (
        <div className="container">
            <div className="row mt-5">
                <h1 class='fs-4 text-muted'>To create a ticket, select a relevant topic</h1>
            </div>
            <div className="row  mb-3 p-5">
                <div className="col-4">
                    <h4 class='fs-5'> <i class="fa-solid fa-circle-plus"></i> &nbsp; Account Opening</h4>
                    <p style={{ lineHeight: '2',marginLeft:'30px' }}>
                    <a href=""style={{textDecoration:"none"}} >Resident individual</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Minor</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Non Resident Indian (NRI)</a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}> Glossary</a>
                    <br />
                    </p>
                </div>
                <div className="col-4 ">
                <h4 class='fs-5'><i class="fa-solid fa-user"></i> &nbsp; Your Zerodha Account</h4>
                    <p style={{ lineHeight: '2',marginLeft:'30px' }}>
                    <a href=""style={{textDecoration:"none"}} >Your Profile</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Account modification</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Client Master Report (CMR) and Depository Participant</a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}>Nomination</a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}> Transfer and conversion of securities</a>
                    <br />
                    </p>
                </div>
                <div className="col-4">
                <h4 class='fs-5'> <i class="fa-solid fa-chart-simple"></i> &nbsp; Kite</h4>
                    <p style={{ lineHeight: '2',marginLeft:'30px' }}>
                    <a href=""style={{textDecoration:"none"}} >IPO</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Trading FAQs</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Margin Trading Facility (MTF) and Margins</a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}>Charts and orders</a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}> Alerts and Nudges</a>
                    <br />
                    </p>
                </div>
            </div>
            {/* next */}
            <div className="row  mb-3 p-5">
                <div className="col-4">
                    <h4 class='fs-5'> <i class="fa-solid fa-hands-bound"></i> &nbsp;  Funds</h4>
                    <p style={{ lineHeight: '2',marginLeft:'30px' }}>
                    <a href=""style={{textDecoration:"none"}} >Add money</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Withdraw money</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Add bank accounts</a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}>eMandates</a>
                    <br />
                    </p>
                </div>
                <div className="col-4 ">
                <h4 class='fs-5'><i class="fa-solid fa-circle-dot"></i> &nbsp;  Console</h4>
                    <p style={{ lineHeight: '2',marginLeft:'30px' }}>
                    <a href=""style={{textDecoration:"none"}} >Portfolio</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Corporate action</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >
                        Funds statement
                    </a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}>Reports</a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}>Segment</a>
                    <br />
                    </p>
                </div>
                <div className="col-4">
                <h4 class='fs-5'> <i class="fa-solid fa-comment-dollar"></i> &nbsp; Coin</h4>
                    <p style={{ lineHeight: '2',marginLeft:'30px' }}>
                    <a href=""style={{textDecoration:"none"}} >
                    Understanding mutual funds and Coin
                    </a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >Coin app</a>
                    <br />
                    <a href=""style={{textDecoration:"none"}} >
                    Coin web
                    </a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}>
                    Transactions and reports
                    </a>
                    <br />
                    <a href="" style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a>
                    <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;