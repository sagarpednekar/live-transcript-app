import type { PropsWithChildren } from "react"
import { IconsNameType } from "@/types";
import IconBox from "@/shared/ui/icon";

type ButtonSize = "sm" | "md" | 'lg'
type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'danger'
    clickHandler: () => void;
    size?: ButtonSize;
    iconName?: IconsNameType;
    customCss?: string
}

export default function Button({ size = "lg", customCss = "", iconName, clickHandler, children, ...props }: PropsWithChildren<ButtonProps>) {
    const getSize = (size: ButtonSize) => {
        switch (size) {
            case "sm":
                return 'p-2'
            case "md":
                return 'p-3'
            case "lg":
                return 'p-4'
            default:
                break;
        }
    }

    const buttonSize = getSize(size)
    return <button className={`${buttonSize} rounded bg-gray-200 cursor-pointer flex items-center gap-1 ${customCss}`} onClick={clickHandler}>{children} {iconName ? <IconBox name={iconName} {...props} /> : null}</button>
}