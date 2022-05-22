// React
import type { ReactElement, ForwardRefExoticComponent } from "react";
import { memo, forwardRef } from "react";

// Interface
import IButton from "./index.d";

// classNames
import classNames from "classnames";

// Style
import Style from "./style.module.css";

const Button: ForwardRefExoticComponent<IButton> = forwardRef<HTMLButtonElement, IButton>(({
    className = "",
    color = "primary",
    ...rest
}, ref): ReactElement<IButton> => {
    const clsx = {
        [Style.primary]: color === "primary",
        [Style.seconday]: color === "secondary"
    };

    return (
        <button ref={ref} {...rest} className={`${classNames} ${classNames(clsx)}`} />
    )
});

Button.displayName = "Button";

export default memo(Button);