import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonialsData = [
  {
    name: "Dylis",
    image: "dylis.jpg",
    occupation: "Professional Teacher",
    text: "I've had the pleasure of collaborating with Daniel, and I can't emphasize enough how exceptional his computer science skills are. Daniel possesses a remarkable ability to translate complex technical concepts into practical solutions. His knack for understanding the unique needs of our projects and his commitment to excellence have been a game-changer for our business. I wholeheartedly endorse him as a computer science pro who consistently delivers excellence.",
  },
  {
    name: "Janet",
    image: "janet2.jpg",
    occupation: "Entrepreneur",
    text: "I had the privilege of working with Daniel, and I must say he's an exceptional computer science professional.Daniel's problem-solving skills and in-depth knowledge of computer science are truly impressive. He consistently goes above and beyond to find innovative solutions to even the most challenging technical problems. I have no doubt that his contributions have made a significant impact on our company, and I highly recommend Daniel to anyone seeking a top-notch computer science expert.",
  },
  {
    name: "Winnie",
    image: "winnie.jpg",
    occupation: "Entrepreneur",
    text: "Working with Daniel has been a transformative experience for our business. As an entrepreneur, I value innovation and technological prowess, and Daniel embodies both. His computer science expertise has been the driving force behind our digital transformation. Daniel's ability to conceptualize and execute cutting-edge solutions is nothing short of remarkable. He has a keen understanding of how technology can propel a business forward, and his contributions have not only streamlined our operations but have also opened new horizons for growth. Daniel's work ethic, dedication, and problem-solving skills are second to none. If you're looking for a computer science professional who can take your business to the next level, Daniel is the one to turn to",
  },
  {
    name: "Purity",
    image: "purie.jpg",
    occupation: "Nurse",
    text: "As a nurse working in the healthcare industry, I had the privilege of collaborating with Daniel, and I must say his expertise in computer science has had a profound impact on our medical facility. Daniel's innovative solutions and dedication to improving our healthcare systems have made our work significantly more efficient and streamlined. His ability to develop software solutions tailored to our specific needs has revolutionized the way we manage patient data, appointments, and medical records. I wholeheartedly recommend him as a computer science pro who plays a vital role in the healthcare sector.",
  },
  // Add more testimonials here
  // {
  //   name: "Another Name",
  //   image: "another-image.jpg",
  //   occupation: "Occupation",
  //   text: "Another testimonial text.",
  // },
];

const TestimonialsSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((current) =>
      current === testimonialsData.length - 1 ? 0 : current + 1
    );
  }, []);

  const prevTestimonial = () => {
    setCurrentTestimonial((current) =>
      current === 0 ? testimonialsData.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(nextTestimonial, 7000);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [nextTestimonial]); // Add nextTestimonial as a dependency

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <div className="container text-center text-white mt-4">
      <h2 className="text-warning">Testimonials</h2>
      <div className="testimonials-slider d-flex flex-column align-items-center mt-4">
        <img
          className="testimonial-image rounded-circle"
          src={require(`../Assets/${testimonial.image}`)}
          alt={testimonial.name}
          width="150"
          height="150"
        />
        <p className="h1 text-danger mt-2">{testimonial.name}</p>
        <p className="h4 text-warning">{testimonial.occupation}</p>
        <FontAwesomeIcon
          className="fs-bolder display-5 text-warning ml-2"
          icon={faQuoteLeft}
        />
        <p className=" col-lg-6 col-md-6 col-sm-6 rounded-6">
          {testimonial.text}
        </p>
      </div>
      <div className="slider-controls d-flex justify-content-center mt-4">
        <div className="me-4 fw-bolder">
          <FontAwesomeIcon
            className="fs-5 fw-bolder text-warning"
            onClick={prevTestimonial}
            icon={faAngleLeft}
          />{" "}
        </div>

        <div className="ms-4 fw-bolder mb-2">
          <FontAwesomeIcon
            className="fs-5 fw-bolder text-warning"
            onClick={nextTestimonial}
            icon={faAngleRight}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
