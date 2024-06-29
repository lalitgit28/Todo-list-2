import { HeaderProps } from "../lib/types";

export default function Counter({ packedItems, totalItem }: HeaderProps) {
    return (
        <p>
            <b>{packedItems}</b> / {totalItem} Items packed
        </p>
    );
}
