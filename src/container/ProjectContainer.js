import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import { useMediaQuery } from "react-responsive";

import IR1 from "../assets/semtle/HW1.jpg";
import IR2 from "../assets/semtle/HW2.jpg";
import IR3 from "../assets/semtle/HW3.JPG";

import GS1 from "../assets/vueticky/GS1.JPG";
import GS2 from "../assets/vueticky/GS2.JPG";
import GS3 from "../assets/vueticky/GS3.png";

import KHW1 from "../assets/youcandoeat/KHW1.PNG";
import KHW2 from "../assets/youcandoeat/KHW2.PNG";
import KHW3 from "../assets/youcandoeat/KHW3.jpg";
import KHW4 from "../assets/youcandoeat/KHW4.JPG";
import KHW5 from "../assets/youcandoeat/KHW5.JPG";


import etc1 from "../assets/etcc/etc1.jpg";
import etc2 from "../assets/etcc/etc2.png";
import etc3 from "../assets/etcc/etc3.JPG";
import etc4 from "../assets/etcc/etc4.JPG";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "[함양군] 신활력플러스 기본계획",
      info: `함양 항노화 엑스포와 연계한 기본계획 수립, 
시·군 단위 자금 계획 수립 및 사업 기획`,
      tag: ["사업계획서 작성", "계획 수립", "과제 발굴", "일정 관리", "자금 편성", "기본 계획"],
      image: [IR1, IR2, IR3],
      mode: "web",
      role: ["City Planner","Consultant"],
    },

    {
      id: 2,
      name: "[고성군] 삼산면 기초생활거점 개발사업",
      info: `고성군 내 열악한 문화복지 여건 개선 및 거점 발전 계획 수립`,
      tag: [
        "계획 수립",
        "BC 분석",
        "배치도 작성",
        "거점 설계",
        "법적 검토",
        "토지 매입",
        "사업 운영",
      ],
      image: [GS1, GS2, GS3],
      mode: "web",
      role: ["City Planner", "Consultant"],
    },

    {
      id: 3,
      name: "[과기부] 공공조달 연계 R&D 실증 사업화 지원 사업",
      info: `데이터 시각화, 사업계획서 기획/작성, 운영총괄, PM,
시험인증, 사업비 관리, 실증, 특허 출원 등의 업무 동시진행`,
      tag: [
        "데이터 시각화",
        "사업계획서 작성",
        "Project Managing",
        "시험인증",
        "사업비 관리",
        "실증 운영",
        "특허 출원",
      ],
      image: [KHW2, KHW1, KHW3, KHW4, KHW5],
      mode: "app",
      role: ["Project manager", "Data analyst"],
    },

    {
      id: 4,
      name: "[과기부] 2023 스마트빌리지 1인가구 돌봄 사업",
      info: `사업계획서 작성, 기획총괄, 사업 운영, PM, 일정 관리 등`,
      tag: ["사업계획서 작성", "Project Managing", "대시보드 기획 및 개발", "앱 기획"],
      image: [etc1, etc2, etc3, etc4],
      url: "",
      mode: "app",
      role: [
        "Project manager", "Product manager",
      ],
    },
  ];

  let [mode, setMode] = useState("");

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <>
      <Project projects={projects} mode={mode} />
    </>
  );
}

export default ProjectContainer;
