import React from 'react';
import Styled from 'styled-components';

const Search = Styled.div`
    height:100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:500px;
    background-color: #F6F6E5;
`
const StyledSearch = Styled.input`
    border: 1px solid grey;
    background-color: #fff;
    border-radius: 50px;
    width: 450px;
    height: 30px;
    margin-left:200px;
    margin-right:50px;
`
const StyledSubmit = Styled.button`
    background-color:#1F869C;
    color: #fff;
    width: 100px;
    height: 30px;
    border-radius: 50px;
    &:hover{
      background-color: #DE7E2A;
    }
`

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
    };

    return (
        <Search>
        <form onSubmit={handleSubmit}>
            <StyledSearch type="text" value={searchTerm} onChange={handleInputChange} />
            <StyledSubmit type="submit">Search</StyledSubmit>
        </form>
        </Search>
    );
};

export default SearchBar;
