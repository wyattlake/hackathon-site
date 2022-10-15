import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { postFileFromServer } from "../misc/utils";

type Inputs = {
    title: string;
    content: string;
    tags: string;
};

const Question: NextPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        let objData = {
            uuid: localStorage.getItem("id"),
            dentry: data.content,
            tags: data.tags,
            title: data.title,
            prev: 0,
            parent: 0,
        };

        let jsonData = JSON.stringify(objData);

        postFileFromServer(
            "https://jakehenryparker.com/Hackathon/hackathon.php",
            "postComment=" + encodeURIComponent(jsonData),
            (sent: boolean) => {
                console.log(sent);
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
                <h1>Pose a Question</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.loginForm}
                >
                    <input
                        placeholder="Question"
                        maxLength={125}
                        {...register("title", { required: true })}
                    />
                    {errors.title && <span>This field is required</span>}
                    <textarea
                        placeholder="More information"
                        {...register("content", { required: true })}
                    />
                    {errors.content && <span>This field is required</span>}
                    <input
                        placeholder="Add tags so other users can find your post"
                        {...register("tags", { required: true })}
                    />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Question;
