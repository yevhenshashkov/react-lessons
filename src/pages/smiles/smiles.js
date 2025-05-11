import React from 'react';
import SmileList from './components/SmileList';
import VoteHeader from "./components/Header";
import './components/Styles.css';

class Smile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {id: 1, text: "🤑", votes: 0},
                {id: 2, text: "🙄", votes: 0},
                {id: 3, text: "🤐", votes: 0},
                {id: 4, text: "🤓", votes: 0},
                {id: 5, text: "🤔", votes: 0}
            ],
            showResults: false,
        }
    }
    voteSmiles = (id) => {
        this.setState(prevState => {
            const updatedSmiles = prevState.smiles.map((smile) => {
                if (smile.id === id) {
                    return {...smile, votes: smile.votes + 1};
                }
                return smile;
            });
            return {smiles: updatedSmiles};
        });
    }
    toggleResults = () => {
        this.setState(prev => ({ showResults: !prev.showResults }));
    }
    resetVotes = () => {
        const resetSmiles = this.state.smiles.map (smile => ({
            ...smile,
            votes: 0
        }))
        this.setState({smiles: resetSmiles});
    }
    getWinner = () => {
        const { smiles } = this.state;
        if (smiles.length === 0) return null;

        const maxVotes = Math.max(...smiles.map(smile => smile.votes));
        if (maxVotes === 0) return null;

        return smiles.reduce((max, smile) => {
            return (smile.votes > max.votes) ? smile : max;
        }, smiles[0]);
    }

    render() {
        const winner = this.getWinner();
        return (
            <div className="contaiter">
                <VoteHeader/>

                <SmileList
                    smiles={this.state.smiles}
                    voteSmiles={this.voteSmiles}
                />
                <div className= "btn-block ">
                    <button className="result-btn"
                            onClick = {this.toggleResults}
                    >
                    <span className="btn-text">
                        Show result
                    </span>
                    </button>

                    <button
                        className= "reset-btn"
                        onClick={this.resetVotes}
                    >
                        <span
                            className="btn-text">
                            Сбросить голоса
                        </span>
                    </button>
                </div>
                {this.state.showResults && winner && (
                    <div className="winner-block ">
                        <span className= "winner-text">
                            Смайлік переможець: {winner.text} — {winner.votes} голосів
                        </span>
                    </div>
                )}

            </div>
        )
    }
}


export default Smile;