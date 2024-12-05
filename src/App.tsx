import React from 'react';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { ShibaCompanion } from './components/ShibaCompanion';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Timeline />
      <ShibaCompanion />
    </div>
  );
}

export default App;