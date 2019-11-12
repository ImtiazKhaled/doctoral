const app = require('express')()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cred = require('./.credentials.js').cred
const url = require('url')

const port = 9875

app.use(bodyParser.json())

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","GET, POST, DELETE, PATCH");
	next();
});

//console.log('cred = ', cred)

var connection = mysql.createConnection(cred)
connection.connect(err => {
	if(err)
		console.log('THERE WAS AN ERROR: ',err)
	else
		console.log('SUCCESSFULLY connected to mysql')
});

app.listen(port, () => {
    console.log("server started on port", port)
})

<<<<<<< HEAD
//insert phdstudent richard white
app.post('/student', (req, res) => {
	console.log('got a post request')
=======
console.log('this happened')

app.post('/students', (req, res) => {
>>>>>>> a3172ecc444d7d7fb9c65f0302b9e373edd7cd75
	const student = req.body
	let id = student.FName[0] + student.LName[1] + student.StSem;
	insertq = `INSERT INTO PHDSTUDENT VALUES("${id}", "${student.FName}", "${student.LName}", "${student.StSem}", "${student.StYear}", "${student.Supervisor}");`
	console.log(insertq);
	connection.query(insertq, (error, results, fields) => {
		if(error){
			console.log('SQL ERROR', error)
			res.send('error')
			return;
		}
	});

	insertq2 = `INSERT INTO ${student.Type} VALUES("${id}");`
	console.log(insertq);
	connection.query(insertq2, (error, results, fields) => {
		if(error){
			console.log('SQL ERROR', error)
			res.send('error')
			return;
		}
	});
<<<<<<< HEAD
	res.send('success')
=======
	

    res.send("hello")
>>>>>>> a3172ecc444d7d7fb9c65f0302b9e373edd7cd75
})

app.delete('/student', (req, res) => {
	const student = req.body
	console.log(student)
	deleteq = `DELETE FROM PHDSTUDENT WHERE FName = "${student.FName}" AND LName = "${student.LName}"`
	console.log(deleteq);
	connection.query(deleteq, (error, results, fields) => {
		if(error){
			console.log('SQL ERROR', error)
			res.send('error')
			return;
		}
	});

<<<<<<< HEAD
	res.send('success')
=======
    res.send("hello")
>>>>>>> a3172ecc444d7d7fb9c65f0302b9e373edd7cd75
})

app.patch('/instructor', (req, res) => {
	const instructor = req.body
	console.log(instructor)
	updateq = `UPDATE INSTRUCTOR SET Type = '${instructor.ToType}' WHERE InstructorId = '${instructor.InstructorId}' AND Type = '${instructor.FromType}'`
	console.log(updateq);
	connection.query(updateq, (error, results, fields) => {
		if(error){
			console.log('SQL ERROR', error)
			res.send('error')
			return;
		}
	});
<<<<<<< HEAD
	res.send('success')
=======

    res.send("hello")
>>>>>>> a3172ecc444d7d7fb9c65f0302b9e373edd7cd75
})

app.get('/student', (req, res) => {
	const StudentId = url.parse(req.url).query;
	updateq = `SELECT * FROM PHDSTUDENT NATURAL JOIN MILESTONESPASSED WHERE StudentId = '${StudentId}';`
	console.log(updateq);
	connection.query(updateq, (error, results, fields) => {
		if(error){
			console.log('SQL ERROR', error)
			res.send('error')
			return;
		}
		res.send(results)
	});

})

<<<<<<< HEAD
app.get('/students', (req, res) => {
	//const StudentId = url.parse(req.url).query;
	//console.log(student)
	selectq = `SELECT CONCAT(StudentId, MId) AS 'key', StudentId, FName, LName, StSem, StYear, Supervisor, MId, PassDate  FROM PHDSTUDENT NATURAL JOIN MILESTONESPASSED`
	console.log(selectq);
	connection.query(selectq, (error, results, fields) => {
		if(error){
			console.log('SQL ERROR', error)
			res.send('error')
			return;
		}
		res.send(results)
	});

})

app.get('/instructors', (req, res) => {
	//const StudentId = url.parse(req.url).query;
	//console.log(student)
	selectq = `SELECT * FROM INSTRUCTOR`
	console.log(selectq);
	connection.query(selectq, (error, results, fields) => {
		if(error){
			console.log('SQL ERROR', error)
			res.send('error')
			return;
		}
		res.send(results)
	});

})

app.get('/teachers', (req, res) => {
	selectq = `SELECT DISTINCT InstructorId, FName, LName FROM INSTRUCTOR NATURAL JOIN COURSESTAUGHT`
	console.log(selectq);
	connection.query(selectq, (error, results, fields) => {
		if(error){
			console.log('SQL ERROR', error)
			res.send('error')
			return;
		}
		res.send(results)
	});
});















=======
>>>>>>> a3172ecc444d7d7fb9c65f0302b9e373edd7cd75
