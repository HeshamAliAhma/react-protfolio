import { useState } from 'react';
import './header.css';

const Header = () => {
    const [showModel, setshowModel] = useState(false);
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
                <span className='icon-moon-o' />
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