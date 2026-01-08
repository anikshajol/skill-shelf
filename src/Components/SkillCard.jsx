import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={skill.thumbnail} alt={skill.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{skill?.title}</h2>
        <p>
          {skill.description.length > 90 &&
            skill.description.slice(0, 90) + "..."}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/skills/${skill.id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
