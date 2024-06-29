import Counter from "./Counter";
import Logo from "./Logo";
import { useItemStore } from "../stores/itemStore";

export default function Header() {
    const todos = useItemStore((state) => state.todos);
    return (
        <header>
            <Logo />
            <Counter
                totalItem={todos.length}
                packedItems={todos.filter((item) => item.packed).length}
            />
        </header>
    );
}
