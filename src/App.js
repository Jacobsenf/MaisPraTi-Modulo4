import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import BackgroundChanger from './components/BackgroundChanger';
import CountdownTimer from './components/CountdownTimer';
import DataFetcher from './components/DataFetcher';
import RegisterForm from './components/RegisterForm';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import NameFilter from './components/NameFilter';
import Tabs from './components/Tabs';
import ImageGallery from './components/ImageGallery';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="App">
      <h1>Bem-vindo ao meu app bizarro feito usando React!</h1>
      <div className="tabs-container">
        <Tabs onTabChange={handleTabChange} />
        <div className="tab-content">
          {selectedTab === 0 && <Counter />}
          {selectedTab === 1 && <BackgroundChanger />}
          {selectedTab === 2 && <CountdownTimer />}
          {selectedTab === 3 && <DataFetcher />}
          {selectedTab === 4 && <RegisterForm />}
          {selectedTab === 5 && <TodoList />}
          {selectedTab === 6 && <Timer />}
          {selectedTab === 7 && <NameFilter />}
          {selectedTab === 8 && <ImageGallery />}
        </div>
      </div>
    </div>
  );
}

export default App;
