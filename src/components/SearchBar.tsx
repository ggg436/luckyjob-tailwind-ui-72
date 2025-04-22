
import React from 'react';
import { Search, MapPin, Calendar, Briefcase, ChevronDown } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface SearchBarProps {
  profession: string;
  setProfession: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  experience: string;
  setExperience: (value: string) => void;
  periodicity: string;
  setPeriodicity: (value: string) => void;
  salaryRange: number[];
  setSalaryRange: (value: number[]) => void;
}

const SearchBar = ({
  profession,
  setProfession,
  location,
  setLocation,
  experience,
  setExperience,
  periodicity,
  setPeriodicity,
  salaryRange,
  setSalaryRange,
}: SearchBarProps) => {
  return (
    <div className="bg-black text-white py-4 px-6 w-full">
      <div className="w-full px-4 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="relative rounded-full bg-gray-900 flex items-center">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full appearance-none bg-transparent border-none rounded-full py-2 pl-10 pr-10 text-white focus:outline-none"
              >
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
                <option>Marketing</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-full bg-gray-900 flex items-center">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none bg-transparent border-none rounded-full py-2 pl-10 pr-10 text-white focus:outline-none"
              >
                <option>Work location</option>
                <option>Remote</option>
                <option>New York</option>
                <option>San Francisco</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-full bg-gray-900 flex items-center">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full appearance-none bg-transparent border-none rounded-full py-2 pl-10 pr-10 text-white focus:outline-none"
              >
                <option>Experience</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-full bg-gray-900 flex items-center">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <select
                value={periodicity}
                onChange={(e) => setPeriodicity(e.target.value)}
                className="w-full appearance-none bg-transparent border-none rounded-full py-2 pl-10 pr-10 text-white focus:outline-none"
              >
                <option>Per month</option>
                <option>Per week</option>
                <option>Per hour</option>
                <option>Per project</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span>Salary range</span>
            <span>${salaryRange[0]}-${salaryRange[1]}</span>
          </div>
          <Slider
            defaultValue={salaryRange}
            min={1200}
            max={2000}
            step={100}
            onValueChange={setSalaryRange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
