import type { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import styles from "../../styles/Forum.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { postFileFromServer } from "../../misc/utils";
import router, { useRouter } from "next/router";
import { CommentSmall } from "../../components/CommentSmall";
import React from "react";
import { type } from "os";

const CommentLarge: NextPage = () => {
    const router = useRouter();
    const { snowflake }: any = router.query;

    React.useEffect(() => {
        postFileFromServer(
            "https://jakehenryparker.com/Hackathon/hackathon.php",
            "getCommentChain=" + encodeURIComponent(snowflake),
            (data: string) => {
                let parsedData: { id: string; karma: string } =
                    JSON.parse(data);
            }
        );
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Wonder</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.mainSection}>
                    <div className={styles.commentSection}>
                        <div className={styles.commentList}>
                            <div className={styles.commentFull}>
                                <h2>Title</h2>
                                <p>Text</p>
                                <div className={styles.likeButtons}>
                                    <button>Like</button>
                                    <div>11 likes</div>
                                </div>
                            </div>
                            <CommentSmall
                                subject="None"
                                author="rzcman"
                                title="dsjfklds"
                                link=""
                                likes={11}
                            />
                        </div>
                        <div className={styles.authorSection}>
                            <div className={styles.postComment}>
                                <p className={styles.subtitle}>rzcman</p>
                                <p className={styles.helpText}>
                                    200 karma<br></br> Account created 1 year
                                    ago
                                </p>
                            </div>
                            <button>Add Friend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentLarge;
