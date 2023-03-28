import { useState } from "react";
import Button from "./Button";

export default function Counter({initialCounterValue}: {initialCounterValue: number}) {
    const [counterValue, setCounterValue] = useState(initialCounterValue);
    return (
        <div>
            <h1>Counter Component {initialCounterValue}: {counterValue}</h1>
            <Button value={counterValue} onClick={() => setCounterValue(e => e+1)} />
        </div>
    )
}
