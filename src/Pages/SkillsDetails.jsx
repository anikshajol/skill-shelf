import { FaBookmark } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../Context/Context";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../utilities/localstorage";
import NotFound from "./NotFound";
import useAuth from "../hooks/useAuth";

const SkillsDetails = () => {
  // const [skills, setSkills] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  const { setSaveSkill, saveSkill } = useAuth();
  // const [bookmarked, setBookmarked] = useState(false);
  //   console.log(id);
  //   console.log(skills);
  // useEffect(() => {
  //   const skillData = data.find(
  //     (skill) => parseFloat(skill.id) === parseFloat(id)
  //   );
  //   setSkills(skillData);
  // }, [data, id]);

  const skills = data.find((skill) => Number(skill.id) === Number(id));
  // setSaveSkill(skills);
  if (!skills) return <NotFound />;
  const handleSaveSkill = () => {
    // console.log("click", skills.id);
    const skill = {
      id: skills.id,
      title: skills.title,
      photo: skills.thumbnail,
    };
    addToLocalStorage(skill);
    setSaveSkill(getFromLocalStorage());
  };
  const bookmarked = saveSkill.some((item) => item.id == skills.id);

  return (
    <div className="card bg-base-100 w-1/2 mx-auto shadow-sm">
      <figure>
        <img src={skills.thumbnail} alt={skills.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{skills.title}</h2>
        <p>{skills.description}</p>
        <div className="card-actions justify-end">
          <button onClick={handleSaveSkill} className="btn">
            {bookmarked ? <FaBookmark color="red" /> : <FaBookmark />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;
