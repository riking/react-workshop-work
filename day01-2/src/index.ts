interface Warehouse {
    name: string,
    price: number,
    fiveG: boolean,
}

let detroitWarehouse: Warehouse[] = [
    {
        name: "iPhone SE",
        price: 399,
        fiveG: false,
    },
    {
        name: "iPhone XR",
        price: 499,
        fiveG: false,
    },
    {
        name: "iPhone 11",
        price: 599,
        fiveG: false,
    },
    {
        name: "iPhone 12 Mini",
        price: 729,
        fiveG: true,
    },
    {
        name: "iPhone 12",
        price: 829,
        fiveG: true,
    },
    {
        name: "iPhone 12 Pro",
        price: 999,
        fiveG: true,
    },
    {
        name: "iPhone 12 Max",
        price: 1099,
        fiveG: true,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Pixel 5",
        price: 699,
        fiveG: true,
    },
];

let newYorkWarehouse: Warehouse[] = [
    {
        name: "iPhone SE",
        price: 399,
        fiveG: false,
    },
    {
        name: "Pixel 5",
        price: 699,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Galaxy S10",
        price: 750,
        fiveG: false,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
];

let chicagoWarehouse: Warehouse[] = [
    {
        name: "Galaxy S10",
        price: 750,
        fiveG: false,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "iPhone 12",
        price: 829,
        fiveG: true,
    },
    {
        name: "iPhone 12 Pro",
        price: 999,
        fiveG: true,
    },
    {
        name: "iPhone 12 Max",
        price: 1099,
        fiveG: true,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Pixel 5",
        price: 699,
        fiveG: true,
    },
];

const addPhone = (wh: Warehouse[], newPhone: Warehouse): void => {
    wh.push(newPhone);
};
const deletePhoneByIndex = (wh: Warehouse[], index: number): void => {
    wh.splice(index, 1);
};

const findPhoneIdxByName = (wh: Warehouse[], name: string): number => {
    return wh.findIndex(o => o.name === name);
};
const deletePhoneByName = (wh: Warehouse[], name: string): boolean => {
    const idx = findPhoneIdxByName(wh, name);
    if (idx === -1) {
        return false;
    }
    deletePhoneByIndex(wh, idx);
    return true;
};
const filter5G = (wh: Warehouse[]): Warehouse[] => {
    return wh.filter(o => o.fiveG);
};
const filterPriceLessThan = (wh: Warehouse[], priceThreshold: number): Warehouse[] => {
    return wh.filter(o => o.price < priceThreshold);
};
const filterPriceGreaterThan = (wh: Warehouse[], priceThreshold: number): Warehouse[] => {
    return wh.filter(o => o.price > priceThreshold);
};
const findPhoneByName = (wh: Warehouse[], name: string): Warehouse|undefined => {
    const idx = findPhoneIdxByName(wh, name);
    if (idx === -1) {
        return;
    }
    return wh[idx];
};

const calcAverageCost = (wh: Warehouse[]): number => {
    const totalCost = wh.reduce((a, o) => a + o.price, 0);
    return totalCost / wh.length;
};

const doWeHaveA5GPhone = (wh: Warehouse[]): boolean => {
    const idx = wh.findIndex(o => o.fiveG);
    return idx !== -1;
};
const phoneFlashSaleInternal = (wh: Warehouse[], ratio: number, pred: (w: Warehouse) => boolean): Warehouse[] => {
    const inverseRatio = (1 - ratio);
    return wh.map((phone: Warehouse) => {
        if (pred(phone)) {
            return {
                name: phone.name,
                fiveG: phone.fiveG,
                price: phone.price * inverseRatio,
            };
        } else {
            return phone;
        }
    });
}

const phoneFlashSale = (wh: Warehouse[], ratio: number): Warehouse[] => {
    return phoneFlashSaleInternal(wh, ratio, () => true);
};
const phoneFlashSaleV2 = (wh: Warehouse[], ratio: number, names: string[]): Warehouse[] => {
    return phoneFlashSaleInternal(wh, ratio, (w) => {
        return undefined !== names.find(name => w.name === name);
    });
};
