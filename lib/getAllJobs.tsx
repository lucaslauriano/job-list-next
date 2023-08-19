import { config } from 'process';

const baseUrl = process.env.REACT_APP_SERVICE_BASE_URL as RequestInfo | URL;
export async function getAllJobs() {
  const res = await fetch(baseUrl);

  if (!res.ok) throw new Error('Failed to fetch jobs');

  return res.json();
}
