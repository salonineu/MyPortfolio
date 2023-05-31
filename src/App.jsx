import { BrowserRouter } from 'react-router-dom';
import blackbg from './assets/blackbg.mp4';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <video src={blackbg} autoPlay loop muted/>
          <div className='container-content'>
          <Navbar/>
          <Hero/>
          </div>
          
        </div>
        <div className='rest-background'>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
