import { AppRoutes } from "./routes"
import { ToastContainer } from "react-toastify"
import { GlobalStyles } from "./globalStyles"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <ToastContainer />
      <AppRoutes /> 
    </div>
  )
}

export default App
