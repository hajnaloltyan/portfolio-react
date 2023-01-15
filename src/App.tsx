import { FC } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Work } from './components/Work';

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};
