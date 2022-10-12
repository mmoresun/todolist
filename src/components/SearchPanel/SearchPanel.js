import React from "react";
import "./SearchPanel.css";

const SearchPanel = ({ onChange, handleDoneChange, handleFavChange, favChecked, doneChecked }) => {

  const handleSearchChange = (event) => {

    onChange(event.target.value)
  }

  return (

    <div className="searchpanel__main">

      <div className="searchpanel__main-wrapper">

        <div className="searchpanel__main_check">

          <i

            className={doneChecked

              ? "fa-regular fa-square fa-lg"
              : 'fa-regular fa-square-check fa-lg'}
            onClick={() => handleDoneChange()}
          />

          <p
            onClick={() => handleDoneChange()}
          >Show incomplete</p>

          <i
            className={!favChecked

              ? "fa-regular fa-square fa-lg"
              : 'fa-regular fa-square-check fa-lg'}
            onClick={() => handleFavChange()}
          />

          <p
            onClick={() => handleFavChange()}
          >Show favorites</p>

        </div>

        <form>

          <input

            id="standartInput"
            type="text"
            placeholder="Start search here"
            onChange={handleSearchChange}
          />

        </form>

      </div>

    </div>
  );
};

export default SearchPanel;
