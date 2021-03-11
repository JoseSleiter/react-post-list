import SearchField from "./../../molecules/SearchField/SearchField";
import AddModal from "../../molecules/AddModal/AddModal";

const HeaderTable = () => {
  return (
    <div className="HeaderTable flex-section flex-btw">
      <SearchField></SearchField>
      <AddModal></AddModal>
    </div>
  );
};

export default HeaderTable;
