import React from 'react';
import './main.css';
const Main = () => {
    return (
        <main style={{width :'90%' , marginInline: 'auto'}} className='flex' id='project_section'>
            <section className="left-section flex">
                <button className=' active'>all projects</button>
                <button className=''>HTML & CSS</button>
                <button className=''>javaScript</button>
                <button className=''>react & MUI</button>
                <button className=''>node & express</button>
            </section>
            <section className="right-section flex">
                {['a','c','b',2,4].map((item)=>{
                    return(
                        <article key={item} style={{width:'250px'}}>
                        <img width={250} src="./landing.jpg" alt="" />
                        <div  className='info'>
                        <h3>landing page 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem neque fugit, quam ullam modi vitae accusamus?</p>
                        <div className="links flex">
                            <div className='left flex'>
                                <span className='icon-link'></span>
                                <span className='icon-github'></span>
                            </div>
                            <a href="">
                                more
                                <span className='icon-arrow-right2'></span>
                            </a>
                        </div>
                        </div>
    
                    </article>
                    )
                })}
            </section>
        </main>
    )
}


export default Main;