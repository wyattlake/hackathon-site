import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { postFileFromServer } from "./utils";

type Inputs = {
    username: string;
    password: string;
};

const Login: NextPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        let objAccount = {
            username: data.username,
            password: data.password,
        };

        let jsonAccount = JSON.stringify(objAccount);

        postFileFromServer(
            "https://jakehenryparker.com/Hackathon/hackathon.php",
            "login=" + encodeURIComponent(jsonAccount),
            (data: string) => {
                let parsedData: { id: string; karma: string } =
                    JSON.parse(data);
                localStorage.setItem("id", parsedData.id);
                localStorage.setItem("karma", parsedData.karma);
                localStorage.setItem("username", objAccount.username);
                localStorage.setItem("password", objAccount.password);
            }
        );
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Wonder</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Navbar />
            <div className={styles.body}>
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.loginForm}
                >
                    <input
                        placeholder="Username"
                        {...register("username", { required: true })}
                    />
                    <input
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;
