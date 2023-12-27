// Importing the FaChevronDown icon from the react-icons/fa6 package
import { FaChevronDown } from "react-icons/fa6";

// Functional component named Widget1
const Widget1 = () => {
  return (
    // Section container
    <section>
      {/* Container with rounded corners */}
      <div className="h-full rounded-xl">
        {/* Inner container with flex layout, rounded corners, background color, and padding */}
        <div className="flex h-64 justify-between rounded-xl bg-[#F64E60] p-6">
          {/* Text element with white color and font-semibold style */}
          <p className="font-semibold text-white">Categories</p>
          
          {/* Button with flex layout, cursor pointer, background color, padding, rounded corners, and text color */}
          <button className="flex cursor-pointer gap-2 bg-red-400 px-4 py-2 rounded-lg text-white h-fit">
            {/* Text element with small size and font-semibold style */}
            <p className="text-xs font-semibold">Export</p>
            
            {/* Icon component for a chevron-down */}
            <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

// Exporting the Widget1 component as the default export
export default Widget1;
