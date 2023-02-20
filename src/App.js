import styled from 'styled-components';

const StBox = styled.div`
    width: 500px;
    height: 100px;
    border: 1px solid ${(props) => props.borderColor};
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;
`;

function App() {
    return (
        <>
            <h1>모두의 투두리스트</h1>
            <hr />
            <div>무엇을 할까요</div>
            <StBox borderColor="red">박스</StBox>
            <StBox borderColor="blue">박스</StBox>
            <StBox borderColor="green">박스</StBox>
        </>
    );
}

export default App;
