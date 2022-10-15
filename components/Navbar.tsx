import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { HTMLProps } from "react";

type NavbarProps = HTMLProps<HTMLDivElement>;

export const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <div {...props} className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/logo.svg" alt="" width={130} height={50} />
            </div>
            <p>SIGN&nbsp;UP</p>
            <p>LOGIN</p>
        </div>
    );
};
