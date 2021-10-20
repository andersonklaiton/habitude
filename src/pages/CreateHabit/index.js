import { TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import { Container, NameContainer, DataContainer, SubmitButton } from "./styles";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useAuth } from "../../providers/auth";
import Header from "../../components/Header";
import PermanentSidebar from "../../components/PermanentSidebar";

const CreateHabit = () => {

    const {auth}=useAuth()
    const history = useHistory();

    if (!auth) {
        history.push("/");
       
      }

    const token = JSON.parse(localStorage.getItem('token'));

    const id = jwtDecode(token);

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        category: yup.string().required("Campo obrigatório"),
        difficulty: yup.string().required("Campo obrigatório"),
        frequency: yup.string().required("Campo obrigatório"),
        achieved: yup.boolean().default(() => false),
        how_much_achieved: yup.number().default(() => 0),
        user: yup.number().default(() => id.user_id),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const handleCreateHabit = (data) => {
        api.post("/habits/", data, { headers: { Authorization: `Bearer ${token}` } })
            .then((_) => toast.success("Hábito criado!"))
            .catch((_) => toast.error("Erro!"))
        history.push("/dashboard")
    }
    return (
        <>
        <Header/>
        <PermanentSidebar/>
        <Container onSubmit={handleSubmit(handleCreateHabit)} >
            <NameContainer>
                <TextField variant="outlined" label="Hábito" style={{ width: "68%" }} {...register("title")} ></TextField>
            </NameContainer>
            <DataContainer>
                <TextField variant="standard" label="Categoria" style={{ width: "70%" }} {...register("category")} ></TextField>
                <TextField variant="standard" label="Dificuldade" style={{ width: "70%" }} {...register("difficulty")} ></TextField>
                <TextField variant="standard" label="Frequência" style={{ width: "70%" }} {...register("frequency")} ></TextField>
                <SubmitButton type="submit" >Criar</SubmitButton>
            </DataContainer>

        </Container>
        </>
    )
};

export default CreateHabit; 