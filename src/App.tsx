import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Notification from './components/Notification';
import type { NotificationProps } from './types';

// Import styles
import './styles/styles.css';
import './styles/responsive.css';
import './styles/hamburger-standalone.css';
import './styles/components.css';

function App() {
  const [notification, setNotification] = useState<{
    message: string;
    type: NotificationProps['type'];
    isVisible: boolean;
  }>({
    message: '',
    type: 'info',
    isVisible: false
  });

  const hideNotification = () => {
    setNotification(prev => ({
      ...prev,
      isVisible: false
    }));
  };

  return (
    <ThemeProvider>
      <div className="App">
        <ProgressBar />
        <Header />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />

        <Notification
          message={notification.message}
          type={notification.type}
          isVisible={notification.isVisible}
          onClose={hideNotification}
        />

        {/* React Hot Toast Container */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 4000,
            style: {
              background: 'var(--surface-dark)',
              color: 'var(--neutral-text-dark)',
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--border-radius-lg)',
              fontSize: '14px',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-medium)',
            },
            // Default options for specific types
            success: {
              duration: 3000,
              style: {
                background: 'var(--surface-dark)',
                color: 'var(--neutral-text-dark)',
                border: '1px solid var(--accent-light)',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-medium)',
              },
              iconTheme: {
                primary: 'var(--accent-light)',
                secondary: 'var(--surface-dark)',
              },
            },
            error: {
              duration: 5000,
              style: {
                background: 'var(--surface-dark)',
                color: 'var(--neutral-text-dark)',
                border: '1px solid #ff6b6b',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-medium)',
              },
              iconTheme: {
                primary: '#ff6b6b',
                secondary: 'var(--surface-dark)',
              },
            },
            loading: {
              duration: Infinity,
              style: {
                background: 'var(--surface-dark)',
                color: 'var(--neutral-text-dark)',
                border: '1px solid var(--accent-dark)',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-medium)',
              },
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
