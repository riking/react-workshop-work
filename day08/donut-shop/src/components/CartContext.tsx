import React, { useState } from "react";
import { createContext } from "react";
import { DonutInfo } from "../types";

export interface CartEntry {
    donut: DonutInfo;
    quantity: number;
    unitPrice: number;
}

export interface CartContextModel {
    entries: CartEntry[];
    addItem: (item: CartEntry) => void;
    summarize: () => { totalCalories: number, totalPrice: number };
    empty: () => void;
}

const defaultValue: CartContextModel = {
    entries: [],
    addItem: (item: CartEntry) => { throw "Not implemented" },
    summarize: () => { throw "Not implemented" },
    empty: () => { throw "Not implemented" },
};

const CartContext = createContext(defaultValue);
export default CartContext;

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
    const [entries, setEntries] = useState<CartEntry[]>([]);

    return (
        <CartContext.Provider value={{
            entries,
            addItem: (entry: CartEntry) => {
                const existingIdx = entries.findIndex(e => e.donut.id == entry.donut.id);
                let newEntries = entries.slice(0);
                if (existingIdx === -1) {
                    newEntries.push(entry);
                } else {
                    newEntries[existingIdx].quantity += entry.quantity;
                }
                setEntries(newEntries);
            },
            summarize(): { totalCalories: number, totalPrice: number } {
                let total = {
                    totalCalories: 0,
                    totalPrice: 0,
                };
                entries.forEach(entry => {
                    total.totalCalories += entry.donut.calories;
                    total.totalPrice += entry.unitPrice * entry.quantity;
                });
                return total;
            },
            empty(): void {
                setEntries([]);
            }
        }}>
            {children}
        </CartContext.Provider>
    )
}