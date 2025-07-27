import { Providers } from "./context/providers";
import Router from "./Router";
import "./App.scss"


function App() {
    return (
        <Providers>
            <Router />
        </Providers>
    )
}


export default App;
