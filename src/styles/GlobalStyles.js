import { createGlobalStyle } from 'styled-components';
import '@fontsource/bangers';
import '@fontsource/comic-neue';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #FF6B6B;
    --secondary-color: #4ECDC4;
    --accent-color: #FFE66D;
    --background-color: #F7F7F7;
    --text-color: #2D3436;
    --border-color: #2D3436;
    --header-bg: #2D3436;
    --header-text: #FFFFFF;
    --panel-bg: #FFFFFF;
    --error-color: #FF7675;
    --success-color: #00B894;
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
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .comic-panel {
    border: 3px solid var(--border-color);
    padding: 2rem;
    margin: 2rem auto;
    position: relative;
    background-color: var(--panel-bg);
    box-shadow: 5px 5px 0 var(--border-color);
    max-width: 90%;
    width: 100%;
  }

  .speech-bubble {
    position: relative;
    background: var(--primary-color);
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem 0;
    max-width: 80%;
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
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.1rem;
    letter-spacing: 1px;
    box-shadow: 3px 3px 0 var(--border-color);
    transition: all 0.2s ease;

    &:hover {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 var(--border-color);
      background-color: var(--secondary-color);
    }
  }

  input, textarea {
    font-family: 'Comic Neue', cursive;
    border: 2px solid var(--border-color);
    padding: 0.8rem;
    margin: 0.5rem 0;
    width: 100%;
    box-shadow: 2px 2px 0 var(--border-color);
    border-radius: 4px;

    &:focus {
      outline: none;
      box-shadow: 4px 4px 0 var(--border-color);
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
`; 