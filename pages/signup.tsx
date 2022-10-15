import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { postFileFromServer } from "../misc/utils";
import router from "next/router";
import Image from "next/image";
import React from "react";
import { ParallaxElement } from "../components/ParallaxElement";

type Inputs = {
    username: string;
    password: string;
};
const SignUp: NextPage = () => {
const mousePosition: { x: number; y: number } = useMousePosition();

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
            <main>
            <div className={styles.parallax}>
                    <ParallaxElement
                        image={
                            <Image
                                src="/orbit0.svg"
                                alt=""
                                width={150}
                                height={150}
                            />
                        }
                        sensitivity={0.5}
                        mousePosition={mousePosition}
                    />
                    <ParallaxElement
                        image={
                            <Image
                                src="/orbit1.svg"
                                alt=""
                                width={500}
                                height={500}
                            />
                        }
                        sensitivity={0.5}
                        mousePosition={mousePosition}
                    />
                    <ParallaxElement
                        image={
                            <Image
                                src="/orbit2.svg"
                                alt=""
                                width={130}
                                height={130}
                            />
                        }
                        sensitivity={0.5}
                        mousePosition={mousePosition}
                    />
                    <ParallaxElement
                        image={
                            <Image
                                src="/orbit3.svg"
                                alt=""
                                width={500}
                                height={500}
                            />
                        }
                        sensitivity={0.5}
                        mousePosition={mousePosition}
                    />
                    <ParallaxElement
                        image={
                            <Image
                                src="/sphere0.svg"
                                alt=""
                                width={85}
                                height={85}
                            />
                        }
                        sensitivity={2}
                        mousePosition={mousePosition}
                    />
                    <ParallaxElement
                        image={
                            <Image
                                src="/sphere1.svg"
                                alt=""
                                width={50}
                                height={50}
                            />
                        }
                        sensitivity={2}
                        mousePosition={mousePosition}
                    />
                    </div>
            <div className={styles.inputfields}>
                <div className={styles.leftjustified}><h1 className={styles.hook}>Sign Up</h1></div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.loginForm}
                >
                    <input className={styles.textinput}
                        placeholder="Username"
                        {...register("username", { required: true })}
                    />
                    <input className={styles.textinput}
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span> This field is required</span>}

                    <div className={styles.submitbutton}><button type="submit">Submit</button></div>
                </form>
            </div>
        </main>
        </div>
    );
};
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (ev: any) => {
            setMousePosition({
                x: (window.innerWidth - ev.pageX) / 80,
                y: (window.innerWidth - ev.pageY) / 80,
            });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return mousePosition;
};

export default SignUp;
