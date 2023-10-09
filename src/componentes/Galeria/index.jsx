import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"

const GaleriaContainer = styled.div`
    display: flex;
`

const SessaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = () => {
    return (
        <>
            <Tags/>
            <GaleriaContainer>
                <SessaoFluida>
                    <Titulo>Navegue pelos produtos.</Titulo>
                </SessaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
        
    )
}

export default Galeria