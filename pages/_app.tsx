import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { postFileFromServer } from "./utils";

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        if (localStorage.getItem("id")) {
            let objAccount = {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password"),
            };

            let jsonAccount = JSON.stringify(objAccount);

            postFileFromServer(
                "https://jakehenryparker.com/Hackathon/hackathon.php",
                "login=" + encodeURIComponent(jsonAccount),
                (data: string) => {
                    let parsedData: { id: string; karma: string } =
                        JSON.parse(data);
                    localStorage.setItem("id", parsedData.id);
                    localStorage.setItem("karma", parsedData.karma);
                }
            );
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
