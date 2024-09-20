import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError('Both fields are required.');
        return;
      }
      console.log('Logged in:', formData);
    } else {
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        setError('All fields are required.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      console.log('Signed up:', formData);
    }
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'url("https://img.freepik.com/free-vector/black-background-with-white-line-that-says-white-it_483537-4189.jpg?w=1380&t=st=1726830527~exp=1726831127~hmac=0beeff6fa14265fb3b98376b1dd6da690445e59c5c63946ad0aa0809e3e5be3c")',
      backgroundSize: 'cover', // Ensures the image covers the entire container
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', // Prevents tiling of the image
      fontFamily: 'Arial, sans-serif',
      color: 'white',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      padding: '30px',
      backgroundColor: 'rgba(34, 34, 34, 0.8)',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      padding: '10px',
      border: 'none', // Removed border
      borderRadius: '5px',
      transition: 'border-color 0.3s',
      backgroundColor: '#333',
      color: 'white',
    },
    inputFocus: {
      borderColor: '#007BFF',
    },
    button: {
      padding: '10px',
      backgroundColor: '#808080', // Grey color
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    buttonHover: {
      backgroundColor: '#A9A9A9', // Lighter grey on hover
    },
    errorMessage: {
      color: 'red',
      marginTop: '10px',
    },
    toggleLink: {
      cursor: 'pointer',
      color: 'white',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
            onBlur={(e) => e.target.style.borderColor = 'none'}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
            onBlur={(e) => e.target.style.borderColor = 'none'}
          />
        </div>
        {!isLogin && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={styles.input}
              onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'none'}
            />
          </div>
        )}
        {error && <p style={styles.errorMessage}>{error}</p>}
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#808080')}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p style={styles.toggleLink} onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default Login;
