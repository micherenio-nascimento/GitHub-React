export const fetchRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('Erro ao buscar repositórios');
  }
  return response.json();
};