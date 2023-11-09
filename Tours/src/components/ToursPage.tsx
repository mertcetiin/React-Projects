import { useToursStore } from '../states/store'
import DeletePage from './DeletePage'

function ToursPage() {

    const toursState = useToursStore((state) => state.toursState)
    const deleteBtn = useToursStore((state) => state.deleteBtn)

    return (
        <div>
            <h1>Our Tours</h1>
            {toursState.length === 0 ? <DeletePage /> : toursState.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <h4>{item.price}</h4>
                    <p>{item.info}</p>

                    <button onClick={() => deleteBtn(item.id)}>Not Interested</button>
                </div>
            ))}

        </div>
    )
}

export default ToursPage