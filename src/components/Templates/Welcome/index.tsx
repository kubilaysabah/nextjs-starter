// React
import type { FC, ReactElement } from "react";
import { memo } from "react";

// Style
import Style from "./style.module.css";

const Welcome: FC = (): ReactElement => {
    return (
        <div className={Style.wrapper}>
            <div>
                <h1 className={Style.title}>Welcome to the
                    <a href="https://nextjs.org/" target="_blank" rel="noreferrer" title="Welcome to the Next.JS" aria-label="Welcome to the Next.JS" className={Style.link}>
                        Next.JS
                    </a>
                </h1>
            </div>
        </div>
    );
};


export default memo(Welcome);