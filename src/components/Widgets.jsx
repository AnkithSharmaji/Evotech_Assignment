// Importing individual widget components
import Widget1 from "./Widget1";
import Widget2 from "./Widget2";
import Widget3 from "./Widget3";
import Widget4 from "./Widget4";

// Functional component to render a section with multiple widgets
const Widgets = () => {
  return (
    <section>
      {/* Main section containing Widget1 and Widget2 */}
      <section>
        {/* Container with flex layout for Widget1 and Widget2 */}
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 p-4 md:h-80 md:flex-row md:p-0">
          {/* Container for Widget1 */}
          <div className="h-full flex-1 bg-white rounded-xl">
            <Widget1 />
          </div>
          {/* Container for Widget2 */}
          <div className="h-full flex-1 rounded-xl bg-white">
            <Widget2 />
          </div>
        </div>
      </section>

      {/* Rendering Widget3 and Widget4 outside the flex container */}
      <Widget3 />
      <Widget4 />
    </section>
  );
};

// Exporting the Widgets component as the default export
export default Widgets;
