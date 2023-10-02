import React from "react";
import Skills from "../components/Skills";

import hwpIcon from "../assets/skills/hwp.png";
import pptIcon from "../assets/skills/ppt.png";
import excelIcon from "../assets/skills/excel.png";
import PhotoshopIcon from "../assets/skills/photoshop.png";
import pyIcon from "../assets/skills/python.png";
import IllIcon from "../assets/skills/illust.png";
import figIcon from "../assets/skills/figma.png";
import RIcon from "../assets/skills/R.png";
import swiftIcon from "../assets/skills/swift.png";
import reactIcon from "../assets/skills/react.png";

function SkillsContainer() {
  const skills = [
    { name: "hwp", icon: hwpIcon },
    { name: "ppt", icon: pptIcon },
    { name: "excel", icon: excelIcon },
    { name: "Photoshop", icon: PhotoshopIcon },
    { name: "Illust", icon: IllIcon },
    { name: "Figma", icon: figIcon },
    { name: "Python", icon: pyIcon },
    { name: "R", icon: RIcon },
    { name: "Swift", icon: swiftIcon },
    { name: "react", icon: reactIcon }    
  ];
  return <Skills skills={skills} />;
}

export default SkillsContainer;
