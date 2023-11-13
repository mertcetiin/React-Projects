import { useInfoStore } from "../states/store"

function Home() {

    const dataStates = useInfoStore((state) => state.dataStates);

    return (
        <div>
            {dataStates.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.info}</p>
                </div>
            ))}
        </div>
    )
}

export default Home