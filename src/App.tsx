import { BrowserRouter, Route, Routes } from "react-router-dom"
import { store } from "./store"
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify"
import "./App.css"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import PrivateRoutes from "./utils/privateRoute"




function App() {
  return (
    <div id="app" className="App" >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer limit={3} />
      </Provider>
    </div >
  );
}

export default App;
