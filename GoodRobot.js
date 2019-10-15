import React from 'react';

class GoodRobot extends React.Component {
    render() {
        return(
            <React.Fragment>
            <h1>Good Robot</h1>
            {this.props.inputText && <p>I hear you saying {this.props.inputText}. Is that correct?</p>}
            </React.Fragment>
        )
    }
}

export default GoodRobot