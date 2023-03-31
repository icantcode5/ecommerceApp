const client = require("../config/database")

module.exports = {
	getUsers: async (request, response) => {
		try {
			// const getUsersQuery = `SELECT * FROM users`
			//Returns an object full of many properties, we want the data from our users table which is in the "rows" property. Our users come in an array.
			// const users = await client.query(getUsersQuery)

			response.send("hello from backend!!!")
		} catch (err) {
			console.log(err)
		}
	},
}

// //Insert new user row
// app.post("/users", (req, res) => {
// 	const user = req.body
// 	let insertQuery = `insert into users(id, firstname, lastname,  loggedin)
//     values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.loggedin}')`

// 	client.query(insertQuery, (err, result) => {
// 		if (!err) {
// 			res.send("Insertion was successful")
// 		} else {
// 			console.log(err.message)
// 		}
// 	})
// 	client.end
// })

// //update current user
// app.put("/users/:id", (req, res) => {
// 	let user = req.body
// 	let updateQuery = `update users
//                      set firstname = '${user.firstname}',
//                      lastname = '${user.lastname}',
//                      location = '${user.location}'
//                      where id = ${user.id}`

// 	client.query(updateQuery, (err, result) => {
// 		if (!err) {
// 			res.send("Update was successful")
// 		} else {
// 			console.log(err.message)
// 		}
// 	})
// 	client.end
// })

// //DELETE a user
// app.delete("/users/:id", (req, res) => {
// 	let insertQuery = `delete from users where id=${req.params.id}`

// 	client.query(insertQuery, (err, result) => {
// 		if (!err) {
// 			res.send("Deletion was successful")
// 		} else {
// 			console.log(err.message)
// 		}
// 	})
// 	client.end
// })
