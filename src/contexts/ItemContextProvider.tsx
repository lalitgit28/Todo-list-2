import { createContext, ReactNode } from "react";
import { useLocalStorage } from "../lib/customHooks";
import { TItemcontext } from "../lib/types";

const initialTodos = [
    { id: 1, title: "Good Mood", packed: true },
    { id: 2, title: "phone charger", packed: false },
];

export const ItemContext = createContext<TItemcontext>({
    todos: [{ id: new Date().getTime(), title: "", packed: false }],
    handleAddItem() {},
    handleDeleteAll() {},
    deleteItem() {},
    togglePacked() {},
    handleReset() {},
    handleMarkAllAsBoth() {},
});

export default function ItemContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [todos, setTodos] = useLocalStorage("items", initialTodos);
    const handleAddItem = (title: string) => {
        const newTodo = {
            id: new Date().getTime(),
            title,
            packed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const handleMarkAllAsBoth = (isAllComplete: boolean) => {
        todos.forEach((item) => (item.packed = isAllComplete));
    };
    const handleReset = () => {
        setTodos(initialTodos);
    };
    const handleDeleteAll = () => {
        setTodos([]);
    };
    const deleteItem = (id: number) => {
        setTodos(
            todos.filter((item) => {
                return item.id !== id;
            })
        );
    };
    const togglePacked = (id: number) => {
        const newTodo = todos.map((item) => {
            if (item.id === id) {
                return { ...item, packed: !item.packed };
            }
            return item;
        });
        setTodos(newTodo);
    };
    return (
        <ItemContext.Provider
            value={{
                todos,
                handleAddItem,
                handleDeleteAll,
                deleteItem,
                togglePacked,
                handleReset,
                handleMarkAllAsBoth,
            }}>
            {children}
        </ItemContext.Provider>
    );
}
