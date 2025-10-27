import Router from "./Router";
import "./App.scss"
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "shared/model";
import AppInitializer from "./AppInitializer";
import ThemeProvider from "./ThemeProvider"


function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <AppInitializer>
                    <Router />

                    <Toaster />
                </AppInitializer>
            </ThemeProvider>
        </Provider> 
    )
}


export default App;
