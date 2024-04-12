import { useEffect, useState } from 'react';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';

function App() {
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 300){
        setshowScroll(true)
      }else{
        setshowScroll(false)
      }
    })
  },[]);
  const [showScroll , setshowScroll] = useState(false);
  return (
    <div className='container'>
        <Header />
        <Hero />
        <div className='divider' />
        <Main />
        <div className='divider' />
        <Contact />
        <div className='divider' />
        <Footer />



          <div className='up' style={{opacity : showScroll ? 1 : 0}}>
            <a href="#up" className='icon-circle-up'></a>
          </div>
    </div>
  )
}

export default App
