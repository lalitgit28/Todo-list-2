import { create } from "zustand";
import { Titem, TItemStore } from "../lib/types";

const initialTodos = [
    { id: 1, title: "Good Mood", packed: true },
    { id: 2, title: "phone charger", packed: false },
];

export const useItemStore = create<TItemStore>()((set) => ({
    todos: initialTodos,
    handleAddItem: (title: string) => {
        const newTodo = {
            id: new Date().getTime(),
            title,
            packed: false,
        };
        set((state) => ({ todos: [...state.todos, newTodo] }));
    },
    handleDeleteAll: () => {
        set(() => ({ todos: [] }));
    },
    deleteItem: (id: number) => {
        set((state) => {
            const newTodo = state.todos.filter((item: Titem) => item.id !== id);
            return { todos: newTodo };
        });
    },
    togglePacked: (id: number) => {
        set((state) => {
            const newTodo = state.todos.map((item: Titem) => {
                if (item.id === id) {
                    return { ...item, packed: !item.packed };
                }
                return item;
            });
            return { todos: newTodo };
        });
    },
    handleReset: () => {
        set(() => ({ todos: initialTodos }));
    },
    handleMarkAllAsBoth: (isAllComplete: boolean) => {
        set((state) => {
            const newtodo = state.todos.map((item) => ({
                ...item,
                packed: isAllComplete,
            }));
            return { todos: newtodo };
        });
    },
}));
