import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>counter</h1>
            <h1>current count: {count}</h1>
            <button style={{backgroundColor : "green"}} onClick={increment}>increment</button>
        </div>
    );
}