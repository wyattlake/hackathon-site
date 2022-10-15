import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CommentSmall } from "../components/CommentSmall";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Forum: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wonder</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <Navbar style={{ position: "absolute", top: 0 }} />
                <div>
                    <h1>Forum</h1>
                </div>
                <div className="body">
                    <CommentSmall
                        subject="Math"
                        author="rzcman"
                        title="Whats the best way to start my essay?"
                        likes={3}
                    />
                </div>
            </main>
        </div>
    );
};

export default Forum;
