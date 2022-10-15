import styles from "../styles/CommentSmall.module.css";
import Image from "next/image";
import { HTMLProps } from "react";
import Link from "next/link";

type CommentProps = HTMLProps<HTMLDivElement> & {
    subject:
        | "Math"
        | "History"
        | "English"
        | "Science"
        | "Art"
        | "Language"
        | "None";
    author: string;
    title: string;
    likes: number;
    link: string;
};

const getIconColor = (subject: String) => {
    switch (subject) {
        case "Math":
            return "#B1EC65";
        case "History":
            return "#E17C3A";
        case "English":
            return "#EBBA48";
        case "Science":
            return "#E76E6E";
        case "Art":
            return "#54A4EE";
        case "Language":
            return "#F687BC";
        case "None":
            return "FFF7EB";
    }
};

export const CommentSmall: React.FC<CommentProps> = (props) => {
    if (props.link != "") {
        return (
            <Link href={props.link}>
                <div {...props} className={styles.comment}>
                    <div className={styles.authorSection}>
                        <p className={styles.commentAuthor}>{props.author}</p>
                        <div
                            className={styles.subjectIcon}
                            style={{
                                backgroundColor: getIconColor(props.subject),
                            }}
                        ></div>
                        <div className="spacer"></div>
                        <p>{props.likes} votes</p>
                    </div>
                    <p className={styles.commentTitle}>{props.title}</p>
                </div>
            </Link>
        );
    } else {
        return (
            <div {...props} className={styles.comment}>
                <div className={styles.authorSection}>
                    <p className={styles.commentAuthor}>{props.author}</p>
                    <div
                        className={styles.subjectIcon}
                        style={{ backgroundColor: getIconColor(props.subject) }}
                    ></div>
                    <div className="spacer"></div>
                    <p>{props.likes} likes</p>
                </div>
                <p className={styles.commentTitle}>{props.title}</p>
            </div>
        );
    }
};
