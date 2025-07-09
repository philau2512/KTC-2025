import React, { useCallback, useEffect, useState } from "react";

const ChildComponent = ({loggingStatus}: {loggingStatus: () => void}) => {
    useEffect(()=> {
        loggingStatus();
    }, [loggingStatus]);
    return <div/>
}

function MyShop04() {
    const [count, setCount] = useState(0);
    const loggingStatus = useCallback(() => {
        console.log("Logging status from child component");
    }, []);

    const addMore = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <ChildComponent loggingStatus={loggingStatus}/>
            <button onClick={addMore}>Add More</button>
        </>
    )
}

export default MyShop04;