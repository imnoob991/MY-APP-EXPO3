import { AppProvider } from './Context/AppContext';
import AppRouter from './router'; 

export default function App() {
  return (
    <AppProvider> 
      <AppRouter /> 
    </AppProvider>
  );
}