import React from 'react';
import '../styles/donations.css';
const axios = require('axios');
const numeral = require('numeral');


class TotalComponent extends React.Component
{
  constructor(props)
  {
    super(props)
    this.constructURL = this.constructURL.bind(this);
    this.getData = this.getData.bind(this);
    this.parseValue = this.parseValue.bind(this);

    this.state = {
      sumDonations: 0,
      previousYears: 21127.22
    }
  }

  async getData(targetURL)
  {
    try {
      let data = axios.get(targetURL)
        .then(function (response) {
          return response["data"];
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function (apiData) {
          return apiData;
        });
      return data;
    } catch (err)
    {
      return "Error: Unable to get the Data"
    }
  }

  constructURL()
  {
    let baseURL = 'https://www.extra-life.org/api/teams/';
    let teamID = '56196';
    return baseURL + teamID;
  }

  async componentDidMount()
  {
    let targetURL = this.constructURL();
    let jsonData = await this.getData(targetURL);

    let sumTotal = parseFloat(jsonData["sumDonations"]) + this.state.previousYears;

    this.setState({
      donationTotal: jsonData["sumDonations"],
      sumTotal: sumTotal
    })
  }

  parseValue(inputValue)
  {
    /* This seems a bit overkill */
    return numeral(inputValue).format('$0,0[.]00');
  }


  render() 
  {
    let currentYear = this.parseValue(this.state.donationTotal);
    let teamTotal = this.parseValue(this.state.sumTotal)

    return (
      <div>
        <div className="currentYear">The team has raised {currentYear} in 2021</div>

        <div className="overallTotal">For a total of: {teamTotal}</div>
      </div>
    )
  }

}

export default TotalComponent;