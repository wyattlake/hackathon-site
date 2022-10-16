import type { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import styles from "../../styles/CommentFull.module.css";
import Head from "next/head";
import { postFileFromServer } from "../../misc/utils";
import { CommentSmall } from "../../components/CommentSmall";
import React, { useState } from "react";
import useQuery from "../../misc/useQuery";
import Link from "next/link";

const CommentLarge: NextPage = () => {
    const query: any = useQuery();

    const [commentFull, setCommentFull] = useState(<></>);
    const [profile, setProfile] = useState(<></>);
    const [commentList, setCommentList] = useState(<></>);
    const [commentId, setCommentId] = useState(0);

    React.useEffect(() => {
        if (!query) {
            return;
        }

        let focusedComment: any = null;
        postFileFromServer(
            "https://jakehenryparker.com/Hackathon/hackathon.php",
            "getCommentChain=" + encodeURIComponent(query.id),
            (data: any) => {
                let comments = JSON.parse(data);
                focusedComment = comments[comments.length - 1];

                console.log(focusedComment.id);
                setCommentId(focusedComment.id);

                setCommentFull(
                    <div className={styles.commentFull}>
                        <h2>{focusedComment.title}</h2>
                        {focusedComment.dentry != null ? (
                            <p>{focusedComment.dentry}</p>
                        ) : (
                            <></>
                        )}

                        <div className={styles.likeButtons}>
                            <button>Vote</button>
                            <div className={styles.voteCount}>
                                {focusedComment.votes} Votes
                            </div>
                            <div className="spacer"></div>
                            <Link href={"/question/" + commentId}>
                                <button>Comment</button>
                            </Link>
                        </div>
                    </div>
                );

                comments.pop();
                setCommentList(
                    <>
                        {comments.map((comment: any) => {
                            return (
                                <CommentSmall
                                    subject="None"
                                    author={comment.user}
                                    title={comment.title}
                                    link=""
                                    likes={11}
                                    key={comment.id}
                                />
                            );
                        })}
                    </>
                );

                if (focusedComment != null) {
                    postFileFromServer(
                        "https://jakehenryparker.com/Hackathon/hackathon.php",
                        "findUserByID=" +
                            encodeURIComponent(parseInt(focusedComment.uuid)),
                        (data: any) => {
                            let user = JSON.parse(data);

                            setProfile(
                                <div className={styles.profile}>
                                    <p className={styles.subtitle}>
                                        {user.username}
                                    </p>
                                    <p className={styles.helpText}>
                                        {user.karma} karma
                                        <br></br>
                                        Joined in {user.created.substring(0, 4)}
                                    </p>
                                </div>
                            );
                        }
                    );
                }
            }
        );
    }, [query]);

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
                ></div>
                <div className={styles.mainSection}>
                    <div className={styles.commentSection}>
                        <div className={styles.commentList}>
                            {commentFull}
                            {commentList}
                        </div>
                        <Link href="/question">{profile}</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CommentLarge;
