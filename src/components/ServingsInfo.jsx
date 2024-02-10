const ServingsInfo = (props) => {
  const { nutrient } = props;

  return (
    <div className="row servings-info">
      <p className={"title-desc"}>{"Serving Size"}</p>
      <div>
        {nutrient.amount.length > 0 &&
          nutrient.amount.map((amt) => (
            <p className="title-desc">{`${amt.value} ${amt.unit}`}</p>
          ))}
      </div>
    </div>
  );
};

export default ServingsInfo;
