import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Repos } from '../components/Repos'
import { githubContext } from '../context/github/githubContext'


export const Profile = () => {
	const {getUser, getRepos, loading, user, repos} = useContext(githubContext)
	const nameID = useParams().name

	useEffect(() => {
		getUser(nameID)
		getRepos(nameID)
		// eslint-disable-next-line
	},[])

	if (loading) {
		return <p className='text-center'>Loading...</p>
	} 
	const {
		name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists
	} = user
	return(
		<>
			<Link to='/' className='btn btn-link'>Go Home</Link>
			<div className="card mb-4">
				<div className="card-body">
					<div className="row">
						<div className="col-sm-3 text-center">
							<img src={avatar_url} alt={name} style={{width:'150px'}}/>
							<h1>{name}</h1>
							{location && <p>Location: {location}</p>}
						</div>
						<div className="col">
							{
								bio && 
								<>
									<p>{bio}</p>
									
								</> 
							}
							<a href={html_url} className='btn btn-dark' target='_blank' rel='noreferrer'>Open Profile</a>
							<ul>
								{
									login &&
									<li>
										<strong>Username: </strong>{login}
									</li>
								}
								{
									company &&
									<li>
										<strong>Company: </strong>{company}
									</li>
								}
								{
									blog &&
									<li>
										<strong>Website: </strong>{blog}
									</li>
								}
							</ul>
							{followers && <div className="badge badge-primary">Follows: {followers}</div>}
							{following && <div className="badge badge-success">Following: {following}</div>}
							{public_repos && <div className="badge badge-info">Repos: {public_repos}</div>}
							{public_gists && <div className="badge badge-dark">Gists: {public_gists}</div>}
						</div>	
					</div>
				</div>
			</div>
			<Repos repos={repos}/>
		</>
	)
}