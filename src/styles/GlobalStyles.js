import { createGlobalStyle } from 'styled-components';
import '@fontsource/bangers';
import '@fontsource/comic-neue';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #FF4B4B;
    --secondary-color: #4B9EFF;
    --accent-color: #FFD700;
    --background-color: #F8F9FA;
    --text-color: #2C3E50;
    --border-color: #34495E;
    --header-bg: #2C3E50;
    --header-text: #FFFFFF;
    --panel-bg: #FFFFFF;
    --error-color: #E74C3C;
    --success-color: #2ECC71;
    --shadow-color: rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Comic Neue', cursive;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bangers', cursive;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .comic-panel {
    border: 3px solid var(--border-color);
    padding: 2rem;
    margin: 2rem auto;
    position: relative;
    background-color: var(--panel-bg);
    box-shadow: 8px 8px 0 var(--border-color);
    max-width: 90%;
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 12px 12px 0 var(--border-color);
    }
  }

  .speech-bubble {
    position: relative;
    background: var(--primary-color);
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem 0;
    max-width: 80%;
    box-shadow: 4px 4px 0 var(--border-color);
  }

  .speech-bubble:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 20px;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: var(--primary-color) transparent;
  }

  .action-line {
    position: relative;
    padding: 0.5rem;
    margin: 1rem 0;
    background: repeating-linear-gradient(
      45deg,
      var(--border-color),
      var(--border-color) 2px,
      transparent 2px,
      transparent 4px
    );
  }

  button {
    font-family: 'Bangers', cursive;
    background-color: var(--primary-color);
    color: white;
    border: 2px solid var(--border-color);
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    letter-spacing: 1px;
    box-shadow: 4px 4px 0 var(--border-color);
    transition: all 0.2s ease;
    border-radius: 4px;

    &:hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 var(--border-color);
      background-color: var(--secondary-color);
    }

    &:active {
      transform: translate(4px, 4px);
      box-shadow: 0 0 0 var(--border-color);
    }
  }

  input, textarea {
    font-family: 'Comic Neue', cursive;
    border: 2px solid var(--border-color);
    padding: 0.8rem;
    margin: 0.5rem 0;
    width: 100%;
    box-shadow: 4px 4px 0 var(--border-color);
    border-radius: 4px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      box-shadow: 6px 6px 0 var(--border-color);
      border-color: var(--secondary-color);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .pop-animation {
    animation: pop 0.3s ease;
  }
`; 