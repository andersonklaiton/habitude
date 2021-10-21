import { useCallback, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import CardHabits from "../../components/CardDashbord";
import { Template } from "../../components/Template";
import { useAuth } from "../../providers/auth";

import api from "../../services/api";
import { HabitsContainer } from "./styles";

const HabitsPage = () => {
  const history = useHistory();
  const { auth } = useAuth();

  if (!auth) {
    history.push("/");
  }

  const token = JSON.parse(localStorage.getItem("token"));

  const [habits, setHabits] = useState([]);

  const getHabits = useCallback(() => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data));
  }, [token]);

  const [change, setChange] = useState(false);

  useEffect(() => {
    getHabits();
    setChange(false);
  }, [setHabits, getHabits, change]);

  return (
    <Template>
      <HabitsContainer>
        {habits.map((habit, index) => {
          return (
            <CardHabits key={index} habits={habit} setChange={setChange} />
          );
        })}
      </HabitsContainer>
    </Template>
  );
};

export default HabitsPage;
