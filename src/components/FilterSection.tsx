
import { Filter } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const FilterSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Filter className="w-4 h-4 text-gray-500" />
      </div>

      <div className="mb-6">
        <h4 className="text-sm text-gray-500 mb-3">Working schedule</h4>
        <div className="space-y-2">
          {['Full time', 'Part time', 'Internship', 'Project work', 'Volunteering'].map((schedule) => (
            <div key={schedule} className="flex items-center">
              <Checkbox id={schedule.toLowerCase().replace(" ", "-")} className="mr-2" />
              <label htmlFor={schedule.toLowerCase().replace(" ", "-")} className="text-sm">{schedule}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm text-gray-500 mb-3">Employment type</h4>
        <div className="space-y-2">
          {['Full day', 'Flexible schedule', 'Shift work', 'Distant work', 'Shift method'].map((type) => (
            <div key={type} className="flex items-center">
              <Checkbox id={type.toLowerCase().replace(" ", "-")} className="mr-2" />
              <label htmlFor={type.toLowerCase().replace(" ", "-")} className="text-sm">{type}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
