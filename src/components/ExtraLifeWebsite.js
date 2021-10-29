import React from 'react'

import DonationWrapper from './DonationWrapper'
import Header from './Header'

class ExtraLifeWebsite extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render(){
        return (
            <div>
                <Header/>
                <DonationWrapper/>
            </div>
        )
    }



}

export default ExtraLifeWebsite