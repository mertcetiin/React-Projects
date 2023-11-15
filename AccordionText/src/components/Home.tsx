import { useInfoStore } from "../states/store"

function Home() {

    const dataStates = useInfoStore((state) => state.dataStates);
    const showInfo = useInfoStore((state) => state.showInfo);
    const toggleInfo = useInfoStore((state) => state.toggleInfo);


    return (
        <div>
            {dataStates.map((item) => (
                <div key={item.id}>
                    <h3>{item.title} <button onClick={() => toggleInfo(item.id.toString())}>{showInfo[item.id] ? '-' : '+'}</button></h3>
                    <p>{showInfo[item.id] ? item.info : ''}</p>
                </div>
            ))
            }
        </div >
    )
}

export default Home;