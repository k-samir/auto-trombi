export function removeItem(itemToRemove: string) {
    window.localStorage.removeItem(itemToRemove);
}

export function getItem(item: string) {
    return window.localStorage.getItem(item);
}

export function addItem(localeStorageName: string, newItem: string) {
    window.localStorage.setItem(localeStorageName, newItem);
}