import { IJob } from '@/types';

const baseUrl = process.env.REACT_APP_SERVICE_BASE_URL as RequestInfo | URL;
function getItemById(array: IJob[], id: number) {
  for (let i = 0; i < array.length; i++) {
    const el: IJob = array[i];

    if (el.id == id) {
      return el;
    }
  }
  return null;
}
export async function getJob(jobId: number): Promise<IJob | null> {
  const res = await fetch(baseUrl);

  if (!res.ok) throw new Error('Failed to fetch job');
  const data = await res.json();
  return getItemById(data, jobId);
}
