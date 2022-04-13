import { useContext, useState } from "react"
import { AlertContext } from '../context/alert/alertContext'
import { githubContext } from "../context/github/githubContext"

export const Search = () => {
	const {show, hide} = useContext(AlertContext)

	const [toggle, setToggle] = useState(false)
	
	// const [state, setState] = useState(toggle)

	const github = useContext(githubContext)
	const [value, setValue] = useState('')
	const onSubmit = event => {
		if (event.key !== 'Enter') {
			return
		}
		github.clearUsers()
		if (value.trim()) {
			hide()
			github.search(value.trim())
		} else {
			show('Enter data...')
			setToggle(true)
		}
		
	}
	return (
		<div className="form-group">
			<input 
				type="text" 
				className="form-control" 
				placeholder="Enter nickname"
				onKeyPress={onSubmit}
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
		</div>
	)
}