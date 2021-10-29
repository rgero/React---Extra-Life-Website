import React from 'react';
import '../styles/TeamPresentation.css';

class TeamPresentation extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      previousYears: 21127.22
    }
  }

  render() 
  {
    const currentTotal = this.props.helper.formatValue(this.state.previousYears + this.props.sumTotal);
    const currentYear = this.props.helper.formatValue(this.props.sumTotal);
    return (
      <div className="teamTeamPresentation">
        <div className="currentYear">This year the team has raised {currentYear}</div>
        <div className="teamTotal">Lifetime Total Raised: {currentTotal}</div>
      </div>
    )
  }

}

export default TeamPresentation;