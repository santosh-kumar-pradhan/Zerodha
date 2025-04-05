import React from 'react';
import OpenAccount from '../OpenAccount';
import{Link} from 'react-router-dom'


function SignUp() {
    return (
        <div className="container">
            <div className="row text-center mt-5 mb-5">
                <h1 class='p-4 fs-1'>Open a free demat and trading account online</h1>
                <p class='fs-5 mb-5'>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
            </div>
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/account_open.svg" alt="" />
                </div>
                <div className="col-6 p-5">
                    <h2 class='m-2'>Signup now</h2>
                    <h5 class='text-muted p-2 mb-4'>Or track your existing application</h5>
                    <div class="input-group  mb-5" style={{ width: "70%" }}>
                        <span class="input-group-text" id="addon-wrapping"> <img src="media/images/india-flag.svg" alt="" /> &nbsp;+91</span>
                        <input type="number" class="form-control" autoFocus min='1000000000' max='999999999' placeholder="Enter your mobile number" />
                    </div>
                    <button type="button" class="btn btn-primary" style={{ width: '50%' }}>Get OTP</button>
                    <p class='mt-5 text-muted'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                </div>
            </div>
            <div className="row">
                <h2 class='text-center p-5 mb-5'>Investment options with Zerodha demat account</h2>
                <div className="row mb-5">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-2">
                                <img src="media/images/stocks-acop.svg" alt="" />
                            </div>
                            <div className="col-5" style={{marginLeft:'15px'}}>
                                <h3>Stocks</h3>
                                <p class='text-muted'>Invest in all exchange-listed securities</p>
                            </div>
                            {/* <div className="col-1"></div> */}
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2 p-2">
                                <img src="media/images/mf-acop.svg" alt="" />
                            </div>
                            <div className="col-5" style={{marginLeft:'30px'}}>
                                <h3>Mutual funds</h3>
                                <p class='text-muted'>Invest in commission-free direct mutual funds</p>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-2">
                                <img src="media/images/ipo-acop.svg" alt="" />
                            </div>
                            <div className="col-5" style={{marginLeft:'30px'}}>
                                <h3>IPO</h3>
                                <p class='text-muted'>Apply to the latest IPOs instantly via UPI</p>
                            </div>
                            {/* <div className="col-1"></div> */}
                        </div>
                    </div>
                    <div className="col-6 mb-5">
                    <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2 p-2">
                                <img src="media/images/fo-acop.svg" alt="" />
                            </div>
                            <div className="col-5" style={{marginLeft:'30px'}}>
                                <h3>Futures & options</h3>
                                <p class='text-muted'>Hedge and mitigate market risk through simplified F&O trading</p>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5  mb-5">
                    <a href="https://zerodha-psi.vercel.app/">
                    <button type="button" class="btn btn-primary fs-3" style={{width:'25%' ,marginLeft:'500px'}}>Explore Investment</button>
                    </a>
                </div>
            </div>
            <OpenAccount/>    
        </div>
    );
}

export default SignUp;