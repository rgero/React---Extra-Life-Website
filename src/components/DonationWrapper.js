import React from 'react';
import '../styles/DonationWrapper.css';
import HelperFunctions from './HelperFunctions';
import TeamPresentation from './TeamPresentation';
import PlayerPresentation from './PlayerPresentation';

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

  sortPlayersByDonationAmount(playerArray)
  {
    playerArray.sort(function(a,b)
    {
      return parseFloat(b.sumDonations) - parseFloat(a.sumDonations);
    })
    return playerArray;
  }

  async componentDidMount()
  {
    let desiredData = await this.helper.getAllData();

    // Sort Team order
    const teamData = desiredData.shift();
    const playerData = this.sortPlayersByDonationAmount(desiredData);
    this.setState(
      {
        teamData: teamData,
        players: playerData
      }
    )
  }

  render() 
  {
    let teamData = this.state.teamData;
    return (
      <div>
        <div className="teamDonation">
          <TeamPresentation teamData={teamData} helper={this.helper}/>
          <hr/>
        </div>
        <div>
          {this.state.players ? this.state.players.map(function(data)
            {
              return <PlayerPresentation className="playerPresentation" player={data}/>
            }) : "No Players Loaded"
          }
        </div>
      </div>
    )
  }

}

export default DonationWrapper;