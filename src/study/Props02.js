import Box from "./Box";
import {useState} from "react";

function Props02 (){ //매개변수

    // 데이터 변경 -> 변경된데이터가 유ㅜ지 -> 화면에 표시
    // 재렌더링에서도 데이터 유지
    // 상태변수(state)

    // let titleArr = ['아침', '점심', '저녁', '야식']
    // let contentArr = ['시리얼', '햄버거', '삼겹살','치킨']

    let[titleArr, setTitleArr] = useState(['아침', '점심', '저녁', '야식']);
    let[contentArr, setContentArr] = useState(['시리얼', '햄버거', '삼겹살','치킨']);
    
    return(
        <div>
            <p></p>
            <button onClick={()=>{
                // setTitleArr(['아침', '점심', '저녁', '야식','추가야식']);
                // setContentArr(['시리얼', '햄버거', '삼겹살','치킨','곱창']);
                // titleArr.push('추가야식');
                // contentArr.push('곱창');
                // console.log(titleArr);
                // console.log(contentArr);

                // setTitleArr(titleArr);
                // setContentArr(contentArr);

                // let temp titleArr; // 얕은 복사
                // let temp = [...titleArr, '추가야식'];
                if(titleArr.length <7 ){

                let temp = [...titleArr];
                temp.push('추가야식');
                setTitleArr(temp); //새로운 주소의 배열일 일어남 -> state변수 값 바뀜 인식 -> 재렌더링
                
                contentArr.push('곱창');
                }
                //얕은복사(주소만복사) 깊은복사(값까지 통째로)

            }}>컴포넌트추가</button>

            {/* Box 컴포넌트에 매개변수 전달*/}
            
            {
                titleArr.map( (item, index)=>{
                    return <Box title={titleArr[index]} content={contentArr[index]}/>;
                })
            }

            

            {/* <Box title='아침' content='시리얼'/>   Box 컴포넌트에 매개변수 전달
            <Box title='점심' content='햄버거'/>
            <Box title='저녁' content='삼겹살'/>
            <Box title='야식' content='치킨'/> */}
        </div>
        
    );
}

export default Props02;