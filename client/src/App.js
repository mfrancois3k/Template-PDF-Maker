
import Services from './Services/api-call';
import './App.css';
import '@progress/kendo-theme-material/dist/all.css';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import ExportExample from './components/ExportExample';
import LayoutSample from './components/LayoutSample';
import GridExport from './components/GridExport';
import TreeListExport from './components/TreeListExport';
import NavigationContainer from './components/NavigationContainer';
import './App.css';

const PdfComponent = function() {
  return <div className="App">
    <header className="App-header">
      <h1>Welcome to the API</h1>
      <Services />
    </header>
  </div>;
};

function App() {
  const location = useLocation();

  return (
    <>
    <PdfComponent />
    <BrowserRouter >
    <NavigationContainer>
      <div className="page-containter">
        <Routes>
          <Route exact path="/" element={ExportExample} />
          <Route path="/LayoutSample" element={LayoutSample} />
          <Route path="/GridExport" element={GridExport} />
          <Route path="/TreeListExport" element={TreeListExport} />
        </Routes>
      </div>
    </NavigationContainer>
  </BrowserRouter>
  </>
  );
}

export default App;
