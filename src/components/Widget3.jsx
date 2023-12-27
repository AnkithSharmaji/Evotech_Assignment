// Importing icons from react-icons library
import { BsToggles } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// Importing data for Widget3
import widget3 from "../constants/widget3";

// Functional component for Widget3
const Widget3 = () => {
  return (
    <section>
      {/* Container for the widget */}
      <div className="mx-auto my-6 flex max-w-7xl flex-col gap-4 rounded-xl bg-white pb-6">
        {/* Header section with title and time filter buttons */}
        <div className="flex justify-between p-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">New Arrivals</h3>
            <p className="text-xs text-[#B5B5C3]">More than 400+ new members</p>
          </div>
          <div className="flex items-center">
            {/* Time filter buttons */}
            <button className="rounded-xl p-3 text-xs font-semibold text-[#B5B5C3] hover:bg-[#464E5F] hover:text-white">
              Month
            </button>
            <button className="rounded-xl p-3 text-xs font-semibold text-[#B5B5C3] hover:bg-[#464E5F] hover:text-white">
              Week
            </button>
            <button className="rounded-xl bg-[#464E5F] p-3 text-xs font-semibold text-white">
              Day
            </button>
          </div>
        </div>
        {/* Main content section with data from widget3 */}
        <div className="flex flex-col gap-10 md:gap-4">
          {widget3.map((item, idx) => {
            return (
              <div
                className="flex w-full flex-wrap items-center gap-4 px-6"
                key={idx}
              >
                {/* Thumbnail */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F3F6F9]">
                  <img src={item.thumbnail} alt="plurk" className="h-7 w-7" />
                </div>
                {/* Title and FTP information */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-semibold text-[#464E5F]">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#464E5F]">
                    FTP:{" "}
                    <span className="font-medium text-[#B5B5C3]">
                      {item.ftp}
                    </span>
                  </p>
                </div>
                {/* Money and payment status */}
                <div className="ml-auto flex flex-col gap-1">
                  <p className="text-sm font-semibold text-[#464E5F]">
                    ${item.money}
                  </p>
                  <p className="text-sm font-medium text-[#B5B5C3]">Paid</p>
                </div>
                {/* Status indicator */}
                <div
                  className={`rounded-lg bg-[#${item.statusBg}] p-2 text-xs font-medium text-[#${item.statusColor}] md:mx-8`}
                >
                  {item.status}
                </div>
                {/* Action buttons */}
                <div className="flex items-center gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F6F9]">
                    <BsToggles className="h-5 w-5 text-[#3699FF]" />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F6F9]">
                    <FaEdit className="h-5 w-5 text-[#3699FF]" />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F6F9]">
                    <MdDelete className="h-5 w-5 text-[#3699FF]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Exporting Widget3 component as the default export
export default Widget3;
