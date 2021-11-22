import React, { useEffect, useState } from "react";
const Autocomplete = ({ lang, updateRoute }) => {
  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);
  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = lang
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
  };

  const suggestedText = (value) => {
    console.log(value);
    setSearchtext(value);
    setSuggest([]);
  };

  useEffect(() => {
    updateRoute({current:{value:searchtext,name:'location'}})
  },[searchtext])

  const getSuggestions = () => {
    if (suggest.length === 0 && searchtext !== "" && !resfound) {
    }

    return (
      <ul className={searchtext ? 'd-block' : 'd-none'}>
        {suggest.map((item, index) => {
          return (
            <div key={index} className="d-flex align-items-center w-100 hover-color">
              <li onClick={() => suggestedText(item)}>{item}</li>
              {index !== suggest.length - 1 && <hr />}
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="searchcontainer">
      <input
        type="text"
        placeholder="Ingresá ubicación, barrio o palabra clave"
        className="search"
        value={searchtext}
        onChange={handleChange}
      />
      {getSuggestions()}
    </div>
  );
};
export default Autocomplete;
