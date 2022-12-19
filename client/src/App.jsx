import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import CustomizedTables from "./components/AvailableOptions";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    {/* <Transactions /> */}
    <CustomizedTables />
    <Footer />
  </div>
);

export default App;
