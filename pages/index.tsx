import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import React from "react";
import { ParallaxElement } from "../components/ParallaxElement";
import { Navbar } from "../components/Navbar";
import App from "next/app";

const Home: NextPage = () => {
    const mousePosition: { x: number; y: number } = useMousePosition();
    return (
        <div className={styles.container}>
            <Head>
                <title>Wonder</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <Navbar />
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
                    <div
                        className={styles.body}
                        style={{
                            position: "relative",
                            left: mousePosition.x,
                            top: mousePosition.y,
                        }}
                    >
                        <div className={styles.hookSection}>
                            <h1 className={styles.hook}>A new way to study</h1>
                            <div className={styles.typedText}>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        let subjects = [
                                            "Math",
                                            "History",
                                            "English",
                                            "Science",
                                            "Art",
                                            "Language",
                                        ];
                                        subjects.forEach((subject) => {
                                            typewriter
                                                .typeString(subject)
                                                .pauseFor(2000)
                                                .deleteAll();
                                        });
                                        typewriter.start();
                                    }}
                                    options={{ loop: true }}
                                />
                            </div>
                        </div>
                        <p className={styles.subtitle}>
                            START&nbsp;&nbsp;TODAY
                        </p>
                        <div className={styles.commentBox}>
                            <div className={styles.topComment}>
                                <div className={styles.comment}>
                                    <div className={styles.commentHeader}>
                                        <div className={styles.subject}>
                                            Math
                                        </div>
                                        <div
                                            className={styles.subjectDot1}
                                        ></div>
                                    </div>
                                    <div className={styles.content}>
                                        How do I take a derivative?
                                    </div>
                                </div>
                            </div>
                            <div className={styles.topComment}>
                                <div className={styles.comment}>
                                    <div className={styles.commentHeader}>
                                        <div className={styles.subject}>
                                            English
                                        </div>
                                        <div
                                            className={styles.subjectDot2}
                                        ></div>
                                    </div>
                                    <div className={styles.content}>
                                        What&apos;s the best way to start my...
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fadingComment}></div>
                        </div>
                    </div>
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

export default Home;
