import React from 'react';
import logo from'../assets/ic_launcher-web.png'
export const Header = () => {
    return (
        <div className='header row-lg column align-center justify-center justify-lg-between bg-white'>
           <div className={'row justify-start align-center'}>
            <div className={'logo'}>
                <img src={logo} className={'logo'}/>
           </div>
            <div className={'column align-start'}>
            <p

                className={' profile-text text-black cursor-p'}
                style={{ margin: 0, fontWeight: 'bold' }}
            >
                Keeper<text className={'profile-text text-gray'}>Spot</text>
            </p>
               <text className={'text-gray'}>Product of Tweak InCorp Pvt. Ltd.</text>
            </div>
           </div>
            <div className={'row align-center justify-between'}>
                <p className={'m-2 text-black cursor-p'}>
                    Home
                </p>
                <p className={'m-2 text-black cursor-p'}>
                    About Us
                </p>
                <p className={'m-2 text-black cursor-p'}>
                    Contact Us
                </p>
            </div>
        </div>
    );
};

