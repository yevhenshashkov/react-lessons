import React from 'react';

import './Styles.css'

class SmileItem extends React.Component {
    constructor(props) {
        super(props);
    }
    voteResults = () => {
        this.props.voteSmiles(this.props.smile.id)
    }
    render() {

        return (
            <div className= "item-block "
                 onClick={this.voteResults}
            >
                <span>{this.props.smile.text}</span>
                <span> Голосів: {this.props.smile.votes}</span>
            </div>
        )
    }
}

export default SmileItem;