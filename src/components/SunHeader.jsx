
// SunHeader component definition
const SunHeader = () => {
    return (
      // Header section with flex layout, padding, and styling
      <section className="flex flex-col gap-4 py-4 md:flex-row h-16 items-center justify-between px-4">
        {/* Left section with Dashboard title and Add New button */}
        <div className="flex items-center gap-12">
          <p className="cursor-pointer font-medium">Dashboard</p>
          <div className="h-7 border-r"></div>
          <button className="rounded-lg bg-[#FFF4DE] px-3 py-2 font-medium text-[#FFA800]">
            Add New
          </button>
        </div>
  
        {/* Right section with filter buttons and action button */}
        <div className="flex items-center gap-5 text-[#959CB6]">
          <button className="rounded-lg bg-[#F3F6F9] px-3 py-2 text-[#6993FF]">
            Today
          </button>
          <button className="px-3 py-2">Month</button>
          <button className="px-3 py-2">Year</button>
          <button className="rounded-lg bg-[#F3F6F9] px-3 py-2">Actions</button>
          
          {/* Plus button with custom styling */}
          <button
            className="h-8 w-6 rounded-sm bg-[#D7F9EF] text-xl text-[#0ABB87]"
            style={{
              clipPath:
                "polygon(0 0, 50% 0, 100% 25%, 100% 100%, 0 100%, 0% 50%)",
            }}
          >
            +
          </button>
        </div>
      </section>
    );
  };
  
  // Exporting the SunHeader component
  export default SunHeader;
  