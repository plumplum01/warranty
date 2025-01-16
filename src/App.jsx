import { useState } from 'react';
import './App.css';
import Open from './open';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Photo from './photo';

function App() {
  const [count, setCount] = useState(0);

  return (
    // basename 설정 추가: '/warranty'는 GitHub Pages의 리포지토리 이름과 동일하게 설정
    <BrowserRouter basename="/warranty">
      <Routes>
        {/* 기본 경로에서 Open 컴포넌트 렌더링 */}
        <Route path="/" element={<Open />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;