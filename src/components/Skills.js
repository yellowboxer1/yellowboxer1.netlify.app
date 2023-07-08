import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";

function SkillsPresenter({ skills }) {
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
    <>
      <hr />
      <CustomContainer id="Skills">
        <Row className="mt-5 title">
          <Col>
            <Title data-aos="fade-right" mode={mode}>
              <S>S</S>kills
            </Title>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          {skills.map((skill, index) => (
            <Col md={2} sm={3} xs={4} key={index}>
              <SkillContainer>
                <img
                  src={skills[index].icon}
                  alt={skills[index].name}
                  width="100%"
                ></img>
                <NameContainer>
                  <h5 className="mt-2" style={{ textAlign: "center" }}>
                    {skills[index].name}
                  </h5>
                </NameContainer>
              </SkillContainer>
            </Col>
          ))}
        </Row>
      </CustomContainer>
    </>
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

const SkillContainer = styled.div`
  width: 86px;
  height: 180px;
`;

const S = styled.h1`
  color: #000080;
  display: inline;
  font-size: 45px;
  text-decoration: underline;
  text-decoration-color: #000080;
  font-weight: bold;
`;

const NameContainer = styled.div`
  display: flex;s
  justify-content: center;
`;

export default SkillsPresenter;
