import { useMemo, useState } from "react";
import { ItemProps } from "../lib/types";
import Select, { SingleValue } from "react-select";
import { useItemStore } from "../stores/itemStore";

const options = [
    { value: "default", label: "Sort by default" },
    { value: "packed", label: "Sort by packed" },
    { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList() {
    const deleteItem = useItemStore((state) => state.deleteItem);
    const todos = useItemStore((state) => state.todos);
    const togglePacked = useItemStore((state) => state.togglePacked);
    const [sortedValue, setSortedValue] = useState("default");
    const sortedItems = useMemo(
        () =>
            [...todos].sort((a, b): number => {
                if (sortedValue == "packed") {
                    return Number(b.packed) - Number(a.packed);
                }
                if (sortedValue == "unpacked") {
                    return Number(a.packed) - Number(b.packed);
                }
                return 0;
            }),
        [todos, sortedValue]
    );
    return (
        <>
            {todos.length > 0 ? (
                <ul className="">
                    <section className="sorting">
                        <Select
                            onChange={(
                                opt: SingleValue<{
                                    value: string;
                                    label?: string;
                                }>
                                // @ts-expect-error option value is not defined
                            ) => setSortedValue(opt.value)}
                            defaultValue={options[0]}
                            options={options}
                        />
                    </section>
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            deleteItem={deleteItem}
                            togglePacked={togglePacked}
                            item={item}
                        />
                    ))}
                </ul>
            ) : (
                <div className="empty-state">
                    <h3>Empty Packing List</h3>
                    <p>
                        Start by adding some items you <br />
                        absoultely don't want to forget
                    </p>
                </div>
            )}
        </>
    );
}

const Item = ({ item, deleteItem, togglePacked }: ItemProps) => {
    return (
        <li className="item" key={item.title}>
            <label>
                <input
                    type="checkbox"
                    onChange={() => togglePacked(item.id)}
                    checked={item.packed}
                />
                {item.title}
            </label>
            <button
                onClick={() => {
                    deleteItem(item.id);
                }}>
                ❌
            </button>
        </li>
    );
};
