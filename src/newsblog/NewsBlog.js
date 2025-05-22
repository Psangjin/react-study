import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';


function NewsBlog () {
    
    let title = "React Study"
    
    let [news1, setNews1] = useState(['Today News','오늘의 뉴스']);

    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    let [num, numSet] = useState(0);
    let [num1, numSet1] = useState(0);
    let [num2, numSet2] = useState(0);

    let [numArr, numSetArr] = useState( [0,0,0] );
    
    let [showModal, setshowModal] = useState(false);

    let [selectedTitle, setselectedTitle] = useState('');
    
    return (

        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{color: "orange", fontSize: '20px'}}>{title}</p>
            </div>
            
            <div className='post-list'>
                {/* <h4>{news1}</h4> */}

                <h4 onClick={()=>{
                    if(showModal)
                        setshowModal(false);
                    else
                        setshowModal(true);

                        setselectedTitle(news[0]);

                }}>{news[0]}<span onClick={()=>{
                    let temp = [...numArr];
                    temp[0] += 1;
                    numSetArr(temp);
                }} style={{color:'red'}}>❤</span>{numArr[0]}</h4>
                <p>내용 무</p>          

                {/*
                <h4>{news[0]}<span onClick={()=>{
                    numSet(num+1);
                }}>❤</span>{num}</h4>
                <p>내용 무</p>
                <button onClick={()=>{
                    let temp = [...news];       // ... 임시변수에 완전복제 새로운 렌더링
                    temp[0] = 'Today News';         // 
                    setNews(temp);
                    
                }}>제목 변경</button>
                */}
            </div>
            <div className='post-list'>
                {/* <h4>{news2}</h4> */}
                <h4 onClick={()=>{
                    
                        setshowModal(!showModal);
                        setselectedTitle(news[1]);

                }}>{news[1]}<span onClick={()=>{
                    let temp = [...numArr];
                    temp[1] += 1;
                    numSetArr(temp);
                }} style={{color:'red'}}>❤</span>{numArr[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                {/* <h4>{news3}</h4> */}
                <h4 onClick={()=>{
                    if(showModal)
                        setshowModal(false);
                    else
                        setshowModal(true);
                        setselectedTitle(news[2]);

                }}>{news[2]}<span onClick={(event)=>{
                    event.stopPropagation();        //Propagation 전파하다 이벤트 전파되는 것 막겠다.
                    // 속해있는 부모 요소의 이벤트 처리까지 전파되는것을 막아줌.
                    // <h4><span>h4안에 span 태그가 있으니 모두 속했는데</span></h4>
                    let temp = [...numArr];
                    temp[2] += 1;
                    numSetArr(temp);
                }} style={{color:'red'}}>❤</span>{numArr[2]}</h4>
                <p>내용 무</p>
                
            </div>           

            {    
                // showModal == true ? <Modal/> : null
                showModal && <Modal title = {selectedTitle}/>

            }    
            
        </div>
    );
}

export default NewsBlog;