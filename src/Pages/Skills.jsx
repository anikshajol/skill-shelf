import React, { useContext, useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import SkillCard from "../Components/SkillCard";
import { AuthContext } from "../Context/Context";
import Loader from "../Components/Loader";

const Skills = () => {
  const data = useLoaderData();
  const [visible, setVisible] = useState(6);
  const visibleSkills = data.slice(0, visible);
  // console.log(data);
  const { state } = useNavigation();
  // console.log(state);

  const { search } = useContext(AuthContext);
  const filteredSkills = visibleSkills.filter((skill) =>
    skill.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="py-3 text-2xl font-semibold">Skills Set</h2>
      <div className="grid grid-cols-1 pb-6 gap-2 md:grid-cols-2 lg:grid-cols-3 ">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
      {visible < data.length ? (
        <div className="flex justify-center">
          <button
            onClick={() => setVisible(visible + 3)}
            className="btn btn-primary "
          >
            Load More
          </button>
        </div>
      ) : visible > 6 ? (
        <div className="flex justify-center">
          <button
            onClick={() => setVisible(Math.max(6, visible - 6))}
            className="btn btn-primary "
          >
            Less
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Skills;
