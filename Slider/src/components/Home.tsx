import { useSliderStore } from "../states/store"


function Home() {

    const infoState = useSliderStore((state) => state.infoState);
    const index = useSliderStore((state) => state.index);
    const increase = useSliderStore((state) => state.increase);
    const decrease = useSliderStore((state) => state.decrease);


    return (
        <div>
            <button onClick={decrease}>-</button>
            <div>
                <h2>{infoState[index].name}</h2>
                <h4>{infoState[index].info}</h4>
                <p>{infoState[index].text}</p>
            </div>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Home;