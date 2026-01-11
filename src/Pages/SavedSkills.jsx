import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import SavedSkillCard from "../Components/SavedSkillCard";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "../utilities/localstorage";
// import { getFromLocalStorage } from "../utilities/localstorage";

const SavedSkills = () => {
  const { saveSkill, setSaveSkill } = useContext(AuthContext);
  // console.log(saveSkill);
  const handleDelete = (id) => {
    deleteFromLocalStorage(id);
    // addToLocalStorage(skill);
    setSaveSkill(getFromLocalStorage());
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-6 ">
      {saveSkill.map((skill) => (
        <SavedSkillCard
          key={skill.id}
          handleDelete={handleDelete}
          skill={skill}
        />
      ))}
    </div>
  );
};

export default SavedSkills;
