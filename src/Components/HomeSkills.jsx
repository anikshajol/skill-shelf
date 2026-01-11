import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const HomeSkills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  // console.log(skills);

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 w-11/12 mx-auto">
      {skills.slice(0, 3).map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default HomeSkills;
