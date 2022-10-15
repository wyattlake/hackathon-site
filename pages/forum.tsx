import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CommentSmall } from "../components/CommentSmall";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Forum.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

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
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <div className={styles.container}>
            <Head>
                <title>Wonder</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <Navbar style={{ position: "absolute", top: 0 }} />
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
                            <CommentSmall
                                subject="Math"
                                author="rzcman"
                                title="Whats the best way to start my essay?"
                                likes={3}
                            />
                            <CommentSmall
                                subject="Math"
                                author="rzcman"
                                title="Whats the best way to start my essay?"
                                likes={3}
                            />
                        </div>
                        <div className={styles.postComment}>
                            <p className={styles.subtitle}>Pose a Question</p>
                            <p className={styles.helpText}>
                                Your question will be answered by the Wonder
                                community.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Forum;
