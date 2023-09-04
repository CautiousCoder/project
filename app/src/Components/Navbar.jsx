import styled from "styled-components";
// eslint-disable-next-line react/prop-types
const Navbar = ({ searchFood, filterFoods }) => {
  const filterFood = [
    {
      name: "all",
      type: "all",
    },
    {
      name: "breakfast",
      type: "breakfast",
    },
    {
      name: "lunch",
      type: "lunch",
    },
    {
      name: "dinner",
      type: "dinner",
    },
  ];
  return (
    <TopSection>
      <NavbarSection>
        <LogoArea>
          <Logo>
            <img src="./Images/logo.jpg" alt="Logo" />
          </Logo>
          <Search>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Food..."
              onChange={searchFood}
            />
          </Search>
        </LogoArea>
        <Nav>
          <ul>
            {filterFood.map((food, id) => (
              <li key={id} onClick={() => filterFoods(food.type)}>
                {food.name}
              </li>
            ))}
            {/* <li onClick={() => filterFoods("all")}>all</li>
            <li onClick={() => filterFoods("breakfast")}>breakfast</li>
            <li onClick={() => filterFoods("lunch")}>lunch</li>
            <li onClick={() => filterFoods("dinner")}>dinner</li> */}
          </ul>
        </Nav>
      </NavbarSection>
    </TopSection>
  );
};
export default Navbar;

const TopSection = styled.div`
  background: #232334;
`;
const NavbarSection = styled.div`
  width: 91.66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
`;
const LogoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  text-align: center;
  img {
    width: 72px;
    height: 72px;
    border-radius: 20px;
  }
`;
const Search = styled.div`
  gap: 10px;
  input {
    color: white;
    background: #232334;
    border: 1px solid #f332c9;
    border-radius: 5px;
    padding: 8px 12px;
    &::placeholder,
    &::-webkit-input-placeholder {
      color: white;
    }
    &:-ms-input-placeholder {
      color: white;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    align-items: center;
    margin: 0 auto;
    li {
      padding: 8px 20px;
      list-style: none;
      background: #f332c9;
      color: white;
      margin-right: 10px;
      border-radius: 8px;
      text-transform: capitalize;
      cursor: pointer;
    }
  }
`;
