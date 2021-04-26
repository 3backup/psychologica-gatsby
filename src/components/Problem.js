import React, { Component } from "react";
import Container from "./styles/Container";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import { Link } from "gatsby";
import Slider from "react-slick";
import ArrowLeft from "../images/arrow-left.svg";
import ArrowRight from "../images/arrow-right-green.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionProblems = styled.section`
  padding: 7.5rem 0;
  background-color: #005650;
`;
const ProblemsHeader = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 125%;
  max-width: 75%;
  color: #ffffff;
  margin: 0;
  & span {
    font-weight: bold;
    color: #4abd7f;
  }
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;
const ProblemsParagraph = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  margin: 2.5rem 0;
  line-height: 150%;
  color: #ffffff;
  opacity: 0.5;
  max-width: 87.5%;
  & span {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
const ElementCarousel = styled.div`
  margin: 0;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 700;
  opacity: 0.7;
  font-size: 20px;
  line-height: 145%;
  max-width: 15rem;
  color: #ffffff;
  padding: 0;
`;
const ButtonClick = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 3.75rem;
  height: 3.75rem;
  cursor: pointer;
`;
const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;
  flex-direction: row;
  justify-content: space-between;
`;

const SliderDesign = styled(Slider)`
  .slick-dots li {
    width: 3.25rem;
  }
  .slick-dots li button:before {
    content: "";
    line-height: 8.5rem;
    height: 10px;
    width: 3.25rem;
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    top: 3.5rem;
  }
  .slick-dots li {
    margin: 0;
  }
  .slick-dots .slick-active button:before {
    border-bottom: 1px solid #4abd7f;
  }
`;
class Problems extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <>
        <SectionProblems>
          <Container>
            <ProblemsHeader>
              Moja pomoc obejmuje następujące obszary <span>Psychologii</span>{" "}
              oraz <span>Psychoterapii</span>.
            </ProblemsHeader>
            <ProblemsParagraph>
              Mam duże doświadczenie w prowadzeniu psychoterapii osób
              uzależnionych, osób, u których – obecnie bądź w przeszłości –{" "}
              <span>występował w rodzinie/związku problem </span> uzależnienia
              oraz w psychoterapii innych osób borykających się m.in. z lękiem,
              depresją, niskim poczuciem własnej wartości, mierzących się z
              kryzysem (w związku,<span> życiu zawodowym</span>, przewlekłą
              chorobą, bolesną stratą oraz innymi trudnymi doświadczeniami).
            </ProblemsParagraph>
            <div>
              <SliderDesign ref={(c) => (this.slider = c)} {...settings}>
                <ElementCarousel key="1">
                  Uzależnienia chemiczne i behawioralne
                </ElementCarousel>
                <ElementCarousel key="2">
                  Uzależnienia chemiczne i behawioralne
                </ElementCarousel>
                <ElementCarousel key="3">
                  Uzależnienia chemiczne i behawioralne
                </ElementCarousel>
                <ElementCarousel key="4">
                  Uzależnienia chemiczne i behawioralne
                </ElementCarousel>
                <ElementCarousel key="5">
                  Uzależnienia chemiczne i behawioralne
                </ElementCarousel>
                <ElementCarousel key="6">
                  Uzależnienia chemiczne i behawioralne
                </ElementCarousel>
              </SliderDesign>
              <ButtonsContainer>
                <ButtonClick className="button" onClick={this.previous}>
                  <ArrowLeft />
                </ButtonClick>
                <ButtonClick className="button" onClick={this.next}>
                  <ArrowRight />
                </ButtonClick>
              </ButtonsContainer>
            </div>
          </Container>
        </SectionProblems>
      </>
    );
  }
}
export default Problems;
