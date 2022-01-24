import s from "./style.module.css";

const Home = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.greetings}>
                <h1 className={s.title}>Welcome to the main page of Deathmatch App!</h1>
                <article>
                <p>You can participate in this project both as an organizer and player</p>
                Organizer:
                <ul>
                    <li>Create and cusomize matches for players</li>
                    <li>More features coming soon</li>
                </ul>
                Player:
                <ul>
                    <li>Participate in games from organizers</li>
                    <li>Unique rank system</li>
                    <li>More features coming soon</li>    
                </ul>        
                </article>
                <p>Good luck, have fun :)</p>
            </div>
        </div>
    );
}

export default Home;