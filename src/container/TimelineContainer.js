import React, { useState, useEffect } from "react";
import Timeline from "../components/Timeline";

import { useMediaQuery } from "react-responsive";

function TimelineContainer({ sidebar, setSidebar }) {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const timeLine = [
    {
      id: 0,
      date: "2019.02",
      title: "부산관광공사 한복체험관 명칭공모 대상",
      content: "부산관광공사 주관 한복체험관 명칭 공모 1위로 수상",
      category: "mentor",
    },

    {
      id: 1,
      date: "2020.10 - 2022.01",
      title: "라온코메스 입사",
      content:
        "농촌 계획 및 국책과제 운영 / 지역개발부 대리",
      category: "company",
    },

    {
      id: 2,
      date: "2020.10 - 2021.01",
      title: "함양군 신활력플러스 기본계획",
      content:
        "기본계획 설계 (함양 항노화 엑스포와 연계한 기본계획 수립).",
      category: "project",
    },

    {
      id: 3,
      date: "2020.12 - 2022.01",
      title: "삼산면 기초생활거점 개발사업",
      content: "기본 계획 총괄 및 설계, 사업 운영",
      category: "project",
    },

    {
      id: 4,
      date: "2020.12 - 2021.11",
      title: "거제시 동부면 지역역량강화",
      content:
        "주민교육 및 국책 사업 운영, 예산 관리 등 총괄 운영",
      category: "project",
    },

    {
      id: 5,
      date: "2022.06 - 2021.10",
      title: "사천시 어촌뉴딜 300 예비계획",
      content:
        "사천시 어촌뉴딜300 예비계획 수립 전체 총괄 및 설계 (갯섬항, 안도항, 상촌항 - 3개항 전체 예비계획 총괄 및 상촌항 예비계획서 작성)",
      category: "project",
    },

    {
      id: 6,
      date: "2022.03 - 재직중",
      title: "제로웹 입사",
      content:
        "B2C, B2B 사업계획서 작성 및 프로젝트 매니징 / 사업전략부 선임",
      category: "company",
    },

    {
      id: 7,
      date: "2022.03 - 2023.06",
      title: "2021 스마트시티챌린지사업",
      content:
        "부산 도시철도 내 실내 배리어프리 내비게이션 구축을 위한 실무 수행",
      category: "project",
    },

    {
      id: 8,
      date: "2022.04 - 2023.07",
      title: "공공조달 연계 R&D 실증 사업화 지원 사업",
      content:
        "1인 가구 및 홀몸 노인 대상 라이프로그 추출을 위한 행동 분석 및 기획, 특허출원",
      category: "project",
    },

    {
      id: 9,
      date: "2023.03 - 2023.07",
      title: "2023 스마트빌리지 1인 가구 돌봄 사업",
      content:
        "빅데이터 기반 1인가구 돌봄 서비스를 위한 기획 총괄 및 사업 운영, 웹앱 구현 프로젝트 진행",
      category: "mentor",
    },

  ];

  const [mode, setMode] = useState("");

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <Timeline
      sidebar={sidebar}
      setSidebar={setSidebar}
      timeLine={timeLine}
      mode={mode}
    />
  );
}

export default TimelineContainer;
