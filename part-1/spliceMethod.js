// splice method
// start , delete , insert

// const fillArry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const itemArry = ["item1", "item2", "item3", "item4"];


// for deleting
// let delte = itemArry.splice(1, 4)
// console.log(delte)

// for inserting
// let insert = itemArry.splice(1, 5 , 'Inserted')
// console.log(insert)

// insert and delete


itemArry.splice(1, 2, "inserted lion", "tiger")



console.log(itemArry)