import { useContext, useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { AuthContext } from "../Context/Context";

const HomeSkills = () => {
  const [skills, setSkills] = useState([]);
  const { search } = useContext(AuthContext);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  // console.log(skills);

  const filteredSkills = skills.filter((skill) =>
    skill.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 w-11/12 mx-auto">
      {filteredSkills.slice(0, 3).map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default HomeSkills;
