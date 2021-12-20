import Right from "../assets/img/right-arrow.png";
import Left from "../assets/img/left-arrow.png";

interface PaginationProps {
  page: number;
  onClick: () => void;
}

const PaginationButton: React.FC<PaginationProps> = ({ page, onClick }) => {
  
  return (
    <ul className="flex flex-row items-center w-max mx-auto my-4">
      {/* {page !== 1 && (
        <li className="mx-1 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <button className="flex flex-row-reverse font-poppins" onClick={onClick}>
            previous{" "}
            <img className="w-5 h-5 mr-2 self-center" src={Left} alt=">" />
          </button>
        </li>
      )} */}
      <label className="text-lg text-left mx-2 hover:underline hover:border-b-2">
        {page}
      </label>
      <li className=" mx-1 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
        <button className="flex font-poppins" onClick={onClick}>
          next <img className="w-5 h-5 ml-2 self-center" src={Right} alt=">" />
        </button>
      </li>
    </ul>
  );
};

export default PaginationButton;
