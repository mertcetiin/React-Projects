import { useToursStore } from "../states/store"

function DeletePage() {

    const refleshBtn = useToursStore((state) => state.refleshBtn)

    return (
        <div>
            <h1>No Tours Left</h1>
            <button onClick={refleshBtn}>Refresh</button>
        </div>
    )
}

export default DeletePage