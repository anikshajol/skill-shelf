import React from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../Components/SkillCard";

const Skills = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="py-3 text-2xl font-semibold">Skills Set</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
