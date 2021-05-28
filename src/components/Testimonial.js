import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";

const TestimonialSection = styled.section`
  padding: 7.5rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  align-items: center;
  width: 100%;
`;
const TestimonialBg = styled.div`
  position: absolute;
  top: 0;
  z-index: -9;
  width: 100%;
`;
const TestimonialQuote = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  max-width: 720px;
  width: 80%;
  font-size: 36px;
  line-height: 125%;
  text-align: center;
  color: #000000;
  & span {
    font-weight: bold;
    font-size: 36px;
    line-height: 125%;
    text-align: center;
    color: #4abd7f;
  }
`;
const TestimonialAuthor = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 125%;
  text-align: center;
  color: #000000;
`;
const TestimonialHr = styled.div`
  height: 2px;
  background: #4abd7f;
  border-radius: 2px;
  width: 2.5rem;
`;

const Testimonial = ({ quote, author }) => {
  return (
    <TestimonialSection>
      <TestimonialQuote
        dangerouslySetInnerHTML={{
          __html: quote,
        }}></TestimonialQuote>
      <TestimonialHr />
      <TestimonialAuthor>{author}</TestimonialAuthor>
      <TestimonialBg>
        <StaticImage
          src="../images/testimonial-bg.jpg"
          alt="bg-testimonial"
          layout="fullWidth"
          placeholder="blurred"
        />
      </TestimonialBg>
    </TestimonialSection>
  );
};
export default Testimonial;
