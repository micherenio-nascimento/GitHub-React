import { useState } from 'react';
import {fetchRepos} from '../services/githubapi';
import RepoCard from '../components/RepoCard';

const Home = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchRepos(username);
      setRepos(data);
    } catch (err) {
      setError('Erro ao buscar repositórios');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        placeholder="Digite o username do GitHub" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <div>
        {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};

export default Home;