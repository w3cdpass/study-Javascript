// nested Destructuring

const users = [
    { userID: 1, firstName: "GamerXpro", gender: "hyena" },
    { userID: 2, firstName: "OperationMine", gender: "AloneWolf" },
    { userID: 3, firstName: "hinpe", gender: "higerProp" },
    { userID: 4, firstName: "Lopned", gender: "ninePi" },
    { userID: 5, firstName: "Zingk", gender: "mnb" },
]

const [{ firstName }, , { gender }] = users;
console.log()