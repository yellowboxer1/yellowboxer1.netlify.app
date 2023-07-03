import React from "react";
import Skills from "../components/Skills";

import reactIcon from "../assets/skills/react.png";
import htmlIcon from "../assets/skills/html.png";
import cssIcon from "../assets/skills/css.png";
import gitIcon from "../assets/skills/git.png";
import pyIcon from "../assets/skills/python.png";
import bsIcon from "../assets/skills/bootstrap.png";
import cIcon from "../assets/skills/c++.png";
import djangoIcon from "../assets/skills/django.png";
import c2Icon from "../assets/skills/c.png";

function SkillsContainer() {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "React", icon: reactIcon },
    { name: "Bootstrap", icon: bsIcon },
    { name: "Git", icon: gitIcon },
    { name: "Python", icon: pyIcon },
    { name: "C++", icon: cIcon },
    { name: "Django", icon: djangoIcon },
    { name: "C", icon: c2Icon },
  ];
  return <Skills skills={skills} />;
}

export default SkillsContainer;
