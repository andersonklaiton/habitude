import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import PermanentSidebar from "../../components/PermanentSidebar";
import { useAuth } from "../../providers/auth";
import { AllGroupsContext } from "../../providers/allGroups";
import CardGroups from "../../components/cardGroup";
import { Button, ContainerButtons, ContainerGroups} from "./styles";



const AllGroups = () => {
  const { cardGroups, FPage, BPage } = useContext(AllGroupsContext);

  const SearchGroup=  (path)=>{
    history.push(path)
  }

  const { auth } = useAuth();
  const history = useHistory();
  if (!auth) {
    history.push("/");
  }
  return (
    <>
      <Header />
      <PermanentSidebar />
      <ContainerButtons>
        <Button onClick={BPage}>Anterior</Button>
        <Button onClick={FPage}>Próxima</Button>
        <Button onClick={()=>SearchGroup("/eachgroup")}>Pesquisar</Button>
      </ContainerButtons>
      <ContainerGroups>
        {cardGroups.map((group, index) => (
          <CardGroups
            key={index}
            name={group.name}
            category={group.category}
            description={group.description}
            groupId={group.id}
          />
        ))}
      </ContainerGroups>
    </>
  );
};
export default AllGroups;
