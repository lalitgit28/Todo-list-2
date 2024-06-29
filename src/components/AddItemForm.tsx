import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({
    handleAddItem,
}: {
    handleAddItem: (title: string) => void;
}) {
    const [title, setTitle] = useState("");
    const inputRef = useRef(null);
    console.log("Item form rendered");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title) {
            alert("item cannot be empty");
            // @ts-expect-error focus can be null
            inputRef.current?.focus();
            return;
        }
        handleAddItem(title);
        setTitle("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                ref={inputRef}
                autoFocus
                placeholder="Toothbrush..."
                type="text"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <Button>Add to list</Button>
        </form>
    );
}
