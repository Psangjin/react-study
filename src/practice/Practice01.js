import {useState} from 'react';


function Practice01() {

    //let even= 0;
    let [even, setEven] = useState(0);


    return(
        <div className ='App'>
            
            <button onClick ={()=>{
                //버튼 눌렀을 떄 실행할 코드
                setEven(even+ 2);
                // setEven(Number(even)+ 2); 숫자로 바꾸기
                console.log('even: '+ even);
            }}>짝수출력</button>
            { // 0 일 때 안보이게 하기.
            even != 0 && <span style={{color:'red'}}>{even}</span>
            }
            
        </div>
    )
}

export default Practice01;