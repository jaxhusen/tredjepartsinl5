// setup sqlite
const sqlite = require("sqlite3")

const db = new sqlite.Database("database.db")



// create the database tables if they dont exist
db.run(`
    CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY,
        username TEXT,
        hashedPassword TEXT,
        CONSTRAINT uniqueUsername UNIQUE(username)
    )
    `),

/*     (`
    CREATE TABLE IF NOT EXISTS cars (
        id INTEGER PRIMARY KEY,
        make TEXT,
        model TEXT,
    )
`) */


// save accounts/cars in database
module.exports.registerUser = (username, hashedPassword, callback) => {
    const query = `
    INSERT INTO accounts
        (username, hashedPassword)
    VALUES
        (?, ?)
        `

    const values = [
        username,
        hashedPassword
    ]
    db.run(query, values, callback)
}

/* module.exports.registerCars = (make, model, callback) => {
    const query = `
    INSERT INTO cars
    (make, model)
    VALUES
    (?, ?)
    `

    const values = [
        make,
        model
    ]
    db.run(query, values, callback)
} */


//get accounts/cars from database
exports.getAccountByUsername = function (username, callback) {
    const query = `
    SELECT * FROM accounts WHERE username = ?`
    const values = [username]

    db.get(query, values, callback)
}


/* exports.getCars = function (id, callback) {
    const query = `
    SELECT * FROM cars WHERE id = ?`
    const values = [id]

    db.get(query, values, callback)
} */





/* 
db.run(`
    CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY,
        username TEXT,
        hashedPassword TEXT,
        CONSTRAINT uniqueUsername UNIQUE(username)
    )
`),
(`
CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY,
    make TEXT,
    model TEXT,
    )
`)
*/