const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
};

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
};

const copyOfCats = [...cats];
function appendCat(name) {
   const allCatsAppend = [...cats, name];
   return allCatsAppend;
};

function prependCat(name) {
    const allCatsPrepend = [name, ...cats];
    return allCatsPrepend;
};

function removeLastCat() {
   return cats.slice(0, cats.length -1); 
}

function removeFirstCat() {
    return cats.slice(1);
}