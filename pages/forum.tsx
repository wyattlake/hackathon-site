import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CommentSmall } from "../components/CommentSmall";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Forum.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { ParallaxElement } from "../components/ParallaxElement";
import { postFileFromServer } from "../misc/utils";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";

type Inputs = {
    query: string;
};

const Forum: NextPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const [comments, setComments] = useState(<div></div>);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        postFileFromServer(
            "https://jakehenryparker.com/Hackathon/hackathon.php",
            "search=" + encodeURIComponent(data.query),
            (data: string) => {
                let parsedData: any = JSON.parse(data);
                console.log(parsedData);

                setComments(
                    <div>
                        {parsedData ? (
                            parsedData.map((comment: any) => {
                                let tagsArray = JSON.parse(comment.tags);
                                return (
                                    <CommentSmall
                                        subject={tagsArray[0]}
                                        author={comment.username}
                                        title={comment.title}
                                        likes={comment.votes}
                                        key={comment.id}
                                        style={{ marginBottom: 20 }}
                                    />
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </div>
                );
            }
        );
    };

    React.useEffect(() => {
        postFileFromServer(
            "https://jakehenryparker.com/Hackathon/hackathon.php",
            "pullBurstComments=" + encodeURIComponent(1),
            (data: string) => {
                let parsedData: any = JSON.parse(data);
                console.log(parsedData);

                setComments(
                    <div>
                        {parsedData.map((comment: any) => {
                            let tagsArray = JSON.parse(comment.tags);
                            return (
                                <CommentSmall
                                    subject={tagsArray[0]}
                                    author={comment.username}
                                    title={comment.title}
                                    likes={comment.votes}
                                    key={comment.id}
                                    style={{ marginBottom: 20 }}
                                />
                            );
                        })}
                    </div>
                );
            }
        );
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Wonder</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <Navbar style={{ position: "absolute", top: 0 }} />
                <div
                    style={{
                        position: "absolute",
                        bottom: -250,
                        right: -100,
                    }}
                >
                    <Image src="/orbit4.svg" alt="" width={500} height={500} />
                </div>
                <div className={styles.mainSection}>
                    <div className={styles.pageTitle}>
                        <h1 className={styles.titleGradient}>Search</h1>
                        <h1 className={styles.title}>&nbsp;for a question</h1>
                    </div>
                    <div className={styles.commentSection}>
                        <div className={styles.commentList}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    placeholder="Search here..."
                                    autoComplete="off"
                                    className={styles.searchBar}
                                    {...register("query", { required: true })}
                                />
                            </form>
                            {comments}
                        </div>
                        <Link href="/question">
                            <div className={styles.postComment}>
                                <p className={styles.subtitle}>
                                    Pose a Question
                                </p>
                                <p className={styles.helpText}>
                                    Your question will be answered by the Wonder
                                    community.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Forum;
