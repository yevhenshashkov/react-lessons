import React from 'react';

export default function Buttons ({toggleResults, resetVotes}) {
    return (
        <div className= "btn-block ">
            <button className="result-btn"
                    onClick = {toggleResults}
            >
                    <span className="btn-text">
                        Show result
                    </span>
            </button>
            <button
                className= "reset-btn"
                onClick={resetVotes}
            >
                        <span
                            className="btn-text">
                            Сбросить голоса
                        </span>
            </button>
        </div>
    )
}

