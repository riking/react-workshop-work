import { useState } from 'react';
import './AdDesigner.css'

type IceCreamName = "Chocolate" | "Vanilla" | "Strawberry";
const allFlavors: IceCreamName[] = ["Chocolate", "Vanilla", "Strawberry"];

function addToState(setFunc: any, diff: number) {
    return () => {
        setFunc((x: number) => x + diff);
    }
}

const AdDesigner = () => {
    const [flavor, setFlavor] = useState<IceCreamName>("Strawberry");
    const [darkTheme, setDarkTheme] = useState(false);
    const [fontSize, setFontSize] = useState(44);

    const flavorButtons = allFlavors.map((flavor: IceCreamName) => {
        return;
    });

    return (
        <div className='AdDesigner'>
            <h2>Ad Designer</h2>
            <div className={`sample-dva ${darkTheme && 'dark'}`}>
                <p>Vote for</p>
                <p className='flavor' style={{ fontSize }}>{flavor}</p>
            </div>
            <h3>What to Support</h3>
            <div className="btns-container">
                <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
                <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
                <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            </div>
            <h3>Color Theme</h3>
            <div className="btns-container">
                <button onClick={() => setDarkTheme(false)}>Light</button><button onClick={() => setDarkTheme(true)}>Dark</button>
            </div>
            <h3>Font Size</h3>
            <div className="btns-container">
                <button onClick={() => setFontSize(x => x - 1)}>Down</button>
                <span>{fontSize}</span>
                <button onClick={() => setFontSize(x => x + 1)}>Up</button>
            </div>
        </div>
    )
};

export default AdDesigner;
