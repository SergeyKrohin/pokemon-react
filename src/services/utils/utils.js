export const search = (items, term, propName) => {
    if(typeof term === 'undefined' || typeof propName === 'undefined') {
        return items;
    }

    return items.filter((item) => {
        return item[propName].toLowerCase().includes(term.toLowerCase());
    });
}