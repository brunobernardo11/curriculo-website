import styled from "styled-components";
import Bg from "../../assets/Testimonial/bg-1.jpg";

export const TestimonialSection = styled.section`
  padding: 80px 0 80px;
  background-image: url(${Bg});
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: -1;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.85;
    background-color: var(--escuro);
  }

  .button.owl-dot .button.owl-dot.active .owl-carousel .owl-nav button.owl-prev,
  .owl-carousel .owl-nav button.owl-next,
  .owl-carousel button.owl-dot {
    display: none;
  }
`;

export const Row = styled.div`
  .owl-carousel .owl-item img {
    display: block;
    width: 70px;
  }
`;

export const TestiItem = styled.div`
  background-color: var(--white);
  padding: 30px;
  border-radius: 50px 50px 50px 0px;
  margin: 0 10px;

  p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    margin: 0 0 10px;
    font-style: italic;
  }

  .fa-quote-left {
    margin-right: 5px;
    color: var(--claro);
  }

  .fa-quote-right {
    margin-left: 5px;
    color: var(--claro);
  }
`;

export const Stars = styled.ul`
  margin: 0 0 20px -40px;

  li {
    display: inline-block;
    margin: 0 1px;
  }

  i {
    font-size: 13px;
    color: var(--claro);
  }
`;

export const ClientInfo = styled.div`
  position: relative;
  padding-left: 80px;
  padding-top: p5x;
  min-height: 60px;

  img {
    height: 70px;
    width: 70px;
    border: 2px solid transparent;
    border-color: var(--escuro);
    left: 0;
    top: 0;
    border-radius: 50%;
    position: absolute;
  }

  h5 {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    margin: 0 0 2px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    margin: 0;
  }
`;
