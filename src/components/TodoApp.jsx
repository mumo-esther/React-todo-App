import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import NotMatch from '@/pages/NotMatch';
import Layout from '@/components/Layout';
import SinglePage from '@/pages/SinglePage';

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
