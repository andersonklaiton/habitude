import { Goals, Goal, Title, Difficulty, TrashButton, AchievedButton } from './styles'
import { BsTrash, BsCheckCircleFill } from 'react-icons/bs';
import api from '../../services/api';
import { toast } from 'react-toastify';

const GoalCard = ({ goals }) => {

    const token = JSON.parse(localStorage.getItem('token'));

    const deleteGoal = (id) => {
        api.delete(`/goals/${id}/`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((_) => toast.success("Objetivo excluído!"))
            .then((error) => console.log(error))
    }

    const completeGoal = (id) => {
        api.patch(`/goals/${id}/`, { achieved: true }, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((_) => toast.success("Objetivo concluído!"))
            ;
        deleteGoal(id)
    }

    return (
        <Goals>
            {goals !== null || goals !== undefined ?
                goals.map(({ title, difficulty, achieved, id }, index) => (
                    <Goal key={index}>
                        <Title>{title}</Title>
                        <Difficulty>|   {difficulty}   |</Difficulty>
                        <AchievedButton>
                            <BsCheckCircleFill onClick={() => completeGoal(id)} />
                        </AchievedButton>
                        <TrashButton>
                            <BsTrash onClick={() => deleteGoal(id)} />
                        </TrashButton>
                    </Goal>
                ))
                : console.error(goals)
            }
        </Goals>
    )
};

export default GoalCard;