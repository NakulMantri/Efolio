import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const Data = [
            {
                name: "Jaydip1",
                id: 1,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ut nemo delectus eius iusto tempore quae reprehenderit ipsa odio facere possimus aspernatur sint fuga atque non, provident earum inventore ullam molestiae corporis consectetur odit laborum aut? Saepe voluptas debitis ut ratione deserunt consectetur soluta iusto maiores voluptate, repudiandae maxime."
            },
            {
                name: "Rishabh2",
                id: 2,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ut nemo delectus eius iusto tempore quae reprehenderit ipsa odio facere possimus aspernatur sint fuga atque non, provident earum inventore ullam molestiae corporis consectetur odit laborum aut? Saepe voluptas debitis ut ratione deserunt consectetur soluta iusto maiores voluptate, repudiandae maxime."
            },
            {
                name: "Jaydip3",
                id: 3,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ut nemo delectus eius iusto tempore quae reprehenderit ipsa odio facere possimus aspernatur sint fuga atque non, provident earum inventore ullam molestiae corporis consectetur odit laborum aut? Saepe voluptas debitis ut ratione deserunt consectetur soluta iusto maiores voluptate, repudiandae maxime."
            },
            {
                name: "Rishabh4",
                id: 4,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ut nemo delectus eius iusto tempore quae reprehenderit ipsa odio facere possimus aspernatur sint fuga atque non, provident earum inventore ullam molestiae corporis consectetur odit laborum aut? Saepe voluptas debitis ut ratione deserunt consectetur soluta iusto maiores voluptate, repudiandae maxime."
            },
            {
                name: "Jaydip5",
                id: 5,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ut nemo delectus eius iusto tempore quae reprehenderit ipsa odio facere possimus aspernatur sint fuga atque non, provident earum inventore ullam molestiae corporis consectetur odit laborum aut? Saepe voluptas debitis ut ratione deserunt consectetur soluta iusto maiores voluptate, repudiandae maxime."
            },
            {
                name: "Rishabh6",
                id: 6,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ut nemo delectus eius iusto tempore quae reprehenderit ipsa odio facere possimus aspernatur sint fuga atque non, provident earum inventore ullam molestiae corporis consectetur odit laborum aut? Saepe voluptas debitis ut ratione deserunt consectetur soluta iusto maiores voluptate, repudiandae maxime."
            },
            {
                name: "Jaydip7",
                id: 7,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ut nemo delectus eius iusto tempore quae reprehenderit ipsa odio facere possimus aspernatur sint fuga atque non, provident earum inventore ullam molestiae corporis consectetur odit laborum aut? Saepe voluptas debitis ut ratione deserunt consectetur soluta iusto maiores voluptate, repudiandae maxime."
            }
        ];

        setEntries(Data);
    }, []); 

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 4 < entries.length ? prevIndex + 4 : 0
            );
        }, 10000);

        return () => clearInterval(timer);
    }, [currentIndex, entries]); 

    const displayEntries = entries.slice(currentIndex, currentIndex + 4);

    return (
        <div className="slider-container">
            <div className="slider">
                {displayEntries.map((entry, index) => (
                    <div key={`${entry.id}-${index}`} className="slider-entry">
                        <p>{entry.name}</p>
                        <p>{entry.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
