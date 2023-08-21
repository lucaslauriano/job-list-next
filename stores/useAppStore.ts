import { getAllJobs } from '@/lib/getAllJobs';
import { IResponse } from '@/types/jobs';
import { StateCreator, create } from 'zustand';

export interface JobsStores {
  jobs: IResponse[];
  fetchJobs: () => void;
}
export const createJobsSlice: StateCreator<JobsStores> = (set) => ({
  jobs: [] as IResponse[],
  fetchJobs: async () => {
    const jobs = await getAllJobs();
    set({ jobs });
  },
});

export const useAppStore = create<JobsStores>()((...a) => ({
  ...createJobsSlice(...a),
}));
