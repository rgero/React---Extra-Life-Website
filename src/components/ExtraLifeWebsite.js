import React from 'react'

import TotalComponent from './Donation'
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
                <TotalComponent/>
            </div>
        )
    }



}

export default ExtraLifeWebsite