import { ButtonProps } from "../lib/types";

export default function Button({ Btype, children, ...rest }: ButtonProps) {
    return (
        <button {...rest} className={`btn ${Btype === "secondary" && 'btn--secondary'}`}>{children}</button>
    )
}
