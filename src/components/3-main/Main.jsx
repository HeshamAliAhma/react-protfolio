import { useState } from "react";
import "./main.css";
import { motion,AnimatePresence } from "framer-motion"
import { myProjects } from "./myProjects";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);
  const handleClick = (button_category) => {
    setcurrentActive(button_category);

    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === button_category;
      });

      return zzz === button_category;
    });

    setarr(newArr);
  };


  return (
    <main className="flex" id="project_section">
      <section className="left-section flex">
        <button
            onClick={() => { setcurrentActive("all"); setarr(myProjects) }}
            className={currentActive === "all" ? "active" : null} > all projects 
        </button>

        <button
          onClick={() => { handleClick("css") }}
          className={currentActive === "css" ? "active" : null} > HTML & CSS
        </button>

        <button
          onClick={() => { handleClick("javascript") }}
          className={currentActive === "javascript" ? "active" : null} > javaScript
        </button>

        <button
          onClick={() => { handleClick("react") }}
          className={currentActive === "react" ? "active" : null} > react & MUI
        </button>

        <button
          onClick={() => { handleClick("node") }}
          className={currentActive === "node" ? "active" : null}> node & express
        </button>

      </section>

      <section className="right-section flex">
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{transform:"scale(0)"}}
              animate={{transform:"scale(1)"}}
              transition={{type:"spring",damping:8,stiffness:100}}
              key={item.imgPath} style={{ width: "250px" }}>
              <img width={250} src={item.imgPath} alt="" />
              <div className="info">
                <h3>{item.prjectTitle}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi dolorem neque fugit, quam ullam modi vitae accusamus?
                </p>
                <div className="links flex">
                  <div className="left flex">
                    <span className="icon-link"></span>
                    <span className="icon-github"></span>
                  </div>
                  <a href="">
                    more
                    <span className="icon-arrow-right2"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
