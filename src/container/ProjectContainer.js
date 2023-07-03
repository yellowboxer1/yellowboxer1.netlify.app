import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import { useMediaQuery } from "react-responsive";

import IR1 from "../assets/semtle/HW1.PNG";
import IR2 from "../assets/semtle/HW2.PNG";
import IR3 from "../assets/semtle/HW3.PNG";
import IR4 from "../assets/semtle/IRcase.PNG";
import IR5 from "../assets/semtle/IR.PNG";

import GHW1 from "../assets/vueticky/GHW1.PNG";
import GHW2 from "../assets/vueticky/GHW2.PNG";
import GHW3 from "../assets/vueticky/GHW3.PNG";
import GHW4 from "../assets/vueticky/GHW4.PNG";

import KHW1 from "../assets/youcandoeat/KHW1.PNG";
import KHW2 from "../assets/youcandoeat/KHW2.PNG";
import KHW3 from "../assets/youcandoeat/KHW3.PNG";

import etc1 from "../assets/etcc/etc1.PNG";
import etc2 from "../assets/etcc/etc2.PNG";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "[중기부] HW 개발 및 기능 구현 / 사업운영",
      info: `중기부 프로젝트 진행 내용에 포함되는 센서 개발 및 기능 구현,
      시험인증, 사업비 통계, 업체컨텍, 기타자료증빙 등의 업무 동시진행`,
      tag: ["EasyEDA", "2D CAD", "C/C++", "Atemel", "Visual Studio Code"],
      image: [IR1, IR2, IR3, IR4, IR5],
      url: "https://mss.zeroweb.cloud/",
      // git: "https://github.com/semtlekkun/semtleProject-front",
      mode: "web",
      role: ["Embedded"],
    },

    {
      id: 2,
      name: "[국토부] HW 개발 및 기능구현 / SW 유지보수 및 기능추가",
      info: `국토부 프로젝트 진행 내용에 포함되는 센서 개발 및 기능구현,
      자사에서 보유중이던 유동인구 트래킹 센서 기능 추가(업그레이드) 및 개발된 센서와 데이터 융합`,
      tag: [
        "EasyEDA",
        "Python",
        "RaspberryPi4",
        "MySQL",
        "RestAPI",
        "Visual Studio Code",
        "Mac OS && Terminal",
      ],
      image: [GHW1, GHW2, GHW3, GHW4],
      url: "https://master.dipgi7pfdfbsq.amplifyapp.com/gis",
      // git: "https://github.com/gunwoongPark/Vueticky-Note",
      mode: "web",
      role: ["Embedded", "MySQLWorkbench"],
    },

    {
      id: 3,
      name: "[과기부] 데이터 가공/융합 및 사업계획서 기획/작성 및 운영총괄",
      info: `과기부 프로젝트 진행 내용에 포함되는 센서 데이터 가공 및 융합
      시험인증, 사업비 통계, 실증, 기타자료증빙 등의 업무 동시진행`,
      tag: [
        "React",
        "Django",
        "Python",
        "MySQL",
        "MQTT",
        "Visual Studio Code",
        "Mac OS && Terminal",
      ],
      image: [KHW1, KHW2, KHW3],
      url: "https://watsin-3b4e3.web.app/",
      // git: "https://github.com/HwangYoonSeong/You_can_do_EAT",
      mode: "app",
      role: ["Embedded", "MySQLWorkbench", "React"],
    },

    {
      id: 4,
      name: "[기타자료] 논문/특허등의 기타 자료모음",
      info: `사업 진행중 진행한 것들의 성과물`,
      tag: ["논문", "특허"],
      image: [etc1, etc2],
      url: "",
      // git: "",
      mode: "app",
      role: [
        "수많은 연구와 여러 입증방법을 통하여 사실을 기반으로 작성한것이 등록되어있습니다.",
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
