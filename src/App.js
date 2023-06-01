import './App.css';
import Home from './components/Home';
import { autoReset as ResetHistoyWhenEachMonthBegins } from './database/ResetDatabase';

function App() {
  ResetHistoyWhenEachMonthBegins()
  return (
    <div className="App bg-slate-950 text-slate-100 w-full select-none">
      <Home/>
    </div>
  );
}

export default App;
