import Imagem from "../Galeria/Imagem"

const ModalZoom = ({foto}) => {
    return (
        <>
            <dialog open={!!foto}>
                <Imagem foto={foto} expandida={true}/>
                <form method="dialog">
                    <button>ok</button>
                </form>
            </dialog>
        </>
    )
}

export default ModalZoom