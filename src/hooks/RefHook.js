import React,{useState, useRef} from 'react';

const RefSample = () => {
    //state생성
    const [stateNum, setStateNum] = useState(0);
    //ref생성
    const refNum = useRef(0);  //{current : 0}
    //변수생성
    let varNum = 0;
    //변수 수정함수 구현
    const addLet = () => {
        varNum = varNum + 1;
        console.log(varNum)
    }
    //ref수정 함수 구현
    const addRef = () => {
        refNum.current = refNum.current+1
    }
    //setState호출함수구현
    const addState = ()=> {
        setStateNum(stateNum +1)
    }
    return (
        <div>
            <p>state:{stateNum} </p>
            <p>Rfe: {refNum.current}</p>
            <p>let: {varNum}</p>
            <button onClick={addState}>State+1</button>
            <button onClick={addRef}>Ref+1</button>
            <button onClick={addLet}>let+1</button>
        </div>
    );
};

export default RefSample;
