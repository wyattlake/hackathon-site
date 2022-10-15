import styles from "../styles/Home.module.css";
import { HTMLProps } from "react";

type ParallaxProps = HTMLProps<HTMLDivElement> & {
    image: React.ReactNode;
    mousePosition: { x: number; y: number };
    sensitivity: number;
};

export const ParallaxElement: React.FC<ParallaxProps> = (props) => {
    return (
        <div className={styles.parallaxItem} {...props}>
            <div
                style={{
                    position: "relative",
                    left: props.mousePosition.x * props.sensitivity,
                    top: props.mousePosition.y * props.sensitivity,
                }}
            >
                {props.image}
            </div>
        </div>
    );
};
