import React from 'react';
import SmileList from './components/SmileList';
import VoteHeader from './components/Header';
import Buttons from './components/Buttons';
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
            winner: null,
        }
    }

    componentDidMount() {
        const savedSmiles = localStorage.getItem("smiles");
        if (savedSmiles) {
            this.setState({ smiles: JSON.parse(savedSmiles) });
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
            localStorage.setItem("smiles", JSON.stringify(updatedSmiles));
            return {smiles: updatedSmiles};
        });
    }
    toggleResults = () => {
        this.setState(prev => ({
            showResults: !prev.showResults,
            winner: !prev.showResults ? this.showWinner(prev.smiles) : null
            }));
    }

    resetVotes = () => {
        const resetSmiles = this.state.smiles.map(smile => ({
            ...smile,
            votes: 0
        }));
        this.setState({
            smiles: resetSmiles,
            showResults: false,
            winner: null
        });
        localStorage.removeItem("smiles");
    }

    showWinner = (smiles) => {
        const maxVotes = Math.max(...smiles.map(smile => smile.votes));
        if (maxVotes === 0) return null;
        return smiles.find(smile => smile.votes === maxVotes);
    }

    render() {
        return (
            <div className="contaiter">
                <VoteHeader/>
                <SmileList
                    smiles={this.state.smiles}
                    voteSmiles={this.voteSmiles}
                />
                <Buttons
                    toggleResults={this.toggleResults}
                    resetVotes={this.resetVotes}
                />
                {this.state.showResults && this.state.winner && (
                    <div className="winner-block">
                        <span className="winner-text">
                            Смайлік переможець: {this.state.winner.text} — {this.state.winner.votes} голосів
                        </span>
                    </div>
                )}
            </div>
        )
    }
}


export default Smile;