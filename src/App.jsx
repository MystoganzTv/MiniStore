import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <main className="min-h-screen max-w-7xl m-auto p-10">
      <Header />
      <AllRoutes />
      <Footer />
    </main>
  );
}

export default App;
