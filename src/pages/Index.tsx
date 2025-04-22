
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, MapPin, Calendar, FileText } from "lucide-react";

const jobs = [
  {
    id: 1,
    date: "19 Feb, 2023",
    company: "Google",
    title: "Senior Data Scientist",
    logo: "google",
    skills: ["Data Analysis", "Machine Learning", "R", "Python", "Statistics"],
    salary: "$290/hr",
    location: "California, CA",
    color: "bg-blue-50",
    logoColor: "text-blue-500"
  },
  {
    id: 2,
    date: "12 May, 2023",
    company: "Microsoft",
    title: "Software Engineer",
    logo: "microsoft",
    skills: ["Programming", "Software Development", "Java", "C++", "Web Development"],
    salary: "$176/hr",
    location: "Redmond, WA",
    color: "bg-pink-50",
    logoColor: "text-pink-500"
  },
  {
    id: 3,
    date: "29 May, 2023",
    company: "Amazon Web Services (AWS)",
    title: "Middle DevOps Engineer",
    logo: "aws",
    skills: ["Cloud Computing", "CI/CD", "Full Dev", "Automation", "Linux", "Docker"],
    salary: "$190/hr",
    location: "Seattle, WA",
    color: "bg-orange-50",
    logoColor: "text-orange-500",
    badge: "80%"
  },
  {
    id: 4,
    date: "11 May, 2023",
    company: "IBM",
    title: "Cybersecurity Analyst",
    logo: "ibm",
    skills: ["Information Security", "Incident", "Network Security", "Penetration Testing"],
    salary: "$140/hr",
    location: "Armonk, NY",
    color: "bg-gray-50",
    logoColor: "text-gray-500"
  },
  {
    id: 5,
    date: "14 Apr, 2023",
    company: "Salesforce",
    title: "Senior Cloud Solutions Architect",
    logo: "salesforce",
    skills: ["Cloud Computing", "AWS", "Azure", "Google Cloud", "Infrastructure Design"],
    salary: "$220/hr",
    location: "San Francisco, CA",
    color: "bg-sky-50",
    logoColor: "text-sky-500"
  },
  {
    id: 6,
    date: "18 Jan, 2023",
    company: "Facebook",
    title: "Senior Full Stack Developer",
    logo: "facebook",
    skills: ["Web Development", "Frontend", "Backend", "JavaScript", "Database"],
    salary: "$110/hr",
    location: "Menlo Park, CA",
    color: "bg-indigo-50",
    logoColor: "text-indigo-500"
  }
];

const Index = () => {
  const [salaryRange, setSalaryRange] = useState([1200, 50000]);
  const [sortBy, setSortBy] = useState("Last updated");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor"/>
              </svg>
              <span className="text-xl font-semibold">LuckyJob</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-gray-300">Find job</a>
              <a href="#" className="hover:text-gray-300">Messages</a>
              <a href="#" className="hover:text-gray-300">Hiring</a>
              <a href="#" className="hover:text-gray-300">Community</a>
              <a href="#" className="hover:text-gray-300">FAQ</a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>New York, NY</span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-pink-500 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-black text-white py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Start typing your job search request" 
                className="w-full bg-gray-900 border-none rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-gray-900 border-0 hover:bg-gray-800">
                <MapPin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-gray-900 border-0 hover:bg-gray-800">
                <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-gray-900 border-0 hover:bg-gray-800">
                <FileText className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Salary Range */}
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span>Salary range</span>
              <span>${salaryRange[0]}-${salaryRange[1]}</span>
            </div>
            <Slider
              defaultValue={salaryRange}
              min={1200}
              max={50000}
              step={100}
              onValueChange={setSalaryRange}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            {/* CTA Card */}
            <div className="rounded-2xl overflow-hidden mb-8 relative">
              <div 
                className="p-6 text-white" 
                style={{
                  background: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
                  minHeight: "200px"
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80" 
                  alt="Background" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2">Get Your best profession</h2>
                  <p className="text-xl font-bold mb-6">with LuckyJob</p>
                  <Button variant="secondary" className="bg-blue-400 hover:bg-blue-500 text-white">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
              </div>

              {/* Working schedule */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-500 mb-3">Working schedule</h4>
                <div className="space-y-2">
                  {["Full time", "Part time", "Internship", "Project work", "Volunteering"].map((schedule) => (
                    <div key={schedule} className="flex items-center">
                      <Checkbox id={schedule.toLowerCase().replace(" ", "-")} className="mr-2" />
                      <label htmlFor={schedule.toLowerCase().replace(" ", "-")} className="text-sm">{schedule}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employment type */}
              <div>
                <h4 className="text-sm text-gray-500 mb-3">Employment type</h4>
                <div className="space-y-2">
                  {["Full day", "Flexible schedule", "Shift work", "Distant work", "Shift method"].map((type) => (
                    <div key={type} className="flex items-center">
                      <Checkbox id={type.toLowerCase().replace(" ", "-")} className="mr-2" />
                      <label htmlFor={type.toLowerCase().replace(" ", "-")} className="text-sm">{type}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Popular jobs</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent pr-8 font-medium focus:outline-none cursor-pointer"
                  >
                    <option>Last updated</option>
                    <option>Salary: High to Low</option>
                    <option>Salary: Low to High</option>
                    <option>Most recent</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <div key={job.id} className={`rounded-2xl overflow-hidden border border-gray-100 shadow-sm ${job.color}`}>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">{job.date}</span>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm text-gray-600">{job.company}</p>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                      </div>
                      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${job.logoColor} bg-white`}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
