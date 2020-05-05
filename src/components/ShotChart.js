import React, {Component} from 'react';
import nba from '../nba-client';

import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';

import PropTypes from 'prop-types';

window.d3_hexbin = {hexbin : hexbin};

class ShotChart extends Component {
    static propTypes = {
        playerId: PropTypes.number,
        minCount: PropTypes.number,
        chartType: PropTypes.string,
        displayTooltip: PropTypes.bool,
    }

    componentDidMount() {
        nba.stats.shots({
            PlayerID: this.props.playerId
        }).then((response) => {
            console.log('->', response);
        })
    }

    render() {
        return (
            <div>
                shotchart
            </div>
        );
    }
}

export default ShotChart;