
import { ChevronDown, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JobCard } from '@/components/JobCard';
import { jobsList } from '@/pages/Landing';

interface JobsListProps {
  filter: string;
  setFilter: (value: string) => void;
}

const JobsList = ({ filter, setFilter }: JobsListProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">Recommended jobs</h2>
          <span className="ml-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">387</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <div className="relative">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-transparent pr-8 font-medium focus:outline-none cursor-pointer"
            >
              <option>Last updated</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
              <option>Most recent</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
          <Button variant="ghost" size="icon" className="ml-2">
            <Sliders className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobsList.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
