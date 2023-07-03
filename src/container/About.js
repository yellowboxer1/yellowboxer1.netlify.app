import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { Container, Row, Col } from "react-bootstrap";
import { FaBirthdayCake } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { MdMail, MdCall } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import image from "../assets/myphoto.jpeg";
import companyImg from "../assets/company.png";
import blogImg from "../assets/blog.png";

import { useMediaQuery } from "react-responsive";

function About() {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [mode, setMode] = useState("");

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <CustomContainer id="About">
      <Row className="mt-5 title">
        <Col>
          <Title data-aos="fade-right" mode={mode}>
            <A>A</A>bout
          </Title>
        </Col>
      </Row>

      <Row className="content mt-5">
        <PhotoContainer className="col">
          <Portrait src={image} mode={mode} />
        </PhotoContainer>

        <Col>
          <h2 style={{ fontWeight: "bold" }}>정재원</h2>
          <h4>Embedded Developers and National Business PM</h4>

          <ContentContainer>
            <li className="Birth" style={{ display: "flex" }}>
              <IconContainer>
                <FaBirthdayCake size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>Birthday :</h5>
                <p style={{ margin: "0", fontSize: "17px" }}>1996.04.08</p>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="Phone" style={{ display: "flex" }}>
              <IconContainer>
                <MdCall size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>Phone :</h5>
                <p style={{ margin: "0", fontSize: "17px" }}>
                  +82 10-6770-3688
                </p>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="University" style={{ display: "flex" }}>
              <IconContainer>
                <FaUniversity size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>University / Department :</h5>
                <Anchor
                  style={{ margin: "0", fontSize: "17px" }}
                  href="https://www.silla.ac.kr/ko/"
                  target="__blank"
                >
                  신라대학교
                </Anchor>
                <p style={{ display: "inline", fontSize: "17px" }}> / </p>
                <Anchor
                  style={{ margin: "0", fontSize: "17px" }}
                  href="https://electron.silla.ac.kr/electron/"
                  target="__blank"
                >
                  전자공학과
                </Anchor>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="Company" style={{ display: "flex" }}>
              <IconContainer>
                <img
                  style={{ width: "30px" }}
                  src={companyImg}
                  alt="company png"
                />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>Company :</h5>
                <Anchor
                  style={{ margin: "0", fontSize: "17px" }}
                  href="https://zeroweb.kr/"
                  target="__blank"
                >
                  Current: ZEROWEB
                </Anchor>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="EMail" style={{ display: "flex" }}>
              <IconContainer>
                <MdMail size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>EMail :</h5>
                <Anchor
                  href="mailto:wpavkzm97@naver.com"
                  style={{ margin: "0", fontSize: "17px" }}
                >
                  wpavkzm97@naver.com
                </Anchor>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="GitHub" style={{ display: "flex" }}>
              <IconContainer>
                <SiGithub size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>GitHub :</h5>
                <Anchor
                  style={{ margin: "0", fontSize: "17px" }}
                  href="https://github.com/wpavkzm"
                  target="__blank"
                >
                  https://github.com/wpavkzm
                </Anchor>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="Velog" style={{ display: "flex" }}>
              <IconContainer>
                <img style={{ width: "30px" }} src={blogImg} alt="blog png" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>velog :</h5>
                <Anchor
                  style={{ margin: "0", fontSize: "17px" }}
                  href=""
                  target="__blank"
                >
                  {" "}
                </Anchor>
              </div>
            </li>
          </ContentContainer>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col style={{ textAlign: "center" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            꾸준히 성장하는 주니어 개발자 및 사업진행자 입니다.
          </h4>
          <IntroduceText>
            노력하여 만들어낸 성과가 눈앞에 보이는 것에 흥미를 느껴 유능한
            임베드디 개발자가 되기 위해 쉬지 않고 배우고 있습니다.
            <br />
            빠르게 변화하는 트렌드와 발전하는 기술에 적응하는 더 좋은 개발자가
            되기 위해 항상 노력하고 있습니다.
            <br />
            열정과 끈기가 있는 개발자입니다. 저에 대해 궁금하신 점이 있다면,
            위의 주소로 연락해주세요!
          </IntroduceText>
        </Col>
      </Row>
    </CustomContainer>
  );
}

const CustomContainer = styled(Container)`
  padding-top: 90px;
  margin-top: 30px;
  padding-bottom: 70px;
`;

const Title = styled.h1`
  font-size: 45px;
  ${(props) =>
    props.mode === "isPc"
      ? css``
      : css`
          text-align: center;
        `}
`;

const Portrait = styled.img`
  object-fit: cover;
  border-radius: 50%;
  ${(props) =>
    props.mode === "isPc"
      ? css`
          width: 500px;
        `
      : css`
          width: 350px;
        `};
`;

const ContentContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoContainer = styled.div`
  text-align: center;
  align-self: center;
`;

const IntroduceText = styled.p`
  text-align: center;
  font-size: 20px;
`;

const A = styled.h1`
  font-weight: bold;
  color: #000080;
  display: inline;
  font-size: 45px;
  text-decoration: underline;
  text-decoration-color: #000080;
`;

const Anchor = styled.a`
  margin: 0;
  font-size: 17px;
  color: black;

  &:hover {
    color: black;
  }
`;

export default About;
