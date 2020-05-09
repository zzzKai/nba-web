import React, {Component} from 'react';
import Profile from "./Profile";
import DataViewContainer from "./DataViewContainer.js";
import SearchBar from "./SearchBar";
import nba from '../nba-client'



class Main extends Component {
    state = {
        playerInfo: {},
        playerId: 201939,
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         playerInfo: {}
    //     }
    // }
    componentDidMount() {
        window.nba = nba;
        nba.stats.playerInfo({PlayerID: (nba.findPlayer('Stephen Curry')).playerId})
            .then(info => {
                console.log(info);
                const playInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log(playInfo);
                this.setState({ playerInfo: playInfo });
            })
    }

    render() {
        return (
            <div className="main">
                <SearchBar />
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo} />
                    <DataViewContainer playerId={this.state.playerId}/>
                </div>
            </div>

        );
    }
}

export default Main;