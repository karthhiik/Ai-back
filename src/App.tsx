import {NetworkingHub} from './components/NetworkingHub';
import { APIProvider } from './contexts/APIContext.jsx';
import './index.css';

function App() {
  return (
    <APIProvider>
      <div className="bg-gray-900 text-white min-h-screen p-8">
          <h1 className="text-center text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Baraise Collaboration Zone
          </h1>
          <NetworkingHub />
        </div>
    </APIProvider>
  );
}

export default App;