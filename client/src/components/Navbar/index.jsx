import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navbar = () => {
	const user = localStorage.getItem("token");
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				{/*LOGO CONTAINER*/}
				<div className={styles.logoContainer}>
					<Link to={"/"} className={styles.imgContainer}><img src={Logo} alt="" className={styles.img} /></Link>
					<Link to={"/"} className={styles.logoTitle}>VladProduction</Link>
				</div>
				<div className={styles.navReg}>
					{/*HEADER NAVIGATION*/}
					<ul className={styles.navRegList}>
						<li className={styles.navRegListLi}><Link to={"/"} className={styles.navRegListLiLink}>Главная</Link></li>
						<li className={styles.navRegListLi}><Link to={"/about"} className={styles.navRegListLiLink}>О приложении</Link></li>
						<li className={styles.navRegListLi}><Link to={"/tasks"} className={styles.navRegListLiLink}>Задачи</Link></li>
						<li className={styles.navRegListLi}>
							<div className={styles.navRegListLiLink}>Модели</div>
							<ul className={styles.secondUl}>
								<li className={styles.secondUlLi}>
									<Link to={"/hydraulic"} className={styles.secondUlLiLink}>Гидросистема</Link>
								</li>
								<li className={styles.secondUlLi}>
									<Link to={"/boiler"} className={styles.secondUlLiLink}>Кипятильник</Link>
								</li>
								<li className={styles.secondUlLi}>
									<Link to={"/heatexch"} className={styles.secondUlLiLink}>Теплообменник</Link>
								</li>
							</ul>
						</li>
					</ul>
					{/*AUTH OR LOGOUT*/}
					{user ? (
						<button className={styles.login} onClick={handleLogout}>
							Выход
						</button>
					) : (
						<div className={styles.registration}>
							<Link to={"/login"} className={styles.login}>Вход</Link>
							<Link to={"/signup"} className={styles.signup}>Регистрация</Link>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
