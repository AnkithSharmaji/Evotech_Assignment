// Importing images for the tabs
import Library from "../assets/Library.png";
import shield from "../assets/Shield-check.png";
import equalizer from "../assets/Equalizer.png";
import movie from "../assets/movie.png";
import layout from "../assets/Layout-4-blocks.png";

// Tabs component for displaying different sections
const Tabs = () => {
  return (
    <section>
      {/* Container for the tabs with responsive styling */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-evenly gap-4 py-16 font-semibold text-[#B5B5C3] md:justify-between md:py-8 md:text-lg">
        
        {/* SaaS Application Tab */}
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white md:h-48 md:w-52">
          <img src={Library} alt="library" className="h-20 w-24" />
          <p className="w-24 text-center">SaaS Application</p>
        </div>
        
        {/* Main Categories Tab */}
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white md:h-48 md:w-52">
          <img src={layout} alt="library" className="h-20 w-24" />
          <p className="w-24 text-center">Main Categories</p>
        </div>
        
        {/* Video Tutorials Tab */}
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-[#50CD89] md:h-48 md:w-52">
          <img src={movie} alt="library" className="h-20 w-24" />
          <p className="w-24 text-center text-white">Video Tutorials</p>
        </div>
        
        {/* Sales Statistics Tab */}
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white md:h-48 md:w-52">
          <img src={equalizer} alt="library" className="h-20 w-24" />
          <p className="w-24 text-center">Sales Statistics</p>
        </div>
        
        {/* ARC Security Tab */}
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white md:h-48 md:w-52">
          <img src={shield} alt="library" className="h-20 w-24" />
          <p className="w-24 text-center">ARC Security</p>
        </div>
      
      </div>
    </section>
  );
};

// Exporting the Tabs component
export default Tabs;
