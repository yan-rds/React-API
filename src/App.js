import react, {Component} from "react";
import "./App.css"
import Landing from "./components/pages/Landing";



class App extends Component {
    render(){
        return(
            <div className="App">
                <Landing/>
            </div>
        );
    }
}

export default App