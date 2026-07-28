import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
  } else {
    setMode('light');
  }
};
  return (
    <>
      
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
      <TextForm heading="Enter the text to analyse" />
      </div>
      
    </>
  );
}

export default App;