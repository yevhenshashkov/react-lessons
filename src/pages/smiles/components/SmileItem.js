import React from 'react';
import './Styles.css';

export default function SmileItem({ smile, voteSmiles }) {
    const voteResults = () => {
        voteSmiles(smile.id);
    };

    return (
        <div className="item-block" onClick={voteResults}>
            <span>{smile.text}</span>
            <span> Голосів: {smile.votes}</span>
        </div>
    );
}
