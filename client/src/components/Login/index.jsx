import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			console.log(localStorage);
			// window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<Link to={"/"} className={styles.backToMain}>Main Page</Link>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 className={styles.h1}>Вход в аккаунт</h1>
						<input
							type="email"
							placeholder="Почта"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Пароль"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Вход
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1 className={styles.h1}>Нет аккаунта?</h1>
					<Link to="/registration">
						<button type="button" className={styles.white_btn}>
							Регистрация
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
