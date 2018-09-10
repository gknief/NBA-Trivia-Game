import React, { Component } from 'react';

class API extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            id: ''
        };

        this.state = this.initialState;
    }

    // const curry = nba.findPlayer('Stephen Curry');
  // const lebron = nba.findPlayer('LeBron James');
  // nba.stats.playerStats({TeamID: warriors, Season: "2016-17" }).then((data) => {
  //   console.log(data);
  // });
  // nba.stats.playerStats({TeamID: knicks, Season: "2016-17" }).then((data) => {
  //   console.log(data);
  // });
  // nba.stats.playerProfile({PlayerID: kd, Season: "2017-18"}).then((data) => {
  //   console.log(data);
  // });
  // nba.stats.playerProfile({PlayerID: kd}).then((data) => {
  //   console.log(data);
  // });
  componentDidMount = async () => {
    nba.stats.playerInfo({PlayerID: lebron}).then((data) => {
      console.log(data.playerHeadlineStats[0].pts);
    });
    // nba.stats.playerInfo({PlayerID: kd}).then((data) => {
    //   console.log(data.playerHeadlineStats[0].pts);
    // });
    // nba.stats.playerInfo({PlayerID: steph}).then((data) => {
    //   console.log(data.playerHeadlineStats[0].pts);
    // });
    // nba.stats.playerInfo({PlayerID: harden}).then((data) => {
    //   console.log(data.playerHeadlineStats[0].pts);
    // });

    // nba.stats.playerInfo({PlayerID: cp3}).then((data) => {
    //   console.log(data.playerHeadlineStats[0].ast);
    // });
    // nba.stats.playerInfo({PlayerID: westbrook}).then((data) => {
    //   console.log(data.playerHeadlineStats[0].ast);
    // });
    // nba.stats.playerInfo({PlayerID: simmons}).then((data) => {
    //   console.log(data.playerHeadlineStats[0].ast);
    // });
    // nba.stats.playerInfo({PlayerID: wall}).then((data) => {
    //   console.log(data.playerHeadlineStats[0].ast);
    // });


    }

}

export default API;