const Card = ({ data }) => {
  console.log(data);
  const { picture, category, title, card_bg, category_bg, color_bg } = data;
  return (
    <div className={`bg-[${card_bg}] rounded-md`}>
      <img className="w-full" src={picture} alt="not found" />
      <div className="p-3">
        <h2
          className={`text-[${color_bg}] bg-[${category_bg}] inline-block px-3 rounded-lg`}
        >
          {category}
        </h2>
        <p className={`text-[${color_bg}] font-semibold`}>{title}</p>
      </div>
    </div>
  );
};

export default Card;
