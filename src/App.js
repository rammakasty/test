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
    border-radius: 10px;
`;

function App() {
    return (
        <>
            <div></div>
            <h1>모두의 투두리스트</h1>
            <hr />
            <div>무엇을 할까요</div>
            <StBox borderColor="red">
                <div>할일 기록하기</div>
                <div>123</div>
            </StBox>
            <StBox borderColor="blue">
                <div>TODO LIST</div>
                <div>123</div>
            </StBox>
        </>
    );
}

export default App;
