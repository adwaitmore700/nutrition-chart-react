import { NUTRIENT_TITLE_MAPPINGS } from "../constants";

const MainNutrientsInfo = (props) => {
  const { nutrient, isSubNutrient = false, depth = 0 } = props;

  return (
    <div className="nutrient-info" style={{ paddingLeft: `${depth}rem` }}>
      <div className="row">
        <div className="row" style={{ lineHeight: "1.5rem" }}>
          <div
            className={isSubNutrient ? "" : "nutrient-title"}
            style={{ paddingRight: "0.3rem" }}
          >
            {NUTRIENT_TITLE_MAPPINGS[nutrient.name]}
          </div>
          <div>{`${nutrient.amount.value}${nutrient.amount.unit}`}</div>
        </div>
        <div>{`${nutrient.dailyPercentageValue}%`}</div>
      </div>
      {nutrient.parts.length > 0 &&
        nutrient.parts.map((subNutrient) => (
          <MainNutrientsInfo
            nutrient={subNutrient}
            isSubNutrient={true}
            depth={depth + 1}
          />
        ))}
    </div>
  );
};

export default MainNutrientsInfo;
