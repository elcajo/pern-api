const handleGetSelectTodo = (db) => (req, res) => {
	const { todo_id } =req.params;

	db.select('todo_id', 'description').from('todo').where({todo_id})
	.then(todoSel => {
		if(todoSel.length){
			console.log(todoSel)
			res.json(todoSel[0]);
			// res.json(`${todoSel[0]} with entry of ${description} was selected`);
		} else { res.status(404).json('Not Found') }
	})
	.catch(err => res.status(400).json('unable to update entries')) 
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
	handleGetSelectTodo: handleGetSelectTodo
}