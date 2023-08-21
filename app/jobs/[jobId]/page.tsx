import JobDetail from '@/app/jobs/[jobId]/JobDetail';
import { getJob } from '@/lib/getJob';
import { IJob } from '@/types/jobs';

export async function generateMetadata({
  params,
}: {
  params: { jobId: number };
}) {
  const job: IJob | null = await getJob(params.jobId);
  return {
    title: job?.title,
    description: `This is ${job?.title}`,
  };
}

type Params = {
  params: {
    jobId: number;
  };
};
export default async function JobPage({ params: { jobId } }: Params) {
  const job: IJob | null = await getJob(jobId);
  return <JobDetail job={job} />;
}
