import { useSliderStore } from "../states/store"


function Home() {

    const infoState = useSliderStore((state) => state.infoState);

    return (
        <div>
            {infoState.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h4>{item.info}</h4>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Home