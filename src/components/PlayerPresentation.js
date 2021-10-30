import React from 'react';
import '../styles/PlayerPresentation.css';

const numeral = require('numeral');

class PlayerPresentation extends React.Component
{
  constructor(props)
  {
    super(props)
    console.log(this.props.player);

    this.formatValue = this.formatValue.bind(this);
  }

  formatValue(newValue)
  {
    /* This is a bit overkill, but I'm sure there will be more uses for numeral */
    return numeral(newValue).format('$0,0[.]00')
  }

  render() 
  {
    const currentYear = this.formatValue(this.props.player["sumDonations"]);
    const currentGoal = this.formatValue(this.props.player["goal"]);
    const currentPercentage = numeral(parseFloat(this.props.player["sumDonations"])/parseFloat(this.props.player["goal"])).format('0.00%');
    return (
      <div className="playerDonationWrapper">
        <div className="playerName">{this.props.player["name"]}</div>
        <div className="currentYear">has raised {currentYear} of their {currentGoal} goal</div>
        <div className="currentPercentage">That means they're <b>{currentPercentage}</b> towards their goal!</div>
        <div className="donationLink"><a href={this.props.player["donationLink"]}>Click here to donate to their page</a></div>
      </div>
    )
  }

}

export default PlayerPresentation;