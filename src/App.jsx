import { useState } from 'react';
import './App.css';
import Open from './open';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Photo from './photo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로에서 Open 컴포넌트 렌더링 */}
        <Route path="/" element={<Open />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;