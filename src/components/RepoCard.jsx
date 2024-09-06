import React from 'react'

const RepoCard = ({repo}) => {
  return (
    <div>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <a href={repo.html_url}>
            View Repo
        </a>
    </div>
  )
}

export default RepoCard