export let prices = 0;
export let seats = [];
export let times = [];
export let dates = [];
export let id = 108978;

export function addprices(){
    prices+=50000;
}

export function subprices(){
    prices-=50000;
}

export function addseats(seat){
    const index = seats.indexOf(seat);
    if (index<0) seats.push(seat);
}

export function dropseats(seat){
    const index = seats.indexOf(seat);
    if (index > -1) { 
    seats.splice(index, 1); 
}
}
export function addElementToCollection(element, collection) {
    const index = collection.indexOf(element);
    if (index < 0) {
      collection.push(element);
    }
}
  
export function removeElementFromCollection(element, collection) {
    const index = collection.indexOf(element);
    if (index > -1) {
      collection.splice(index, 1);
    }
}
  
export function addtimes(time) {
    const index = times.indexOf(time);
    if (index<0) times.push(time);
}
  
export function droptimes(time) {
    const index = times.indexOf(time);
    if (index > -1) { 
    times.splice(index, 1); 
}
}
  
export function adddates(date) {
    const index = dates.indexOf(date);
    if (index<0) dates.push(date);
}
  
export function dropdates(date) {
    const index = dates.indexOf(date);
    if (index > -1) { 
    dates.splice(index, 1); 
}
}

export function reset(){
    prices = 0;
    seats = [];
    times = [];
    dates = [];
}
export function setID(ID){
    id = ID;
}