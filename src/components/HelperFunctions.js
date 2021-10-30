const axios = require('axios');

class HelperFunctions
{
  constructor()
  {
    this.GetData = this.GetData.bind(this);
    this.constructTeamURL = this.constructTeamURL.bind(this);
    this.constructURL = this.constructURL.bind(this);
    this.generateURLs = this.generateURLs.bind(this);
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

  constructURL(type, id)
  {
    let baseURL = 'https://www.extra-life.org/api/';
    return baseURL + type + "/" + id;
  }

  constructTeamURL(id)
  {
    return this.constructURL('teams', id);
  }

  constructPlayerURL(id)
  {
    return this.constructURL('participants', id);
  }

  generateURLs(ids)
  {
    let targetURLs = [];
    ids.forEach( element => {
      if(element.type === "team")
      {
        targetURLs.push(this.constructTeamURL(element.id));
      } else {
        targetURLs.push(this.constructPlayerURL(element.id));
      }
    })
    return targetURLs;
  }

  async getAllData()
  {
    let desiredIDs = [
      {"type": "team", "id" : 56196},
      {"type": "player", "id"  : "450340"},
      {"type": "player", "id"  : "450794"},
      {"type": "player", "id"  : "468175"},
      {"type": "player", "id"  : "458258"},
      {"type": "player", "id"  : "450356"}
    ]
    let URLS = this.generateURLs(desiredIDs);

    let desiredData = [];

    for(const element of URLS)
    {
      let name = "";
      let type = "";
      let donationLink = "";
      let jsonData = await this.GetData(element);
      if (!jsonData["participantID"])
      {
        name = jsonData["name"];
        type = "team"
      } else {
        name = jsonData["displayName"];
        donationLink = jsonData["links"]["donate"]
        type = "player"
      }

      let targetData = {
        name: name,
        sumDonations: jsonData["sumDonations"],
        goal : jsonData["fundraisingGoal"],
        donationLink : donationLink,
        type: type
      }
      desiredData.push(targetData);
    }
    return desiredData
  }

}

export default HelperFunctions