import React from 'react'

export default function Task({
	task: { id, title, state },
	onArchiveTask,
	onPinTask,
}) {
	return (
		<div clasName='list-item'>
			<label htmlFor='title' aria-label={title}>
				<input type='text' name='title' readOnly={true} value={title} />
			</label>
		</div>
	)
}
