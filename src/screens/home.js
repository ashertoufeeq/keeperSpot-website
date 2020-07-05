import React from 'react';
import logo from "../assets/ic_launcher-web.png";
import {CardPricing} from "../components/cardPricing";
import {priceData} from "../constants/priceData";

export const Home = () => {
    return (
                <div className={'column justify-center align-center p-4'}>
                    <br/>
                    <br/>
                   <div className={'row align-center'}>
                    <div className={'logo-bigger'}>
                        <img alt={'Logo'} src={logo} className={'logo-bigger'}/>
                    </div>
                    <div className={'column align-start'}>
                        <p

                            className={'home-text text-black cursor-p'}
                            style={{ margin: 0, fontWeight: 'bold' }}
                        >
                            Keeper<text className={'home-text text-gray'}>Spot</text>
                        </p>
                        <text className={'text-gray'}>Product of Tweak InCorp Pvt. Ltd.</text>
                    </div>
                   </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        <text className={'bold'}>Tweak Incorp</text> is trying to create a new impact on day to day life of Indian households.
                    </p>
                    <p className={'text-center'}>
                        We are excited to announce our new Project
                        <text className={'bold'}> KeeperSpot </text> for impacting our day to day shopping life.<br/> The project aims to provide an online platform for every shopkeeper and move their business only in an convenient and easy way.
                    </p>
                    <text className={'heading'}  style={{paddingTop:'100px'}}>
                        KeeperSpot Pricing Scheme
                    </text>
                    <div className={'row-lg column'}>
                    {priceData.map(prices=>(<CardPricing details={prices}/>))}
                </div>
                </div>

    );
};

