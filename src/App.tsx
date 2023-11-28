import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Pages from "./router/router";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Pages />
        <Footer />
      </div>
    </BrowserRouter>
)
}


export default App
