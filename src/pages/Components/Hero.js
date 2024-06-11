import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <>
            <div className='hero-container'>
                <div className='hero-sub-container' style={{ backgroundImage: "url('/images/roadtrip1.svg')" }}>

                    <div className='cover-fade'></div>

                    <div className='whole-upper-info-container'>

                        <div className='hero-title'>
                            <p>​India's<span> Leading One-Way Inter-City</span> Cab Service Provider</p>
                        </div>

                        <div className='hero-form'>
                            <div className='buttons-group'>
                                <div className='group1'>
                                    <button className='btn1'>Outstation</button>
                                    <button className='btn1'>Local</button>
                                    <button className='btn1'>Airport</button>
                                </div>

                                <div className='group2'>
                                    <button className='btn2'>Outstation</button>
                                    <button className='btn2'>Outstation</button>
                                </div>

                            </div>

                            <div className='form-container'>
                                <form class="two-column-form">

                                    <div class="form-row">
                                        <div class="form-group">
                                            <div className='icon-info'><img src='../images/cross.svg' alt='img'></img></div>
                                            <label for="firstName">From</label>
                                            <input type="text" id="firstName" name="firstName" required />
                                        </div>

                                        <div className='arrow-div'><img src='../images/compare_arrows.svg' alt='img'></img></div>

                                        <div class="form-group">
                                            <div className='icon-info'><img src='../images/location.svg' alt='img'></img></div>
                                            <label for="lastName">To</label>
                                            <input type="text" id="lastName" name="lastName" required />
                                        </div>
                                    </div>


                                    <div class="form-row gp">
                                        <div class="form-group">
                                            <div className='icon-info'><img src='../images/time.svg' alt='img'></img></div>
                                            <label for="firstName">Pick</label>
                                            <input type="text" id="firstName" name="firstName" required />
                                        </div>

                                        <div className='arrow-div arr2'></div>

                                        <div class="form-group">
                                            <div className='icon-info'><img src='../images/date.svg' alt='img'></img></div>
                                            <label for="lastName">Last Name</label>
                                            <input type="text" id="lastName" name="lastName" required />
                                        </div>
                                    </div>

                                    <button className='btn-3'> Explore cabs</button>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>


                <div className='overlay-container'>
                    <div className='sub-overlay'>
                        <div className='info o1'><p className='p1'>No over-pricing</p> <p className='p2'>cheapest costs | Compitive prices</p></div>

                        <div className='info o2'>
                            <p className='p3'>No over-pricing</p>
                            <img src='../images/device.svg'></img>
                        </div>

                        <div className='info o3'><p className='p1'>No return fare</p> <p className='p2'>One-Way cab fare | No hidden charges</p></div>
                    </div>

                    <div className="mob-device">
                        <p>Download Now!</p>
                        <img src='../images/device2.svg'></img>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero