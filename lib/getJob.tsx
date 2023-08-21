import { IJob, IResponse } from '@/types/jobs';

const baseUrl = process.env.REACT_APP_SERVICE_BASE_URL as RequestInfo | URL;
export const findById = (data: IResponse[], id: number) => {
  for (let i = 0; i < data.length; i++) {
    const el: IResponse = data[i];

    if (el.id == id) {
      return el;
    }
  }
  return null;
};
export async function getJob(jobId: number): Promise<IJob | null> {
  const res = await fetch(baseUrl);

  if (!res.ok) throw new Error('Failed to fetch job');
  const data = await res.json();
  return findById(data, jobId);
}
