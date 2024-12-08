// find method

// uses callback funtion

// find method will show the output whose has first occurence for e.g.
// input = find['game', 'tige]
//  output = game 
const myArry = ["tiger", "lion", "vikas", "game", "list", "Giraffe"];

// console.log(myArry.length === 4)
// function islength(str) { return str.length === 4 }

// console.log(myArry.find(islength));
// const len = len => {
//     return len.length === 4;
// }
// let findlst = ["lion", "tige"];

// console.log(myArry.find((str) => str.length === findlst.slice(0)));
// console.log(findlst[0])

// real e.g

const usr = [
    { id: 1, usrName: "gamer" },
    { id: 2, usrName: "tiger" },
    { id: 3, usrName: "lion" },
    { id: 4, usrName: "elepant" },
];

console.log(usr.find((user) =>  user.id === 1 ));