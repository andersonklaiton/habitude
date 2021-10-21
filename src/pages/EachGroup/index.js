import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import PermanentSidebar from "../../components/PermanentSidebar";
import api from "../../services/api";
import { Button, Container } from "./styles";
import * as yup from "yup";
import { useState } from "react";
import CardEachGroup from "../../components/cardEachGroup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/auth";


const EachGroup = () => {
  const [have, setHave] = useState(false);
  const [group, setGroup] = useState([]);
  const history = useHistory()
  const {auth}=useAuth()
 

  const schema = yup.object().shape({
    id: yup.number().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const SeachGroup = ({ id }) => {
      setHave(true)
    api
      .get(`groups/${id}/`)
      .then((response) => (setGroup(response.data), setHave(true)))
      .catch((_) => toast.error("Grupo inexistente"), setHave(false));
  };
  if (!auth) {
    history.push('/');
}
  return (
    <>
      <Header />
      <PermanentSidebar />
      <Container onSubmit={handleSubmit(SeachGroup)}>
        <TextField
          type="number"
          variant="standard"
          label="ID do grupo"
          style={{ width: "70%" }}
          {...register("id")}
        ></TextField>
        <Button type="submit">Pesquisar</Button>
      </Container>

      {have === true ? (
        <CardEachGroup
          name={group.name}
          category={group.category}
          description={group.description}
          groupId={group.id}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default EachGroup;
