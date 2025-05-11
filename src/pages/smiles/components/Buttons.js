import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className= "btn-block ">
                <button className="result-btn"
                        onClick = {this.props.toggleResults}
                >
                    <span className="btn-text">
                        Show result
                    </span>
                </button>

                <button
                    className= "reset-btn"
                    onClick={this.props.resetVotes}
                >
                        <span
                            className="btn-text">
                            Сбросить голоса
                        </span>
                </button>
            </div>
        )
    }
}

export default Buttons;