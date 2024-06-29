import { ComponentPropsWithoutRef } from "react";

export type TSetTodos = {
    setTodos: (value: Titem[]) => void;
};

export type SidebarProps = {
    handleAddItem: (title: string) => void;
    handleDeleteAll: () => void;
    handleReset: () => void;
    handleMarkAllAsBoth: (isAllComplete: boolean) => void;
};
export type Titem = {
    id: number;
    title: string;
    packed: boolean;
};

export type ItemListProps = {
    todos: Titem[];
    deleteItem: (id: number) => void;
    togglePacked: (id: number) => void;
};

export type ItemProps = {
    item: Titem;
    deleteItem: (id: number) => void;
    togglePacked: (id: number) => void;
};

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode;
    Btype?: string;
};

export type ButtonGroupProps = {
    handleDeleteAll: () => void;
    handleReset: () => void;
    handleMarkAllAsBoth: (isAllComplete: boolean) => void;
};

export type HeaderProps = {
    totalItem: number;
    packedItems: number;
};

export type TItemcontext = {
    todos: Titem[];
    handleAddItem: (title: string) => void;
    handleDeleteAll: () => void;
    deleteItem: (id: number) => void;
    togglePacked: (id: number) => void;
    handleReset: () => void;
    handleMarkAllAsBoth: (isAllComplete: boolean) => void;
};
export type TItemStore = {
    todos: Titem[];
    handleAddItem: (title: string) => void;
    handleDeleteAll: () => void;
    deleteItem: (id: number) => void;
    togglePacked: (id: number) => void;
    handleReset: () => void;
    handleMarkAllAsBoth: (isAllComplete: boolean) => void;
};
