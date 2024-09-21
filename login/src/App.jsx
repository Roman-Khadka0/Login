import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Correct import
import LoginSetup from './pages/LoginSetup'; // Ensure the correct path to loginSetup component

function App() {
  return (
    <Router>
      <div className="App" style={styles.app}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>
            <h2 style={{ backgroundColor: 'white' }}>
              <b>TutorLink</b>
            </h2>
          </div>

          <div style={styles.authButtons}>
            {/* Use `Link` from `react-router-dom` for navigation */}
            <Link to="/loginSetup">
              <button style={styles.loginBtn}>Login</button>
            </Link>
            <button style={styles.signupBtn}>Sign Up</button>
          </div>
        </header>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <h1 style={styles.mainTitle}>Better Learning. Better Results.</h1>
          <p style={styles.mainDescription}>One platform for all your learning needs</p>
          <div style={styles.cards}>
            <div style={styles.card}>
              <img
                src="https://www.shutterstock.com/image-photo/two-mature-parents-seeing-their-260nw-1458151427.jpg"
                alt="Learning"
                style={styles.cardImage}
              />
              <a style={styles.link}>Search any educational tutor</a>
              <p style={styles.cardText}>
                <a style={{ color: '#2baffc' }}>Let’s search what’s </a>best for you
              </p>
            </div>
            <div style={styles.card}>
              <img
                src="https://media.istockphoto.com/id/1435632787/photo/young-smiling-modern-male-teacher-holding-laptop-isolated-on-purple-background.jpg?s=612x612&w=0&k=20&c=OsiWm3IdFEExVqWE9hn7dDy_kzxKHuJp0fvzivEl3bk="
                alt="Teacher"
                style={styles.cardImage}
              />
              <a style={styles.link}>Earn sharing what you know</a>
              <p style={styles.cardText}>
                <a style={{ color: '#da8ee7' }}>Share what you </a>know and earn
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>@Copy-Right</footer>

        {/* Define Routes */}
        <Routes>
          {/* The LoginSetup route */}
          <Route path="/loginSetup" element={<LoginSetup />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#f4f9fd',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: '10px 40px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '24px',
    color: '#333',
  },
  authButtons: {
    display: 'flex',
    gap: '10px',
  },
  loginBtn: {
    padding: '10px 20px',
    border: '2px solid white',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  signupBtn: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    border: 'none',
  },
  mainContent: {
    marginTop: '50px',
  },
  mainTitle: {
    color: '#333',
    fontSize: '2rem',
  },
  mainDescription: {
    color: '#2baffc',
    fontSize: '2rem',
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  cardImage: {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  cardText: {
    color: 'black',
    fontSize: '2rem',
  },
  link: {
    color: 'grey',
    marginTop: '25px',
    display: 'block',
    fontSize: '1rem',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(24,4,249,253)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
};

export default App;
