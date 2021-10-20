import CreateGroups from "../../components/cardCreateGroup"
import Header from "../../components/Header"
import PermanentSidebar from "../../components/PermanentSidebar"
import { Template } from "../../components/Template"

const CreateGroup =()=>{
    return(
        // <Template>
        //     <CreateGroups/>
        // </Template>
        <>
        <Header/>
        <PermanentSidebar/>
        <CreateGroups/>
        </>
    )
}
export default CreateGroup