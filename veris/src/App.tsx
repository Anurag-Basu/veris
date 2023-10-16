import "./App.css";
import { Header, Sidebar } from "./components";

function App() {
  return (
    <div className="flex veris-main-page-container ">
      <Sidebar />
      <div className="content-container">
        <Header />
      </div>
    </div>
  );
}

export default App;
