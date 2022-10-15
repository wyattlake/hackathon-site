import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { HTMLProps } from "react";
import Link from "next/link";
import React from "react";

type NavbarProps = HTMLProps<HTMLDivElement>;

export const Navbar: React.FC<NavbarProps> = (props) => {
    const getHref = () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("id") ? "/forum" : "/";
        } else {
            return "/";
        }
    };

    return (
        <div {...props} className={styles.navbar}>
            <div className={styles.logo}>
                <Link href={getHref()}>
                    <Image src="/logo.svg" alt="" width={130} height={50} />
                </Link>
            </div>
            <Link href="/signup">
                <a>SIGN&nbsp;UP</a>
            </Link>
            <Link href="/login">
                <a>LOGIN</a>
            </Link>
        </div>
    );
};
