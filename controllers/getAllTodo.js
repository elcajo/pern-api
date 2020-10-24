const handleGetAllTodo = (db) => (req, res) => {
	const { description } =req.body;

	db.select('*')
	.from('todo')
	.then(todo => {
		if(todo.length){
			console.log(todo);
			res.json(todo)
			}
	})
	.catch(err => res.status(400).json('unable to update entriessss')) 
}

	/*
.then(todo => {
		console.log(todo);
		res.json(todo[0])
		})
		.then(db.commit).catch(db.rollback)
	-----
	*/


module.exports = {
	handleGetAllTodo: handleGetAllTodo
}