import React, {Component} from 'react';
import Profile from "./Profile";
import DataViewContainer from "./DataViewContainer.js";
import SearchBar from "./SearchBar";
import {DEFAULT_PLAYER_INFO} from '../constants';
import nba from '../nba-client'



class Main extends Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         playerInfo: {}
    //     }
    // }
    componentDidMount() {
        window.nba = nba;
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }


    loadPlayerInfo = (playerName) => {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId}).then((info) => {
            console.log(info);
            const playInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playInfo);
            this.setState({ playerInfo: playInfo });
        })
    }


    handleSelectPlayer = (player) => {
        //console.log('player ->', player);
        this.loadPlayerInfo(player);
    }

    render() {
        return (
            <div className="main">
                <SearchBar
                    handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo} />
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>

        );
    }
}

export default Main;