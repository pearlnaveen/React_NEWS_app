import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <section id="center">
        
        <div>
          <h1>NEC NEWS</h1>
          <p>
            Trusted News Page Since 1984.
          </p>
        </div>
       
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Breaking News!!!</h2>
          <p>The Government has announced new policies on Pention Scheme</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                
                ReadMore...
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <h2>Technology</h2>
          <p>Deepseek has introduced new IDE "Deepseek Harness" which was 10x efficient than Claude code</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                
                ReadMore...
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="next-steps">
        <div id="docs">
          <h2>Movies</h2>
          <p>The most anticipated Avengers: Doomsday is set to out on December 18, 2026 confirms Marvel</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                
                ReadMore...
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <h2>Politics</h2>
          <p>TN get the Cauvery water from KA. TN thanks their CM for his initiative.</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                
                ReadMore...
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="next-steps">
        <div id="social">
          <h2>Sports</h2>
          <p>India Wons Against England in one day test series. Surya's Massive strikes saves the day</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                
                ReadMore...
              </a>
            </li>
          </ul>
        </div>
        <div id="docs">
          <h2>Global News</h2>
          <p>More than 100 were saved safely from Nepal's disaster. Everything is under our control says Nepal Govt.</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                
                ReadMore...
              </a>
            </li>
          </ul>
        </div>
        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
//cmdkey /delete:LegacyGeneric:target=git:https://github.com
