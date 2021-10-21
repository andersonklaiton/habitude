import { useHistory } from "react-router-dom";
import Options from "../../components/cardOption";
import { Template } from "../../components/Template";
import { useAuth } from "../../providers/auth";

const OptionGroup = ()=>{
    const history = useHistory()
    const {auth}= useAuth()
    if (!auth) {
        history.push("/");
       
      }
    return(
        <Template>
            <Options/>
        </Template>
    )
}
export default OptionGroup