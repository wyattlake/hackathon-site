import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Forum: NextPage = () => {
    return (
        <div className={styles.container}>

            <Head>
                <title>Wonder</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Forum</h1>
            <div className="body">
                <div className={styles.comment}>
                    <div className={styles.commentInfo}>
                        <p>10 likes</p>
                        <p>4 answers</p>
                        <p>3 views</p>
                    </div>
                    <div className={styles.commentMain}>
                        <div className={styles.commentContent}>
                            <h2>defribrillator</h2>
                            <p>What is the derivative of a derivative???</p>
                        </div>
                        <div className={styles.commentProfile}>
                            <p className={styles.commentAuthor}>Ryan Cheng</p>
                            <p>2 karma</p>
                        </div>
                    </div>
                </div>
            </div>
            <main className={styles.main}>
            </main>
        </div >
    )
}

export default Forum
