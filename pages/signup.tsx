import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { postFileFromServer } from "../misc/utils";
import router from "next/router";

type Inputs = {
    username: string;
    password: string;
};

const SignUp: NextPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        let objAccount = {
            username: data.username,
            password: data.password,
        };

        let jsonAccount = JSON.stringify(objAccount);

        postFileFromServer(
            "https://jakehenryparker.com/Hackathon/hackathon.php",
            "uniqueUN=" + encodeURIComponent(data.username),
            (data: string) => {
                if (data) {
                    postFileFromServer(
                        "https://jakehenryparker.com/Hackathon/hackathon.php",
                        "createAccount=" + encodeURIComponent(jsonAccount),
                        (data: string) => {
                            localStorage.setItem("id", data);
                            localStorage.setItem("karma", "10");
                            localStorage.setItem(
                                "username",
                                objAccount.username
                            );
                            localStorage.setItem(
                                "password",
                                objAccount.password
                            );
                        }
                    );
                    router.push("/forum");
                } else {
                    alert("username taken");
                }
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
                <h1>Sign Up</h1>
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

export default SignUp;
