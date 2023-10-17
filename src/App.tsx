import "./App.css";
import { Header, Main, Sidebar } from "./components";

function App() {
  return (
    <div className="flex veris-main-page-container ">
      <Sidebar />
      <div className="content-container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
