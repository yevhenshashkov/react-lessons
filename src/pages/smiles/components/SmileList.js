import React from 'react';
import SmileItem from './SmileItem';

export default function SmileList({ smiles, voteSmiles }) {
    return (
        <div className="smile-list">
            {smiles.map(smile => (
                <SmileItem key={smile.id} smile={smile} voteSmiles={voteSmiles} />
            ))}
        </div>
    );
}
