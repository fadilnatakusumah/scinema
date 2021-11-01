import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">Hello World</div>
    </Provider>
  );
}

export default App;
