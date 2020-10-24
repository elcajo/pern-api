const handleCreateTodo = (db) => (req, res) => {
	const { description } =req.body;

	if(!description){
		return res.status(400).json('empty please fill all fields');
	}

	db.insert({
		description: description
		})
		.into('todo')
		.returning('description')
		.then(description => {
		console.log(description);
		res.json(`new entry: ${description[0]}`)
		})
		.then(db.commit).catch(db.rollback)
	.catch(err => res.status(400).json('unable to update entriessss')) 
}

module.exports = {
	handleCreateTodo: handleCreateTodo
}