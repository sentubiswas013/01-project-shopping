// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';

// IMport Components 
import Header from './shared/components/header';

export function App() {
  return (
    <div className="container">
      <Header />
      {/* <NxWelcome title="library" /> */}

    </div>
  );
}

export default App;
