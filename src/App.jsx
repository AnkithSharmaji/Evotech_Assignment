// Importing  'useState' from the 'react' library
import { useState } from "react";

// Importing  'Header'  from the specified path
import Header from "./components/Header";

// Importing  'SunHeader'  from the specified path
import SunHeader from "./components/SunHeader.jsx";

// Importing  'MenuContext' from the given path
import { MenuContext } from "./context.js";

// Importing  'Tabs' component from the specified path
import Tabs from "./components/Tabs.jsx";

// Importing the 'Widgets' component from the specified path
import Widgets from "./components/Widgets.jsx";

// Functional component named 'App'
const App = () => {
  // Using the 'useState' hook to create a state variable 'menu' with an initial value of 'false'
  const [menu, setMenu] = useState(false);

  // Returning the JSX structure
  return (
    <>
      { }
      <MenuContext.Provider value={{ menu, setMenu }}>
        { }
        <Header />

        { }
        <SunHeader />

        { }
        <Tabs />

        { }
        <Widgets />
      </MenuContext.Provider>
    </>
  );
};

// Exporting the 'App' component as the default export of this module
export default App;
