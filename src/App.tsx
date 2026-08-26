import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { StarBurstEffect } from './components/common/StarBurstEffect';
import { SettingsModal } from './components/modals/SettingsModal';
import { HomePage } from './pages/HomePage';
import { LevelMapPage } from './pages/LevelMapPage';
import { ChooseWorldPage } from './pages/ChooseWorldPage';
import { LetterActivityPage } from './pages/LetterActivityPage';
import { NumberActivityPage } from './pages/NumberActivityPage';
import { VictoryPage } from './pages/VictoryPage';
import { ProgressPage } from './pages/ProgressPage';
import { RewardsPage } from './pages/RewardsPage';
import { ProfilePage } from './pages/ProfilePage';
import { SongsPage } from './pages/SongsPage';

const AppContent: React.FC = () => {
  const { currentScreen } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomePage />;
      case 'map':
        return <LevelMapPage />;
      case 'worlds':
        return <ChooseWorldPage />;
      case 'letter-activity':
        return <LetterActivityPage />;
      case 'number-activity':
        return <NumberActivityPage />;
      case 'victory':
        return <VictoryPage />;
      case 'progress':
        return <ProgressPage />;
      case 'rewards':
        return <RewardsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'songs':
        return <SongsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Interactive global star pop effect */}
      <StarBurstEffect />

      {/* Main Screen Content */}
      {renderScreen()}

      {/* Global Settings Modal */}
      <SettingsModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
