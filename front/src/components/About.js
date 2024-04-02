import "./About.css";

import weather from "./IIIT-Surat.png";

function About() {
  return (
    <>
        <div class="About">
              {/* <div class="Content"> */}
                <div class="Text">
                  <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ut nemo delectus eius iusto tempore quae reprehenderit ipsa odio facere possimus aspernatur sint fuga atque non, provident earum inventore ullam molestiae corporis consectetur odit laborum aut? Saepe voluptas debitis ut ratione deserunt consectetur soluta iusto maiores voluptate, repudiandae maxime.
                  </h3>
                </div>
                <div class="Img">
                  <img src={weather} />
                </div>
              {/* </div> */}
        </div>
    </>
  );
}

export default About;