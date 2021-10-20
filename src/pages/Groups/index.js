import { useCallback, useEffect, useState } from "react";
import CardGroups from "../../components/cardGroups";
import { Template } from "../../components/Template";
import api from "../../services/api";
import { CardsContainer } from "./styles";

function Groups() {
  const [groups, setGroups] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem("token")) || "");

  const getGroups = useCallback(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGroups(response.data);
        console.log(response.data);
      });
  }, [token]);

  useEffect(() => {
    getGroups();
  });
  return (
    <>
      <Template>
        {groups.length !== 0 ? (
          <CardsContainer>
            {groups.map((group) => (
              <CardGroups key={group.id} group={group}/>
            ))}
          </CardsContainer>
        ) : (
          <div>Você não participa de nenhum grupo ainda</div>
        )}
      </Template>
    </>
  );
}
export default Groups;