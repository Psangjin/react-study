import './Basic01.css';

function Basic01(){

    let msg = "안녕~";          //return 내부 제외하고는 js코드 사용가능
    let state = "배가 고프다"
    let flag = false;       //true , false

    let hi = "";
    for ( let i=0; i<5; i++){
        hi += "hi~";
    }

    // return 내부에는 if문 사용불가
    return (
        <div className ="App">
            <h1>리엑트 Basic01</h1>
            <p className="font-red">아무거나 글씨</p>
            <p id="pid">p태그 글자</p>
            {
                // 삼항연산자 (if else 와 같은 문 대신 사용)
                flag == true ? <h3>{msg}</h3>: <h3>{state}</h3>
            }
            {
                // && 연산자 활용 (if else 와 같은 문 대신 사용)
                flag && <h3>{msg}</h3>
            }
            {
                
                // flag == false && <h3>{state}</h3>
                !flag && <h3>{state}</h3>   //부정 !
            }

            <h4 style={{color:'green',fontStyle:'italic'}}>{hi}</h4> 
    </div>
);


    //     // if else 로 rturn을 통으로 구분하는 케이스
    //     // if 로 크게 씌워서는 사용가능
    // if(flag){
    //     return (
    //     <div className ="App">
    //         <h1>리엑트 Basic01</h1>
    //         <p className="font-red">아무거나 글씨</p>
    //         <p id="pid">p태그 글자</p>

    //         <h3>{msg}</h3>
    //         <h4 style={{color:'green',fontStyle:'italic'}}>{hi}</h4> 

    //     </div>
    //     );
    //     // retrun (괄호)

    // } else {
    //     return (
    //         <div className ="App">
    //             <h1>{state}</h1>
    //         </div>
    //      )
    // }

        // return 내부 객체 스타일로 입력 가능 {중괄호}
        //  내부에 if문 사용불가 
    // return (
    //     <div className ="App">
    //         <h1>리엑트 Basic01</h1>
    //         <p className="font-red">아무거나 글씨</p>
    //         <p id="pid">p태그 글자</p>

    //         <h3>{msg}</h3>
    //         <h4 style={{color:'green',fontStyle:'italic'}}>{hi}</h4> 

    //     </div>
    // );

    // // 리엑트 컴포넌트에서 return은 최상위 1개 요소로 리턴 
    // return (
    //     <>
    //         <div>
    //             <p>

    //             </p>
    //         </div>
    //     </>
    // );

}

export default Basic01;