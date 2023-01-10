import ScrollspyNav from "react-scrollspy-nav";
import About from "./components/About";
import GenerInfo from "./components/GenerInfo";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="container">
        <header>
          <div className="logo">Sarbin</div>
          <ScrollspyNav
            scrollTargetIds={[
              "hero",
              "service",
              "portfolio",
              "about",
              "contact",
            ]}
            offset={-100}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </ScrollspyNav>
        </header>
      </div>
      <div>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="">
          <GenerInfo />
        </section>
        <section id="about">
          <About /> 
        </section>
         <section id="service">
          <Service />
        </section>
        <section id="portfolio">
          <span>Portfolio</span>
        </section>
        <section id="contact">
          <span>Contact</span>
        </section>
      </div>
    </div>
  );
}

export default App;
