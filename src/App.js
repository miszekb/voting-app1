import BottomBar from './components/BottomBar/BottomBar';
import UpperBar from './components/UpperBar/UpperBar';
import Main from './pages/Main/Main';
import styles from './App.module.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vote from './pages/Vote/Vote';
import Voters from './pages/Voters/Voters';
import Candidates from './pages/Candidates/Candidates';
import { useDispatch } from 'react-redux';
import { handleInitialData } from './store/actions/common';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <UpperBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/vote' element={<Vote />} />
          <Route path='/voters' element={<Voters />} />
          <Route path='/candidates' element={<Candidates />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
