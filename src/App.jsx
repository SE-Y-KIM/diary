import "./App.css";
import MainView from "./components/MainView";
// eslint-disable-next-line no-unused-vars
import HistoryView from "./components/HistoryView";

function App() {
  const [view, setView] = useState('main'); //'history'

  return (
    <div className="container">
      {view === 'main' && <mainView setView={setView}/>}
      {view === 'history' && <HistoryView setView={setView}/>}
    </div>
  );
}

export default App;
