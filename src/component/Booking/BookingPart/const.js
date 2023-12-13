export let prices = 0;
export let seats = []; 
export let id = 466420;

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

export function reset(){
    prices = 0;
    seats = [];
}

export function setID(ID){
    id = ID;
}