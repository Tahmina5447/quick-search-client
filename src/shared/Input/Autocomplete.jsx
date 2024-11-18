import React, { useState, useEffect, useRef } from 'react';
import './Autocomplete.css';

const Autocomplete = ({ suggestions, onInputChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [currentFocus, setCurrentFocus] = useState(-1);
  const autocompleteRef = useRef(null);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    onInputChange(val);
    if (!val) {
      setFilteredSuggestions([]);
      return;
    }
    filterSuggestions(val);
  };

  const handleFocus = () => {
    if (inputValue) {
      filterSuggestions(inputValue);
    } else {
      setFilteredSuggestions(suggestions);
    }
  };

  const filterSuggestions = (val) => {
    const filtered = suggestions.filter(item => item.toUpperCase().startsWith(val.toUpperCase()));
    setFilteredSuggestions(filtered);
    setCurrentFocus(-1);
  };

  const handleKeyDown = (e) => {
    let x = autocompleteRef.current;
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode === 40) {
      setCurrentFocus(currentFocus + 1);
      addActive(x);
    } else if (e.keyCode === 38) {
      setCurrentFocus(currentFocus - 1);
      addActive(x);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1 && x) {
        x[currentFocus].click();
      }
    }
  };

  const addActive = (x) => {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) setCurrentFocus(0);
    if (currentFocus < 0) setCurrentFocus(x.length - 1);
    x[currentFocus]?.classList.add("autocomplete-active");
  };

  const removeActive = (x) => {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  };

  const closeAllLists = (elmnt) => {
    const x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== autocompleteRef.current) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  };

  const handleItemClick = (val) => {
    setInputValue(val);
    setFilteredSuggestions([]);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      closeAllLists(e.target);
    });
  }, []);

  return (
    <div className="autocomplete" style={{ width: '300px' }}>
      <input
        type="text"
        name="autocomplete"
        placeholder="Type something"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        ref={autocompleteRef}
      />
      {filteredSuggestions.length > 0 && (
        <div id="autocomplete-list" className="autocomplete-items">
          {filteredSuggestions.map((item, index) => (
            <div
              key={index}
              className={index === currentFocus ? "autocomplete-active" : ""}
              onClick={() => handleItemClick(item)}
            >
              <strong>{item.substr(0, inputValue.length)}</strong>{item.substr(inputValue.length)}
              <input type="hidden" value={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
