import { Navigation } from "./Navigation";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="contents">
        <Navigation />
      </div>

      <div className="footer_container">
        <h3>푸터푸터</h3>
      </div>
    </BrowserRouter>
  );
};
export default App;
