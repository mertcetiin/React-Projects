import { useInfoStore } from "../states/store"
import { useState } from "react";

function Home() {

    const dataStates = useInfoStore((state) => state.dataStates);

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div>
            {dataStates.map((item) => (
                <div key={item.id}>
                    <h3>{item.title} <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? '-' : '+'}</button></h3>
                    <p>{showInfo ? item.info : ''}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;