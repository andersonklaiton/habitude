import { useCallback, useEffect, useState } from "react";
import CardHabits from "../../components/CardDashbord";
import { Template } from "../../components/Template";
import api from "../../services/api";

const HabitsPage = () => {

    const token = JSON.parse(localStorage.getItem('token'));

    const [habits, setHabits] = useState([]);

    const [change, setChange] = useState(false);

    const getHabits = useCallback(() => {
        api.get("/habits/personal/", { headers: { Authorization: `Bearer ${token}` } })
            .then(response => setHabits(response.data))
    }, [token])

    useEffect(() => {
        getHabits()
        setChange(false)
    }, [setHabits, getHabits, change]);

    return (
        <Template>
            {
                habits.map((habit, index) => {
                    return <CardHabits key={index} habits={habit} setChange={setChange} />
                })
            }

            <button></button>
        </Template>
    )
};

export default HabitsPage;