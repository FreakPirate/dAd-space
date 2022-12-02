import { Menu } from "antd";
import styled from "styled-components";


function App() {
  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
      children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
  ];
  return (
    <StyledApp>
      <Menu
        theme={'dark'}
        style={{
          width:256,
          height:'100vh',
        }}
        mode="inline"
        items={items}
      />
    </StyledApp>
  );
}

const StyledApp = styled.div`
    background-color: rgb(23 23 23/1);
    height:100vh;
    width:100vw;
    color: #ffffff;
`;
export default App;
