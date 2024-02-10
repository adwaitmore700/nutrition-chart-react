import ServingsInfo from "./ServingsInfo";
import data from "../data.json";

const NutritionHeader = () => {
  const servings = data["serving"];
  return (
    <div className="nutrition-header">
      <p className="header">Nutrition Facts</p>
      <hr />
      <label className="sub-title">{`${servings.countPerContainer} servings per container`}</label>
      <ServingsInfo nutrient={data["serving"]} />
      <hr className="servings-hr" />
    </div>
  );
};

export default NutritionHeader;
