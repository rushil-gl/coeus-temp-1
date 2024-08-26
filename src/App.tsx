import './App.css';
import Header from './components/header/header.component';
import { AuthProvider } from './context/AuthContext';
import RoutesHub from './pages/RoutesHub';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen p-5 bg-white dark:bg-neutral-900">
        <Header />
        <hr />
        <section>
          <RoutesHub />
        </section>
      </div>
    </AuthProvider>
  );
}

export default App;
