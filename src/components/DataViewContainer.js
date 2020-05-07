import React, {Component} from 'react';
import _ from 'lodash';

import ShotChart from './ShotChart';
import CounterSlider from './CounterSlider.js';

class DataViewContainer extends Component {
    state = {
        minCount: 2
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: count });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}
                           minCount={this.state.minCount}
                />
                <div className="filters">
                    <CounterSlider />
                </div>

            </div>
        );
    }
}

export default DataViewContainer;