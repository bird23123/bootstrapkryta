import styles from "./styles.module.css";
import Navbar from "../Navbar";

const Boiler = () => {
	return (
		<div className={styles.headerContainer}>
			<Navbar />
		</div>
	);
};

export default Boiler;