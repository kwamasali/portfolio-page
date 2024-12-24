import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Programming & Development: Proficient in Python, Django, React, Node.js, HTML5/CSS, and JavaScript for building scalable web applications.</p>
                        <p>Quality Assurance (QA) Engineering: Skilled in developing test cases, performing manual and automated testing, and ensuring software meets quality standards using tools like Pytest.</p>
                        <p>Data Analysis & Statistics: Strong foundation in statistics, probability theory, and data analysis with expertise in tools like Pandas, NumPy, and PyMC for modeling and insights.</p>
                        <p>Programming & Development: Proficient in Python, Django, React, Node.js, HTML5/CSS, and JavaScript for building scalable web applications.</p>
                        <p>Database Management: Experienced in SQL, MySQL, and MongoDB for efficient data storage, retrieval, and management.</p>
                        <p>Problem-Solving & Debugging: Adept at troubleshooting, optimizing code, and resolving software bugs to ensure performance and reliability.</p>
                        <p>Tools & Methodologies: Proficient with version control (Git), CI/CD pipelines, Agile practices, and QA tools to streamline workflows and maintain code quality.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Attention to Detail</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Collaboration and Communication</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Flexibility</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Versatility</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
