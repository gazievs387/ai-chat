import { Providers } from "./context/providers";
import Router from "./Router";
import "./App.scss"
import { Toaster } from "react-hot-toast";


function App() {
    return (
        <Providers>
            <Router />

            <Toaster />
        </Providers>
    )
}


export default App;
