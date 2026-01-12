import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import useSearch from "../hooks/useSearch";
import Loader from "./Loader";

const HomeSkills = () => {
  const [skills, setSkills] = useState([]);
  const { search } = useSearch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }
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
