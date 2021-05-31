import React, { Component } from "react";
import Container from "./styles/Container";
import { StaticImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";
import { styled } from "linaria/react";
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
      <StaticQuery
        query={graphql`
          query ProblemsListQuery {
            datoCmsIndex {
              obszaryNaSliderze {
                area
              }
              zielonaSekcjaDesc
              zielonaSekcjaTytu
            }
          }
        `}
        render={(data) => (
          <>
            <SectionProblems>
              <ProblemContainer>
                <ProblemsHeader
                  dangerouslySetInnerHTML={{
                    __html: data.datoCmsIndex.zielonaSekcjaTytu,
                  }}></ProblemsHeader>
                <ProblemsParagraph>
                  {data.datoCmsIndex.zielonaSekcjaDesc}
                </ProblemsParagraph>
                <div>
                  <SliderDesign ref={(c) => (this.slider = c)} {...settings}>
                    {data.datoCmsIndex.obszaryNaSliderze.map(
                      (singleProblem, i) => (
                        <ElementCarousel key={i}>
                          {singleProblem.area}
                        </ElementCarousel>
                      ),
                    )}
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
                  alt="Tło dla sekcji nad czym mozemy pracowac psychologica"
                  layout="fullWidth"
                  placeholder="blurred"
                />
              </ProblemBg>
              <BgTopRight />
              <BgTopLeft />
            </SectionProblems>
          </>
        )}
      />
    );
  }
}
export default Problems;
