import { ButtonGroupProps } from "../lib/types";
import Button from "./Button";

export default function ButtonGroup({
    handleReset,
    handleMarkAllAsBoth,
    handleDeleteAll,
}: ButtonGroupProps) {
    return (
        <section className="button-group">
            <Button onClick={() => handleMarkAllAsBoth(true)} Btype="secondary">
                Mark all as complete
            </Button>
            <Button
                onClick={() => handleMarkAllAsBoth(false)}
                Btype="secondary">
                Mark all as incomplete
            </Button>
            <Button onClick={handleReset} Btype="secondary">
                Reset to initial
            </Button>
            <Button onClick={handleDeleteAll} Btype="secondary">
                Remove all items
            </Button>
        </section>
    );
}
