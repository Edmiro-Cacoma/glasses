"use client";

import React from "react";
import { useState, useEffect } from "react";
import slide from "@/utils/data/MainSectionData";
import style from "./Main.module.css";
import Link from "next/link";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slide.length);
  };

  useEffect(() => {
  
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);


  return (
    <>
      <section>
        <div className={`${style.home} `}>
          <div
            className={`${style.slide}`}
            style={{
              backgroundImage: `url(${
                slide[currentIndex]?.image || "/home-bg-3.png"
              })`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={`${style.content}`}>
              <span className={`${style.span}`}>
                {slide[currentIndex]?.title || "proteja seus olhos"}
              </span>
              <h3 className={`${style.h3}`}>
                {slide[currentIndex]?.description || "Desconto De 50%"}
              </h3>
              <Link className="btn" href={`/`}>
                {slide[currentIndex]?.url || "compre agora"}
              </Link>
            </div>
          </div>
        </div>

        <div className={`${style.dots}`}>
          {slide.map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faCircle}
              className={`${style.dot} ${
                index === currentIndex ? style.activeDot : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Slideshow;
