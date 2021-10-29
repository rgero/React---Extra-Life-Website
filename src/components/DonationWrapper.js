import React from 'react';
import '../styles/DonationWrapper.css';
import HelperFunctions from './HelperFunctions';
import TeamPresentation from './TeamPresentation';

class DonationWrapper extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = {
      sumDonations: 0,
      previousYears: 21127.22,
      teamData: {"sumDonations" : 0}
    }

    this.helper = new HelperFunctions();
  }

  async componentDidMount()
  {
    console.log("I'm here");
    let desiredData = await this.helper.getAllData();
    this.setState(
      {
        teamData: desiredData[0]
      }
    )
    console.log(this.state.teamData);
  }

  render() 
  {
    let teamData = this.state.teamData;
    return (
      <div className="teamDonationWrapper">
        <TeamPresentation teamData={teamData} helper={this.helper}/>
      </div>
    )
  }

}

export default DonationWrapper;