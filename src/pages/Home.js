import { useContext } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { githubContext } from "../context/github/githubContext";
import { CSSTransition } from 'react-transition-group'
import { TransitionGroup } from "react-transition-group";

export const Home = () => {
	// const cards = new Array(15).fill('').map((_, i) => {return i})
	const {loading, users} = useContext(githubContext)
	
	return(
	<>
		<Search/>
		<div className="row">
			<TransitionGroup className='node'>
				{
					loading
						? <p className="text-center">Loading ...</p>
						: users.map(user => (
							<CSSTransition
								key={user.id}
								timeout={2000}
								classNames='node'
								unmountOnExit
							>
								<div className="col-sm-4 mb-4" >
									<>
										<Card user={user}/>
									</>
								</div>
							</CSSTransition>
							)
						)
				}
			</TransitionGroup>
		</div>
	</>
	)
	
}

