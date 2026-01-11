import React from "react";

import { FaDeleteLeft } from "react-icons/fa6";

const SavedSkillCard = ({ skill, handleDelete }) => {
  //   console.log(skill);
  //   const { setSaveSkill } = useContext(AuthContext);

  return (
    <div className="card bg-base-100w-96 shadow-sm">
      <figure className="h-36">
        <img
          className="h-full object-cover w-full rounded-md"
          src={skill.photo}
          alt={skill.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{skill?.title}</h2>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete(skill.id)} className="btn">
            <FaDeleteLeft />
          </button>
        </div>
        {/* <div className="card-actions justify-end">
          <Link to={`/skills/${skill.id}`} className="btn btn-primary">
            Details
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SavedSkillCard;
