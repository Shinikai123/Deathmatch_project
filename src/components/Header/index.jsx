import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import s from './style.module.css';

const Header = () => {
	return (
		<div className={s.wrapper}>
				<div className={s.header_body}>
					<h1 className={s.title}>DEATHMATCH APP</h1>

				<nav className={s.header_nav}>
				<img src ={Logo} alt= "logo" className={s.logo} />
					<div className={s.nav_item}>
						<Link to="/" className={s.nav_button_first}>MAIN PAGE</Link>
					</div>


					<div className={s.nav_item}>
						<Link to={"/gamelist"} className={s.nav_button}>GAMELIST</Link>
					</div>
					

					<div className={s.nav_item}>
						<Link to={"/profile"} className={s.nav_button}>PROFILE</Link>
					</div>
					

					<div className={s.nav_item}>
						<Link to={"/organizer"} className={s.nav_button}>ORGANIZER</Link>
					</div>
					

					<div className={s.nav_item}>
						<Link to={"/settings"} className={s.nav_button}>SETTINGS</Link>
					</div>
					

					<div className={s.nav_item}>
						<Link to={"/sign"} className={s.nav_button_last}>SIGN IN/UP</Link>
					</div>
				</nav>
				</div>
			</div>
	);
}

export default Header;
