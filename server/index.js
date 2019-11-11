const app = require('express')()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cred = require('./.credentials.js').cred
const QUERY = 'SELECT * FROM PHDSTUDENT'
const url = require('url')
app.use(bodyParser.json())

console.log('cred = ', cred)

var connection = mysql.createConnection(cred)
connection.connect(err => {
	if(err)
		console.log('THERE WAS AN ERROR: ',err)
	else
		console.log('SUCCESSFULLY connected to mysql')
//	connection.query(QUERY, (error, results, fields) => {
//		if(error)
//			console.log("error")
//		console.log('the solution is', results)
//	});

});

app.listen(4000, () => {
    console.log("server started on port 4000")
})

console.log('this happened')

//insert phdstudent richard white
app.post('/students', (req, res) => {
	const student = req.body
	insertq = `INSERT INTO PHDSTUDENT VALUES("abcdef", "${student.FName}", "${student.LName}", "${student.StSem}", "${student.StYear}", "AO5671");`
	connection.query(insertq, (error, results, fields) => {
		if(error)
			console.log("error")
		console.log('the solution is', results)
	});

	insertq2 = `INSERT INTO ${student.Type} VALUES("abcdef");`
	connection.query(insertq2, (error, results, fields) => {
		if(error)
			console.log(error)
		console.log('the solution is', results)
	});
	

    res.send("hello")
    //res.status(200).send("world")
})

app.delete('/students', (req, res) => {
	const student = req.body
	console.log(student)
	deleteq = `DELETE FROM PHDSTUDENT WHERE FName = "${student.FName}" AND LName = "${student.LName}"`
	connection.query(deleteq, (error, results, fields) => {
		if(error)
			console.log(error)
		console.log('the solution is', results)
	});

    res.send("hello")
    //res.status(200).send("world")
})

app.patch('/instructor', (req, res) => {
	const instructor = req.body
	console.log(instructor)
	updateq = `UPDATE INSTRUCTOR SET Type = '${instructor.ToType}' WHERE InstructorId = '${instructor.InstructorId}' AND Type = '${instructor.FromType}'`
	connection.query(updateq, (error, results, fields) => {
		if(error)
			console.log(error)
		console.log('the solution is', results)
	});

    res.send("hello")
    //res.status(200).send("world")
})

app.get('/student', (req, res) => {
	const StudentId = url.parse(req.url).query;
	//console.log(student)
	updateq = `SELECT * FROM PHDSTUDENT NATURAL JOIN MILESTONESPASSED WHERE StudentId = '${StudentId}';`
	connection.query(updateq, (error, results, fields) => {
		if(error)
			console.log(error)
		console.log('the solution is', results)
		res.send(results)
	});

    //res.status(200).send("world")
})

//const dataRoutes = require('./routes/students')
//app.use('/', dataRoutes)

