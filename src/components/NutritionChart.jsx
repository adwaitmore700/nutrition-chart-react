import CaloriesHeader from "./CaloriesHeader";
import DailyValueInfo from "./DailyValueInfo";
import NutritionHeader from "./NutritionHeader";
import NutritionTable from "./NutritionTable";
import "../styles/styles.css";

const NutritionChart = () => {
  return (
    <div className="main-container">
      <NutritionHeader />
      <CaloriesHeader />
      <p className="dailyValueHeader">{"% Daily Value*"}</p>
      <NutritionTable />
      <DailyValueInfo />
    </div>
  );
};

export default NutritionChart;
