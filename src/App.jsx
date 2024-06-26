import { useEffect, useState } from "react"

export default function App() {

  const [repos, setRepos] = useState([])

  useEffect(() => {

    fetch('https://api.github.com/users/micherenio-nascimento/repos')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setRepos(data))

  },[])

  return (
    <>
      <div>
        <ul>
          { repos.map(repo => {
            return (
              <li>
                <h3>{repo.name}</h3>
                <p>{repo.language}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}