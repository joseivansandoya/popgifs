import React from 'react';
import styled from 'styled-components';

const SearchPanelWrapper = styled.div`
  margin-bottom: 30px;

  p {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
  }
  input {
    border: solid #391962 3px;
    background: #d8d8d8;
    padding: 10px;
    font-size: 16px;
    width: 75%;
    margin-right: 2%;
  }
  button {
    color: #FFFFFF;
    background-color: #391962;
    font-size: 16px;
    border: none;
    padding: 13px 0;
    text-align: center;
    width: 20%;
    cursor: pointer;
  }
  button:hover {
    background-color: #5c2674;
  }
`;

function SearchPanel (props) {
  return (
    <SearchPanelWrapper>
      <p>Search your interests</p>
      <div>
      <input type='text' name='q'
        placeholder='Search any GIF'
        value={props.query}
        onChange={props.handleInputChange}
        onKeyDown={props.handleInputKeyDown} />

      <button type="button" onClick={props.handleSearch}>Search</button>
      </div>
    </SearchPanelWrapper>
  )
}

export default SearchPanel;
