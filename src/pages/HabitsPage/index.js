import { useCallback, useEffect, useState } from "react";
import CardHabits from "../../components/CardHabits";
import { Template } from "../../components/Template";
import api from "../../services/api";

const HabitsPage = () => {

    const token = JSON.parse(localStorage.getItem('token'));

    const [habits, setHabits] = useState([]);

    // const getHabits = () => {
    //     api.get("/habits/personal/", { headers: { Authorization: `Bearer ${token}` } })
    //         .then(response => console.log(response.data))
    // };

    const getHabits = useCallback(() => {
        api.get("/habits/personal/", { headers: { Authorization: `Bearer ${token}` } })
            .then(response => setHabits(response.data))
    }, [token])

    useEffect(() => {
        setHabits([])
        getHabits()
    }, [setHabits, getHabits]);

    return (
        <div>
            {
                habits.map((teste) => {
                    return <CardHabits teste={habits} />
                })
            }

            <button></button>
        </div>
    )
};

export default HabitsPage;