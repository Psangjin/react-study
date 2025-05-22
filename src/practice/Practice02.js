
import {useState} from 'react';




function Practice02(){

  //usestate -> state변수 : 재렌더링발생, 데이터값 유지
    let textArr = ["하나", "둘", "셋"];
    let [index, setIndex] = useState(0);

    return(
    <div className ='App'>
        <p>{textArr[index]}</p>

        <button onClick = {()=>{
            // index++;
            // setIndex(index = index % textArr.length);
            let temp = index;
            temp++;

            if(temp == textArr.length)
                temp = 0;
            setIndex(temp);
            console.log("index: " + index);

        }}>변경버튼</button>
    </div>
    )


    // ver1
    // let [text, setText] = useState("하나");
    // return( 
    //     <div className ='App'>
    //         <p>{text}</p>

    //         <button onClick = {()=>{
    //             // setText(text);  setText(매개변수)
    //             if(text == '하나')
    //                 setText('둘');
    //             else if(text == '둘')
    //                 setText('셋');
    //             else
    //                 setText('하나');
    //             console.log("text: " + text);
    //         }}>변경버튼</button>

    //     </div>

    

}

export default Practice02;