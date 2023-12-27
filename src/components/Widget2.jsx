// Importing the GoDotFill icon from the react-icons library
import { GoDotFill } from "react-icons/go";
// Importing the widget2 data from the specified path
import { widget2 } from "../constants/widget2.js";

// Functional component definition for Widget2
const Widget2 = () => {
  return (
    <section>
      {/* Container for the widget content with styling */}
      <div className="flex flex-col gap-6 p-8">
        {/* Header section with title and dots */}
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">Sales Progress</h3>
          <div className="flex gap-0">
            {/* Two dots representing some status, styled with color and opacity */}
            <GoDotFill className="h-3 text-[#B5B5C3] opacity-70" />
            <GoDotFill className="h-3 text-[#B5B5C3]" />
          </div>
        </div>
        {/* Main content section with dynamic data */}
        <div className="flex flex-col gap-4">
          {/* Mapping through widget2 array to display dynamic content */}
          {widget2.map((color, index) => {
            return (
              // Each item in the array represented as a colored box and text
              <div className="flex gap-2" key={index}>
                {/* Colored box with dynamic background color */}
                <div className={`h-10 w-10 rounded-xl bg-${color}`}></div>
                {/* Text information related to the colored box */}
                <div className="flex flex-col">
                  <p className="text-sm font-medium">Briviba Saas</p>
                  <p className="text-xs font-medium text-[#B5B5C3]">
                    PHP, SQLite, Artisan Climm
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Exporting the Widget2 component as the default export
export default Widget2;
