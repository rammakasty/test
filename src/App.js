import styled from 'styled-components';

const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.borderColor};
    margin: 20px;
    display: inline-flex;
`;

function App() {
    return (
        <>
            <StBox borderColor="red">박스</StBox>
            <StBox borderColor="blue">박스</StBox>
            <StBox borderColor="green">박스</StBox>
        </>
    );
}

export default App;
