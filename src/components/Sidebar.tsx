import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemStore } from "../stores/itemStore";

export default function Sidebar() {
    const handleAddItem = useItemStore((state) => state.handleAddItem);
    const handleDeleteAll = useItemStore((state) => state.handleDeleteAll);
    const handleMarkAllAsBoth = useItemStore(
        (state) => state.handleMarkAllAsBoth
    );
    const handleReset = useItemStore((state) => state.handleReset);
    return (
        <div className="sidebar">
            <AddItemForm handleAddItem={handleAddItem} />
            <ButtonGroup
                handleDeleteAll={handleDeleteAll}
                handleMarkAllAsBoth={handleMarkAllAsBoth}
                handleReset={handleReset}
            />
        </div>
    );
}
