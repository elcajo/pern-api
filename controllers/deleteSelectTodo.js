const handleDeleteSelectTodo = (db) => (req, res) => {
	const { todo_id } =req.params;

	db.select('*').from('todo').where({todo_id}).del()
	.returning('todo_id')
	.then(todo => {
		console.log(`${todo[0]} was deleted`)
		res.json(`${todo[0]} was deleted`)
		})
		.then(db.commit).catch(db.rollback)

/*
.then(description => {
		console.log(description);
		res.json(description[0])
		})
		.then(db.commit).catch(db.rollback)

===
.then(todo => {
		if(todo.length){
			console.log(todo);
			res.json(todo)
			}
	})

*/

.catch(err => res.status(400).json('unable to update entriessss')) 

}
module.exports = {
	handleDeleteSelectTodo: handleDeleteSelectTodo
}