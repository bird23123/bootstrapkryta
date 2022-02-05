import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import G from '../img/g.jpg';
import T from '../img/t.jpg';
import K from '../img/k.jpg';
import Navbar from "../Navbar";

const Main = () => {
	return (
		<div className={styles.headerContainer}>
			<Navbar />
			<main className={styles.main}>
				<section className={styles.title}>
					<h2 className={styles.mainTitle}>Компьютерные модели технологических систем</h2>
					<p className={styles.mainText}>Компьютерная модель - это совокупность функционально взаимосвязанных средств
						технологического оснащения, предметов производства и исполнителей для
						выполнения в регламентированных условиях производства заданных технологических процессов или операций.
					</p>
					<div className={styles.mainFlex}>
						<div className={styles.mainFlexCard}>
							<div className={styles.mainFlexCardItem}>
								<div className={styles.CardImg_Container}><img src={G} alt={""} className={styles.mainFlexCardImg}></img></div>
								<div className={styles.mainFlexCardTitle}>Гидравлическая система</div>
								<div className={styles.mainFlexCardText}>Гидравлическими системами принято называть машины и
									инструменты,
									использующие мощность жидкости для того, чтобы
									проделать работу.</div>
								<Link to={"/hydraulic"} className={styles.button}>Перейти</Link>
							</div>
						</div>
						<div className={styles.mainFlexCard}>
							<div className={styles.mainFlexCardItem}>
								<div className={styles.CardImg_Container}><img src={T} alt={""} className={styles.mainFlexCardImg}></img></div>
								<div className={styles.mainFlexCardTitle}>Теплообменный аппарат</div>
								<div className={styles.mainFlexCardText}>Теплообменник — техническое устройство, в котором
									осуществляется
									теплообмен между двумя средами, имеющими различные
									температуры.</div>
								<Link to={"/heatexch"} className={styles.button}>Перейти</Link>
							</div>
						</div>
						<div className={styles.mainFlexCard}>
							<div className={styles.mainFlexCardItem}>
								<div className={styles.CardImg_Container}><img src={K} alt={""} className={styles.mainFlexCardImg}></img></div>
								<div className={styles.mainFlexCardTitle}>Кипятильный аппарат</div>
								<div className={styles.mainFlexCardText}>Кипятильник – это электрический прибор, предназначенный для
									приготовления большого количества кипятка или горячей воды в
									столовых, кафе, барах и ресторанах.</div>
								<Link to={"/boiler"} className={styles.button}>Перейти</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Main;
