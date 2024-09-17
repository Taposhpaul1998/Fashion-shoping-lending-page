import logo from "../src/assets/logo/logo.svg"

function App() {

  return (
    <>
      <div className="main-conteiner">
        {/* header section start */}
        <header>
          <div class="conteiner">
            {/* nev section start */}
            <nav class="navber">
              <div class="logo">
                <img src={logo} alt="" />
                <h4 class="logo-text">FASHION</h4>
              </div>
              <div class="menu-bar">
                <div class="menu">
                  <ul>
                    <li>
                      <a href="#">CATALOGUE</a>
                    </li>
                    <li>
                      <a href="#">FASHION</a>
                    </li>
                    <li>
                      <a href="#">FAVOURITE</a>
                    </li>
                    <li>
                      <a href="#">LIFESTYLE</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <button class="btn sing-up">SING UP</button>
                </div>
              </div>
            </nav>
            {/* nev section end */}
          </div>
        </header>
        {/* header section end */}
      </div>
    </>
  )
}

export default App
