import data from "../data.json";
import MainNutrientsInfo from "./MainNutrientsInfo";

const NutritionTable = () => {
  const table = [];
  Object.keys(data).forEach((nutrient) => {
    if (nutrient === "serving") {
      // do nothing
    } else if (nutrient === "others") {
      table.push(<hr className="other-hr"/>);
      data[nutrient].forEach((n) => {
        table.push(<MainNutrientsInfo nutrient={n} isSubNutrient={true} />);
      });
    } else {
      table.push(<MainNutrientsInfo nutrient={data[nutrient]} />);
    }
  });
  return (
    <>
      {table}
      <hr className="table-hr"/>
    </>
  );
};

export default NutritionTable;
