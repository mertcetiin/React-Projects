import { useToursStore } from '../states/store'
import DeletePage from './DeletePage'

function ToursPage() {

    const toursState = useToursStore((state) => state.toursState)
    const deleteBtn = useToursStore((state) => state.deleteBtn)
    const readMore = useToursStore((state) => state.readMore)
    const handleClickRead = useToursStore((state) => state.handleClickRead)

    return (
        <div>
            {toursState.length === 0 ? (
                <DeletePage />
            ) : (
                toursState.map((item) => (
                    <div key={item.id}>
                        <h1>Our Tours</h1>
                        <h3>{item.name}</h3>
                        <h4>{item.price}</h4>
                        <p>{readMore ? item.info : `${item.info.substring(0, 100)}...`}<button onClick={handleClickRead}>{readMore ? 'show more' : 'read more'}</button></p>

                        <button onClick={() => deleteBtn(item.id)}>Not Interested</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default ToursPage