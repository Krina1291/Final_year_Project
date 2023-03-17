import { Navbar, Welcome, Footer, Services, Transactions,AvailableOptions } from "./components";
//import CustomizedTables from "./components/AvailableOptions";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
      <AvailableOptions />
    </div>
    <Services />
    {/* <Transactions /> */}
    {/*<CustomizedTables />*/}
    <Footer />
  </div>
);

export default App;
