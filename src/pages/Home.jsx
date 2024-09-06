import { useState } from 'react';
import { fetchRepos } from '../services/githubapi';
import RepoCard from '../components/RepoCard';

const Home = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white p-4">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Digite o username do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded transition-colors duration-300"
        >
          Buscar
        </button>

        {loading && <p className="mt-4 text-center">Carregando...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

        <div className="mt-4 space-y-4">
          {repos.map(repo => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
