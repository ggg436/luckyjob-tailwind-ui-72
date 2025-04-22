
import { Job } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className={`rounded-2xl overflow-hidden border border-gray-100 shadow-sm ${job.color}`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">{job.date}</span>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm text-gray-600">{job.company}</p>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${job.logoColor} bg-white`}>
            {/* Company icon placeholder */}
            <div className="w-6 h-6 bg-current rounded-full" />
          </div>
        </div>

        {job.badge && (
          <div className="absolute top-6 right-6 bg-black text-white text-xs rounded-full px-2 py-1">
            {job.badge}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 my-4">
          {job.skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-xs bg-white px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="font-bold">{job.salary}</p>
            <p className="text-sm text-gray-600">{job.location}</p>
          </div>
          <Button variant="default" className="bg-black text-white hover:bg-gray-800">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
