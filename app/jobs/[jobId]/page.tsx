import JobDetail from '@/app/jobs/[jobId]/JobDetail';
import { getAllJobs } from '@/lib/getAllJobs';
import { getJob } from '@/lib/getJob';
import { IJob, IResponse } from '@/types/jobs';
import { notFound } from 'next/navigation';

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

  if (!job) {
    notFound();
  }

  return <JobDetail job={job} />;
}

export async function generateStaticParams() {
  const jobData = await getAllJobs();

  return jobData.map((job: IResponse) => ({
    jobId: job.id.toString(),
  }));
}
