import { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
    const [showModel, setshowModel] = useState(false);
    const [theme, settheme] = useState(localStorage.getItem('currentMode') ?? 'dark');
    useEffect(()=>{
        if(theme === 'light'){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        }else{
                document.body.classList.remove('light');
                document.body.classList.add('dark');

            }
    },[theme])
    return (
        <header className = 'flex' id='up'>
            <button onClick={()=>{
                setshowModel(true);
            }} className='menu icon-menu' />
            <div />
            <nav>
                <ul className='flex'>
                    <li><a href="#about_section">about</a></li>
                    <li><a href="#project_section">articles</a></li>
                    <li><a href="#project_section">projects</a></li>
                    <li><a href="#contact_section">speaking</a></li>
                    <li><a href="#about_section">uses</a></li>
                </ul>
            </nav>


            <button>
                <span onClick={()=>{
                    // send value to Local Storage
                    localStorage.setItem('currentMode',theme === 'dark' ? 'light' : 'dark');
                    // get value to Local Storage
                    settheme(localStorage.getItem('currentMode'));

                }} className= {theme === 'dark' ? 'icon-sun' : 'icon-moon-o'} />
                {/* <span></span> */}
            </button>







            {showModel && (
                
                <div className="fixed">
                    <ul className="model">
                        <li><button className='icon-close' onClick={()=>{
                            setshowModel(false);
                        }} /></li>
                        <li><a href="#about_section">about</a></li>
                        <li><a href="#project_section">articles</a></li>
                        <li><a href="#project_section">projects</a></li>
                        <li><a href="#contact_section">speaking</a></li>
                        <li><a href="#about_section">uses</a></li>
                    </ul>
                </div>
            )}

        </header>
    )
}


export default Header;