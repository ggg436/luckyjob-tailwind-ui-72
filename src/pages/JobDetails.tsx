
import React from "react";
import { useParams } from "react-router-dom";
import { Building, Star, MapPin, Clock, CheckCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/data/jobs";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6 flex gap-6">
        {/* Left Sidebar - Other Jobs */}
        <div className="w-80 mr-6 flex-shrink-0 hidden lg:block">
          <div className="mb-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search jobs..." 
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>

          {/* Related Jobs */}
          <div className="space-y-4">
            {jobs.filter(j => j.id !== job.id).slice(0, 3).map((relatedJob) => (
              <div key={relatedJob.id} className={`bg-white rounded-lg shadow p-4 border-l-4 ${relatedJob.color.replace('bg-', 'border-')}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className={`w-8 h-8 ${relatedJob.color} ${relatedJob.logoColor} rounded flex items-center justify-center mr-2`}>
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{relatedJob.title}</h3>
                        <p className="text-sm text-gray-500">{relatedJob.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedJob.skills.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="font-medium">{relatedJob.salary}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Posted {relatedJob.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Content - Job Details */}
        <div className="flex-grow bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">About the role</h2>
            <p className="text-gray-700 mb-4">
              Join our team as a {job.title} at {job.company}, where you'll be part of an innovative team working on cutting-edge projects. This is a unique opportunity to make a significant impact while working with the latest technologies.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Lead and contribute to complex technical projects</li>
              <li>Collaborate with cross-functional teams to deliver high-quality solutions</li>
              <li>Mentor and support team members in their professional growth</li>
              <li>Stay current with industry trends and best practices</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Required skills:</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Button className="w-full md:w-auto">
              Apply for this position
            </Button>
          </div>
        </div>

        {/* Right Sidebar - Company Info */}
        <div className="w-80 ml-6 flex-shrink-0 hidden lg:block">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 ${job.color} ${job.logoColor} rounded flex items-center justify-center mr-3`}>
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{job.company}</h3>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="text-sm text-blue-500">Verified</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                <div className="flex items-center text-gray-900">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Posted</h4>
                <div className="flex items-center text-gray-900">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.date}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Rating</h4>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <Button className="w-full">Apply now</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetails;
