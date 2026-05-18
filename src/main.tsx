import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './global.css.ts';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProjectForm from './pages/ProjectForm';
import ProjectDetail from './pages/ProjectDetail/index.tsx';
import Landing from './pages/Landing/index.tsx';
import List from './pages/List/index.tsx';
import { ensureAnonymousSession } from './lib/auth';

const rootEl = document.getElementById('root')!;

ensureAnonymousSession()
  .then(() => {
    createRoot(rootEl).render(
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/folist' element={<List />} />
            <Route path='/createfo' element={<ProjectForm />} />
            <Route path='/editfo' element={<ProjectForm />} />
            <Route path='/myfo/:foid' element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>,
    );
  })
  .catch((err) => {
    console.error('[ensureAnonymousSession error]', err);
    createRoot(rootEl).render(
      <div style={{ padding: 24, textAlign: 'center', color: '#9b4b4b' }}>
        <p>앱을 시작하지 못했습니다. 잠시 후 다시 시도해주세요.</p>
      </div>,
    );
  });
