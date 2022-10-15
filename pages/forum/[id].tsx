import type { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import styles from "../../styles/Forum.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { postFileFromServer } from "../../misc/utils";
import { useRouter } from "next/router";
import { CommentSmall } from "../../components/CommentSmall";
import React, { useState } from "react";
import { type } from "os";
import useQuery from "../../misc/useQuery";

const CommentLarge: NextPage = () => {
    const query: any = useQuery();

    const [commentFull, setCommentFull] = useState(<></>);
    const [profile, setProfile] = useState(<></>);
    const [commentList, setCommentList] = useState(<></>);

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

                console.log(focusedComment);

                setCommentFull(
                    <div className={styles.commentFull}>
                        <h2>{focusedComment.title}</h2>
                        {focusedComment.dentry != null ? (
                            <p>{focusedComment.dentry}</p>
                        ) : (
                            <p>{focusedComment.dentry}</p>
                        )}

                        <div className={styles.likeButtons}>
                            <button>Vote</button>
                            <div>{focusedComment.votes} Votes</div>
                        </div>
                    </div>
                );

                // setComments(
                //     <CommentSmall
                //         subject="None"
                //         author="rzcman"
                //         title="dsjfklds"
                //         link=""
                //         likes={11}
                //     />
                // );

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
                                <div className={styles.postComment}>
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
            <Navbar />
            <div className={styles.main}>
                <div className={styles.mainSection}>
                    <div className={styles.commentSection}>
                        <div className={styles.commentList}>
                            {commentFull}
                            {commentList}
                        </div>
                        <div className={styles.authorSection}>
                            {profile}
                            <button>Add Friend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentLarge;
