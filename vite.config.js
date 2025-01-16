import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/warranty/', // GitHub Pages 리포지토리 이름과 동일
  plugins: [react()],
  build: {
    outDir: 'build', // 빌드 결과를 'build' 폴더에 생성
  },
});