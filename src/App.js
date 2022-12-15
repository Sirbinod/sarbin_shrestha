import ScrollspyNav from "react-scrollspy-nav";

function App() {
  return (
    <div className="App">
      <nav  >
        <div className="logo">Sarbin</div>
      <ScrollspyNav
        scrollTargetIds={["section_1", "section_2", "section_3"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
      >
        <ul>
          <li>
            <a href="/">Home</a>
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
        </nav>
      <div>
        <div style={{ height: "400px" }}>
          <span>Welcome!</span>
        </div>
        <div id="service" style={{ height: "500px" }}>
          <span>Service</span>
        </div>
        <div id="portfolio" style={{ height: "500px" }}>
          <span>Portfolio</span>
        </div>
        <div id="about" style={{ height: "500px" }}>
          <span>About</span>
        </div>
        <div id="contact" style={{ height: "500px" }}>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

export default App;
