import axios from 'axios';

const API_URL = 'https://api.github.com';

export function getRepos() {
  return axios.get(`${API_URL}/users/Oluwashina-Deborah-Oluwapemi/repos`);
}

export function getRepoDetails(repoName) {
  return axios.get(`${API_URL}/repos/Oluwashina-Deborah-Oluwapemi/${repoName}`);
}