import './Votes.css'

import { useState } from 'react';


type IceCreamName = "Chocolate" | "Vanilla" | "Strawberry";
const allFlavors: IceCreamName[] = ["Chocolate", "Vanilla", "Strawberry"];
type FlavorVotes = {
    Chocolate: number,
    Vanilla: number,
    Strawberry: number,
}

const Votes = () => {
    const [voteData, setVoteData] = useState<FlavorVotes>({ Chocolate: 0, Vanilla: 0, Strawberry: 0 });
    let voteBars: JSX.Element[] = [];
    let totalVotes = 0;
    for (const flavor of allFlavors) {
        totalVotes += voteData[flavor];
    }
    for (const flavor of allFlavors) {
        if (voteData[flavor] > 0) {
            const pct = (voteData[flavor] / totalVotes * 100).toFixed(2);
            voteBars.push(
                <div className='vote-container' key={flavor}>
                    <div className='votes-header'><b>{flavor}:</b> {voteData[flavor]} ({pct}%)</div>
                    <div className={'vote-bar ' + ('vote-bar-' + flavor)} style={{ width: pct + "%" }}></div>
                </div>);
        }
    }
    if (voteBars.length === 0) {
        voteBars = [
            <div className='vote-container no-votes'>No votes yet.</div>
        ];
    }
    const makeVoteFor = (name: IceCreamName) => {
        return () => {
            setVoteData({ ...voteData, [name]: voteData[name] + 1 });
        };
    };
    // let a = `foo bar ${cond ? "asdf" : ""} ${oth erCond ? "otherClass" : ""} `;
    return (
        <div className='Votes'>
            <h2>Vote Here</h2>
            <div className='btn-container'>
                <button onClick={makeVoteFor("Chocolate")}>Chocolate</button>
                <button onClick={makeVoteFor("Vanilla")}>Vanilla</button>
                <button onClick={makeVoteFor("Strawberry")}>Strawberry</button>
            </div>
            {voteBars}
        </div>
    )
};

export default Votes;
