import { useHistory } from "react-router-dom"
import { ButtonCreate, ButtonEnter, ContainerButtons } from "./styles"

const Options =()=>{
    const history = useHistory()

    const handlePage = (path)=>{
        if(path ==="allgroups"){
            history.push("/allgroups")
        }
        if(path === "creategroup"){
            history.push("/creategroup")
        }
    }

    return(
        <ContainerButtons>
        <ButtonEnter onClick={()=>handlePage("allgroups")}>Entrar em um grupo</ButtonEnter>
        <ButtonCreate onClick={()=>handlePage("creategroup")}>Criar grupo</ButtonCreate>
        </ContainerButtons>
    )
}
export default Options