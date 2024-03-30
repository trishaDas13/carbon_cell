import BooleanContextProvider from "./contextAPI/Context";
import Route from "./route/Route";

function App() {
  return (
    <BooleanContextProvider>
    <div className="App">
     <Route/>
    </div>
    </BooleanContextProvider>
  );
}

export default App;
