import React from 'react';

export const CardPricing = ({details}) => {
    return (
        <div className={'card'} style={{width:'15rem'}}>
            <div className={'bold card-title'}>{details.title}</div>
            <div className={'divider'}/>
            <br/>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Pricing : <text>{details.price}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Monthly Active User : <text>{details.monthlyActiveUser}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Customer Support : <text>{details.customerSupport}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Product Limit : <text>{details.productLimit}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Staff Limit : <text>{details.staff}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    User Search Radius : <text>{details.userSearchRadius}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Inventory Management : <text>{details.inventoryManagement}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Barcode Scanning : <text>{details.barcodeScanning}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Alexa Skill : <text>{details.alexaSkill}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Services Limit : <text>{details.service}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Custom Notification Support : <text>{details.customNotificationSupport}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    Concurrent Offers : <text>{details.concurrentOffers}</text>
                </text>
            </div>
            <div className={'m-v-2'}>
                <text className={'bold'}>
                    ComparePricing : <text>{details.comparePricing}</text>
                </text>
            </div>
        </div>
    );
};

