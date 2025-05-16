import React from "react";

function FunctionalCounter() {
    return (
        <div className= "item-block "
             onClick={this.voteResults}
        >
            <span>{this.props.smile.text}</span>
            <span> Голосів: {this.props.smile.votes}</span>
        </div>
    )
}

export default FunctionalCounter;