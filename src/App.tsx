import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import Navigator from "./routes";
function App() {
  return (
    <BrowserRouter>
    <Navigator/>
    <Toaster />
    </BrowserRouter>
    
  )
}

export default App
