import { useSelector } from "react-redux";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const CoinsListHeaderArrow = ({ btnName }) => {
  const {
    sort: { value, name },
  } = useSelector((state) => state.main);
  return (
    <span>
      {value === true && name === btnName ? (
        <BsArrowUpShort />
      ) : value === false && name === btnName ? (
        <BsArrowDownShort />
      ) : null}
    </span>
  );
};
export default CoinsListHeaderArrow;
