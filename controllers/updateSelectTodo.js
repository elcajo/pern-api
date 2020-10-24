const handleUpdateSelectTodo = (db) => (req, res) => {
	const { todo_id } =req.params;
	const { description } =req.body;

	db.select('description').from('todo').where({todo_id}).update({ description: description })
	.returning('description')
	.then(todo => {
		console.log(`the description of todo_id: ${todo_id} was updated into ${todo}`)
		res.json(`the description of todo_id: ${todo_id} was updated into ${todo}`)
		})
		.then(db.commit).catch(db.rollback)
	

	

	/*
.then(todo => {
		console.log(todo);
		res.json(todo[0])
		})
		.then(db.commit).catch(db.rollback)
	-----
	*/




	.catch(err => res.status(400).json('unable to update entries')) 
}

module.exports = {
	handleUpdateSelectTodo: handleUpdateSelectTodo
}