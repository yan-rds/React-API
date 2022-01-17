import react, {Component} from "react";
import "./App.css"
import Login from "./components/pages/Login";


class App extends Component {
    render(){
        return(
            <div className="App">
                <Login/>
            </div>
        );
    }
}

export default App