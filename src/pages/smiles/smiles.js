import { useState, useEffect } from 'react';
import SmileList from './components/SmileList';
import VoteHeader from './components/Header';
import Buttons from './components/Buttons';
import './components/Styles.css';

export default function Smile() {
    const [smiles, setSmiles] = useState([
        { id: 1, text: "🤑", votes: 0 },
        { id: 2, text: "🙄", votes: 0 },
        { id: 3, text: "🤐", votes: 0 },
        { id: 4, text: "🤓", votes: 0 },
        { id: 5, text: "🤔", votes: 0 }
    ]);

    const [showResults, setShowResults] = useState(false);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const savedSmiles = localStorage.getItem("smiles");
        if (savedSmiles) {
            setSmiles(JSON.parse(savedSmiles));
        }
    }, []);

    const voteSmiles = (id) => {
        const updatedSmiles = smiles.map(smile =>
            smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
        );
        setSmiles(updatedSmiles);
        localStorage.setItem("smiles", JSON.stringify(updatedSmiles));
    };

    const toggleResults = () => {
        setShowResults(prevShow => {
            const newShow = !prevShow;
            setWinner(newShow ? showWinner(smiles) : null);
            return newShow;
        });
    };

    const resetVotes = () => {
        const resetSmiles = smiles.map(smile => ({
            ...smile,
            votes: 0
        }));

        setSmiles(resetSmiles);
        setShowResults(false);
        setWinner(null);
        localStorage.removeItem("smiles");
    };

    const showWinner = (smiles) => {
        const maxVotes = Math.max(...smiles.map(smile => smile.votes));
        if (maxVotes === 0) return null;
        return smiles.find(smile => smile.votes === maxVotes);
    };

    return (
        <div className="contaiter">
            <VoteHeader />
            <SmileList
                smiles={smiles}
                voteSmiles={voteSmiles}
            />
            <Buttons
                toggleResults={toggleResults}
                resetVotes={resetVotes}
            />
            {showResults && winner && (
                <div className="winner-block">
                    <span className="winner-text">
                        Смайлік переможець: {winner.text} — {winner.votes} голосів
                    </span>
                </div>
            )}
        </div>
    );
}
