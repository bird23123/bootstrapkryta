import axios from "axios";
import styles from "./styles.module.css";

const Login = () => {
	const user = localStorage.getItem("token");
	let data;
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/get";
			const { data: res } = await axios.get(url, data);
			console.log(res, data);
		} catch (error) {
			console.log(error);
		}
	};
	const idinaxyu = async (e) => {
		e.preventDefault();
		try {
			console.log(``);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className={styles.login_container}>
			{user ?
				<button
					type="button"
					onClick={handleSubmit}
					className={styles.white_btn}>
					Регистрация
				</button>
				:
				<button
					type="button"
					onClick={idinaxyu}
					className={styles.white_btn}>
					Регистрация
				</button>
			}
		</div>
	);
};

export default Login;
