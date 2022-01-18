import GamelistItem from './gamelistItem.jsx';
import s from './style.module.css';


const Gamelist = (props) => {
    return (
            <div className={s.wrapper}>
                <div className={s.gamelist}>
                    <div className={s.gamelist_header}>
                        <p>Name</p>
                        <p>Map</p>
                        <p>Nickname</p>
                        <p>Rank</p>
                        <p>Players</p>
                    </div>
					{props.arr.map((x) => (
						<GamelistItem id={x.id} game_name={x.game_name} game_map={x.game_map} org_nickname={x.org_nickname} rank_req={x.rank_req} player_amount={x.player_amount} />
					))}
                </div>
            </div>            

    );
};

export default Gamelist;


