import React from 'react';

class BadRobot extends React.Component {
    translateBla = (string) => {
        const blaString = string.split("").map((char, index) => {
            if (index % 3 === 0) {
                return "B"
            } else if (index % 3 === 1) {
                return "L"
            } else if (index % 3 === 2) {
                return "A"
            }
        }).join("")
        
        return blaString
        // console.log(blaString)
    }
    
    render() {
        const { inputText } = this.props
        return(
            <React.Fragment>
            <h1>Bad Robot</h1>
            {inputText && <p>I hear you saying { this.translateBla(inputText)}. Is that correct?</p>}
            </React.Fragment>
        )
    }
}

export default BadRobot