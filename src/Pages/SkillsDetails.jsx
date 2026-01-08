import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const SkillsDetails = () => {
  const [skills, setSkills] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  //   console.log(id);
  //   console.log(skills);
  useEffect(() => {
    const skillData = data.find(
      (skill) => parseFloat(skill.id) === parseFloat(id)
    );
    setSkills(skillData);
  }, [data, id]);

  return (
    <div className="card bg-base-100 w-1/2 mx-auto shadow-sm">
      <figure>
        <img src={skills.thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{skills.title}</h2>
        <p>{skills.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <FaBookmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;
