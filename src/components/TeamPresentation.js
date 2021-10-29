import React from 'react';
import '../styles/TeamPresentation.css';

const numeral = require('numeral');

class TeamPresentation extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      previousYears: 21127.22
    }

    this.formatValue = this.formatValue.bind(this);
  }

  formatValue(newValue)
  {
    /* This is a bit overkill, but I'm sure there will be more uses for numeral */
    return numeral(newValue).format('$0,0[.]00')
  }

  render() 
  {
    const currentTotal = this.formatValue(this.state.previousYears + this.props.teamData["sumDonations"]);
    const currentYear = this.formatValue(this.props.teamData["sumDonations"]);
    const currentGoal = this.formatValue(this.props.teamData["goal"]);
    const currentPercentage = numeral(parseFloat(this.props.teamData["sumDonations"])/parseFloat(this.props.teamData["goal"])).format('0.00%');
    return (
      <div className="teamTeamPresentation">
        <div className="currentYear">This year the team has raised {currentYear} of our {currentGoal} goal</div>
        <div className="currentPercentage">That's {currentPercentage}!</div>
        <div className="teamTotal">Lifetime Total Raised: {currentTotal}</div>
      </div>
    )
  }

}

export default TeamPresentation;