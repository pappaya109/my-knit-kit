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

ensureAnonymousSession();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/folist' element={<List />} />
        <Route path='/createfo' element={<ProjectForm />} />
        <Route path='/editfo' element={<ProjectForm />} />
        <Route path='myfo/:foid' element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
