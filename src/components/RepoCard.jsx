import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold text-white">{repo.name}</h3>
      <p className="text-sm text-gray-400">{repo.description}</p>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline mt-2 inline-block"
      >
        View Repo
      </a>
    </div>
  );
};

export default RepoCard;