import casual from 'casual-browserify';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

const HomePage = (props) => {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();

    const handleAddHobbbyClick = () => {
        //random a object
        const newHobby = {
            id: casual.uuid,
            title: casual.title,
        }
        //dispatch action to add new hobby object
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    const handleHobbyClick = (hobby) => {

    }
    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={handleAddHobbbyClick}>Random sadasdsda hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId = {activeId}
                onClick={() => handleHobbyClick}
            />

        </div>
    )
}

export default HomePage