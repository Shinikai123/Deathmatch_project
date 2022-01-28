
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import s from "./style.module.css";

const Organizer = () => {

    const [player, setPlayer] = useState('')
    const [playerDirty, setPlayerDirty] = useState(false)
    const [playerError, setPlayerError] = useState('Поле с количеством игроков не должно быть путсым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() =>{
        if (playerError){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [playerError])


    const playerHandler = (e) => {
        setPlayer(e.target.value)
        if (!e.target.value) {
            setPlayerError('поле с количеством игроков не должно быть пустым')
        }
        if (e.target.value.length < 3 || e.target.value.length > 16) {
            setPlayerError('В игре могут одновременно принимать участие от 2 до 16')
        } else {
            setPlayerError('')
        }
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'player':
                setPlayerDirty(true)
                break
        }
    }


        let navigate = useNavigate();
        function handleClick() {
            navigate(-1)
        }
    return (
        <div className={s.wrapper}>
            <div className={s.organizer}>
                <h1>New Game</h1>
                <form className={s.form}>
                    <label for="selectMap">Choose a map</label>
                    <select id="selectMap" class={s.input_string} name="Map">
                        <option value="map1">first map</option>
                        <option value="map2">second map</option>
                        <option value="map3">third map</option>
                    </select>
                    <label for="selectRank">Requiered rank</label>
                    <select id="selectRank" class={s.input_string} name="Rank">
                        <option value="rank1">novice</option>
                        <option value="rank2">expert</option>
                        <option value="rank3">master</option>
                    </select>
                    <label for="selectPlayerAmount">Players amount</label>
                    <input onChange={e => playerHandler(e)} value={player} onClick ={blurHandler} name='player' className={s.input_string} id="player" type="text" placeholder="Enter players amount..."></input>
                    {(playerDirty && playerError) && <div className={s.error}>{playerError}</div>}
                    <button disabled={!formValid} type='submit' className={s.input_button}>Submit</button>
                    <button onClick={handleClick} className={s.input_button}>Back</button>
                </form>
            </div> 
        </div>   
    );
}

export default Organizer;


