import { writable } from "svelte/store";
import { browser } from "$app/env";

const getData = browser ? JSON.parse(localStorage.getItem('data')) : [];

const initBasket = getData ? getData : [];

export const basket = writable(initBasket);

export const createBasket = {

	subscribe: basket.subscribe,

    increment: (id) => {
       basket.update(items => {
        let search = items.find(x => x.id === id);
        if (search === undefined) {
            const newBasket = [ ...items, {id: id, item: 1}];
            if (browser) {localStorage.setItem('data', JSON.stringify(newBasket));};
            return newBasket
        } else {
            const basketIndex = items.findIndex(x => x.id === id);
            const incrementedAmount = items[basketIndex].item + 1;
            const incrementedValue = {id: id, item: incrementedAmount};
            const incrementedItem = { ...items[basketIndex], ...incrementedValue};
            const updatedBasket = [ ...items ];
            updatedBasket[basketIndex] = incrementedItem;
            if (browser) {localStorage.setItem('data', JSON.stringify(updatedBasket));};
            return updatedBasket;
        }
       })
    },

    decrement: (id) => {basket.update(
        items => {
            let search = items.find(x => x.id === id);
            if (search === undefined) return items;
            else if (search.item === 0) return items;
            else {
                const basketIndex = items.findIndex(x => x.id === id);
                const decrementedAmount = items[basketIndex].item - 1;
                const decrementedValue = {id: id, item: decrementedAmount};
                const decrementedItem = { ...items[basketIndex], ...decrementedValue};
                const updatedBasket = [ ...items ];
                updatedBasket[basketIndex] = decrementedItem;
                const newUpdatedBasket = updatedBasket.filter(x => x.item !== 0);
                if (newUpdatedBasket.length === 0) localStorage.clear();
                else localStorage.setItem('data', JSON.stringify(newUpdatedBasket));
                return newUpdatedBasket;
            }
        }    
    )},

    clearBasket: () => {
        basket.set([]);
        localStorage.clear();
    },

    removeItem: id => {
        basket.update(items => {
            const filteredBasket = items.filter(x => x.id !== id);
            if (filteredBasket.length === 0) localStorage.clear();
            else localStorage.setItem('data', JSON.stringify(filteredBasket));
            return filteredBasket;
        })
    }
    
}