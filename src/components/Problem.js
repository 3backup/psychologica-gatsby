import React, { Component } from "react";
import Container from "./styles/Container";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import { Link } from "gatsby";
import Slider from "react-slick";
import ArrowLeft from "../images/arrow-left.svg";
import ArrowRight from "../images/arrow-right-green.svg";
import TopRight from "../images/top-right-problem.svg";
import TopLeft from "../images/top-left-problem.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionProblems = styled.section`
  padding: 7.5rem 0;
  overflow: hidden;
  background-color: #005650;
  position: relative;
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
  display: inline-flex !important;
  font-family: Red Hat Display;
  font-style: normal;
  height: 6rem;
  justify-content: flex-start;
  font-weight: 500;
  opacity: 0.6;
  font-size: 16px;
  line-height: 145%;
  max-width: 15rem;
  text-transform: uppercase;
  text-align: left;
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

const ProblemBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const BgTopRight = styled(TopRight)`
  position: absolute;
  top: 0;
  right: 0;
`;
const BgTopLeft = styled(TopLeft)`
  position: absolute;
  top: 0;
  left: 0;
`;
const ProblemContainer = styled(Container)`
  position: relative;
  z-index: 99;
`;
const SliderDesign = styled(Slider)`
  .slick-dots li {
    width: 3.25rem;
    @media (max-width: 768px) {
      width: 1rem;
    }
  }
  .slick-dots li button:before {
    content: "";
    line-height: 8.5rem;
    height: 10px;
    width: 3.25rem;
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    top: 3.5rem;
    @media (max-width: 768px) {
      width: 1rem;
    }
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
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      rows: 2,
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
          <ProblemContainer>
            <ProblemsHeader>
              Moja pomoc obejmuje <span>następujące obszary</span>
            </ProblemsHeader>
            <ProblemsParagraph>
              Specjalizuję się w pracy terapeutycznej z osobami uzależnionymi
              oraz tymi, u których w rodzinie/związku występuje (bądź
              występował) problem uzależnienia, a także w pracy z osobami, które
              borykają się z:
            </ProblemsParagraph>
            <div>
              <SliderDesign ref={(c) => (this.slider = c)} {...settings}>
                <ElementCarousel key="1">
                  Uzależnienia chemiczne i behawioralne
                </ElementCarousel>
                <ElementCarousel key="2">
                  Problem uzależnienia w związku/rodzinie
                </ElementCarousel>
                <ElementCarousel key="3">
                  Kryzysy – w związku, w życiu zawodowym i inne
                </ElementCarousel>
                <ElementCarousel key="4">
                  Dokonywanie bilansu życia
                </ElementCarousel>
                <ElementCarousel key="5">Problemy w relacjach</ElementCarousel>
                <ElementCarousel key="6">Napięcie, stres</ElementCarousel>
                <ElementCarousel key="7">
                  Niepokój, lęk, ataki paniki
                </ElementCarousel>
                <ElementCarousel key="8">Problemy ze snem</ElementCarousel>
                <ElementCarousel key="9">
                  Smutek, przygnębienie, depresja
                </ElementCarousel>
                <ElementCarousel key="10">
                  Poczucie osamotnienia
                </ElementCarousel>

                <ElementCarousel key="11">
                  Niskie poczucie własnej wartości
                </ElementCarousel>
                <ElementCarousel key="12">
                  Trudności w podejmowaniu decyzji
                </ElementCarousel>
                <ElementCarousel key="13">
                  Problemy w przeżywaniu emocji
                </ElementCarousel>
                <ElementCarousel key="14">
                  Trudności w panowaniu nad złością, impulsywność
                </ElementCarousel>
                <ElementCarousel key="15">
                  Traumatyczne doświadczenia
                </ElementCarousel>
                <ElementCarousel key="16">Bolesna strata</ElementCarousel>
                <ElementCarousel key="17">
                  Ciężka choroba, niepełnosprawność
                </ElementCarousel>
                <ElementCarousel key="18">
                  Doświadczenia związane z pandemią COVID-19
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
          </ProblemContainer>
          <ProblemBg>
            <StaticImage
              src="../images/background-problem.png"
              alt="bg-testimonial"
              layout="fullWidth"
              placeholder="blurred"
            />
          </ProblemBg>
          <BgTopRight />
          <BgTopLeft />
        </SectionProblems>
      </>
    );
  }
}
export default Problems;
