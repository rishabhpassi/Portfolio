import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Projects from './components/Projects'
import Works from './components/skills'
import Logo from './components/Header'
import HamburgerMenu from './components/navbar'
import ScrollToSection from './components/scrollsection'
import FOOTER from './components/footer'
import React, { useState, useEffect } from 'react';
import MobileNavbar from './components/mobileNavbar'



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, {
  Mousewheel, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);



function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 665px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 665px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const featuredImage = (featuredImageObject) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let img = `<img src="${featuredImageObject.media_details.sizes.full.source_url}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${featuredImageObject.media_details.sizes.full.source_url} ${imgWidth}w, 
        ${featuredImageObject.media_details.sizes.large.source_url} 1024w,
        ${featuredImageObject.media_details.sizes.medium_large.source_url} 768w,
        ${featuredImageObject.media_details.sizes.medium.source_url} 300w"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return { __html: img }
  }





  return (
    <Router basename="/">

      <header id="masthead" className="site-header">

        <div className="site-branding">


          <Logo />
          <div >
            {matches && <HamburgerMenu />}
            {!matches && <MobileNavbar />}

          </div>

        </div>

      </header>

      <main id="main">
        <ScrollToSection />
        <Home />
        <Works />
        <Projects />
        <Routes>
          <Route path='/Projects/:id' element={<Post featuredImage={featuredImage} />} />
        </Routes>
        <About />

      </main>
      <footer>

        <FOOTER />
      </footer>
    </Router>
  );
}

export default App;
