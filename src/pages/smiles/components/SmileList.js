import React from 'react';
import SmileItem from './SmileItem';

class SmileList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { smiles, voteSmiles } = this.props;

        return (
            <div className= "smile-list">
                {smiles.map((smile) => (
                    <SmileItem
                        key={smile.id}
                        smile={smile}
                        voteSmiles={voteSmiles}
                    />
                ))}
            </div>
        );
    }
}

export default SmileList;
