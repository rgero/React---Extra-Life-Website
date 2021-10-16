import React from 'react';
const axios = require('axios');

class TotalComponent extends React.Component
{
  constructor(props)
  {
    super(props)
    this.ConstructURL = this.ConstructURL.bind(this);
    this.GetData = this.GetData.bind(this);

    this.state = {
      sumDonations: 0,
      previousYears: 21127.22
    }
  }

  async GetData(targetURL)
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

  ConstructURL()
  {
    let baseURL = 'https://www.extra-life.org/api/teams/';
    let teamID = '56196';
    return baseURL + teamID;
  }

  async componentDidMount()
  {
    let targetURL = this.ConstructURL();
    let jsonData = await this.GetData(targetURL);

    let sumTotal = parseFloat(jsonData["sumDonations"]) + this.state.previousYears;

    this.setState({
      donationTotal: jsonData["sumDonations"],
      sumTotal: sumTotal
    })
  }


  render() 
  {
    return (
      <div>
        <div>The team has raised {this.state.donationTotal} in 2021</div>

        <div><h1>For a total of: {this.state.sumTotal}</h1></div>
      </div>
    )
  }

}

export default TotalComponent;