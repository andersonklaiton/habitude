import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import GlovalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <GlovalStyle />
      <Routes />
    </>
  );
}

export default App;
