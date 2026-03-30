// lib/storage.js

/**
 * Save data to localStorage
 * @param {string} key - The key under which the data is stored
 * @param {any} value - The data to be stored
 */
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieve data from localStorage
 * @param {string} key - The key for the data to retrieve
 * @returns {any} - The data retrieved from localStorage, or null if it doesn't exist
 */
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

/**
 * Remove data from localStorage
 * @param {string} key - The key for the data to remove
 */
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

/**
 * Clear all data from localStorage
 */
function clearLocalStorage() {
    localStorage.clear();
}

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage, clearLocalStorage };