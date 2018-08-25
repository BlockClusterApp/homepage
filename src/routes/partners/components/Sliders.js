import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPiggyBank,
  faTaxi,
  faBicycle,
} from '@fortawesome/free-solid-svg-icons';

const SlideWrapper = styled.div`
  .slide-wrapper{
  overflow:hidden;
`;
const Card = styled.div`
  height: 600px;
  position: relative;
`;
const Slide = styled.div`
  height: 350px;
  font-size: 24px;
  text-align: center;
  box-shadow: #2046ae 1px 2px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
`;
const SlideOne = styled.div`
  background: #fff;
`;
const SlideTwo = styled.div`
  background: #fff;
`;
const SlideThree = styled.div`
  background: #fff;
`;
const Onet = styled.p`
  color: rgb(2, 95, 170);
  font-weight: 600;
  margin-top: 70px;
  text-align: right;
  width: 450px;
  margin-left: -120px;
`;
const BrandBack1 = styled.div`
  background-color: rgba(63, 104, 179, 0.657);
  display: inline-block;
  height: 350px;
  margin-bottom: 10px;
  position: absolute;
  margin-left: -410px;
  margin-top: -120px;
  width: 220px;
  transform: skewX(-12deg); 
`;
const BrandBack2 = styled.div`
  background-color: rgba(63, 104, 179, 0.657);
  display: inline-block;
  height: 350px;
  margin-bottom: 10px;
  position: absolute;
  margin-left: -410px;
  margin-top: -120px;
  width: 220px;
  transform: skewX(-12deg);
`;
const BrandBack3 = styled.div`
  BrandBack1;
  background-color: rgba(63, 104, 179, 0.657);
`;
const Details = styled.div`
  color: #404549;
  padding: 0 70px 0px 70px;
  font-size: 20px;
  text-align: left;
  width: 450px;
  float: right;
  margin-top: -8px;
  font-size: 18px;
  line-height: 28px;
`;
const Person = styled.div`
  margin-right: 380px;
  text-align: left;
  float: right;
  margin-top: -10px;
  font-size: 16px;
  font-weight: bold;
  color: #404549;
`;


class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.goto = this.goto.bind(this);
  }
  next() {
    this.slider.slickNext();
  }

  prev() {
    this.slider.slickPrev();
  }

  goto(i) {
    this.slider.slickGoTo(i);
  }

  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img
              src="https://svgur.com/i/81v.svg"
              className="sliding"
              alt="images"
            />
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      arrows: true,
      pauseOnHover: true,
      fade: true,
    };

    return (
      <SlideWrapper>
        <Card>
          <Slider {...settings} ref={node => (this.slider = node)}>
            <Slide>
              <SlideOne>
                <Onet>Partner1</Onet>
                <BrandBack1 />
                <FontAwesomeIcon icon={faPiggyBank} className="brandIcons" />
                <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
                ut varius arcu efficitur.
                Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
                ut varius arcu efficitur
                </Details>
                <Person>
                  AROKO BELL <br />Chief Tech Officer
                </Person>
              </SlideOne>
            </Slide>
            <Slide>
              <SlideTwo>
                <Onet>Partner2</Onet>
                <BrandBack2 />
                <FontAwesomeIcon icon={faBicycle} className="brandIcons" />
                <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                 Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
                ut varius arcu efficitur.
                Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
                ut varius arcu efficitur
                </Details>
                <Person>
                  STEVE CAT <br />
                  Chief Tech Officer
                </Person>
              </SlideTwo>
            </Slide>
            <Slide>
              <SlideThree>
                <Onet>Partner3</Onet>
                <BrandBack3 />
                <FontAwesomeIcon icon={faTaxi} className="brandIcons" />
                <Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit 
               sed velit urna. Pellentesque porta euismod dolor, 
            ut varius arcu efficitur.      
            Nam Nam sed velit urna. Pellentesque porta euismod 
            dolor, dolor, ut varius arcu efficitur
                </Details>
                <Person>
                  STEPHEN MARK <br />Chief Tech Officer
              </Person>
              </SlideThree>
            </Slide>
          </Slider>

          {/*-----------------------------------------------------------*/}
        </Card>
      </SlideWrapper>
    );
  }
}
export default Sliders;
