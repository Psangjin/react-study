
function Box({title,content}) {   // 여기에서의 props는 객체타입 매개변수
        
    //props = {title: '저녁', content: '삼겹살'}    java객체 생성자

    return (
        <div style = {{backgroundColor:'gray', border: '1px solid black'}}>
            {/* <h1>title</h1> */}
            {/* <p>content</p> */}
            
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )

}



/*
function Box(props) {   // 여기에서의 props는 객체타입 매개변수
        
    //props = {title: '저녁', content: '삼겹살'}    java객체 생성자

    return (
        <div style = {{backgroundColor:'gray', border: '1px solid black'}}>
            
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )

}
*/

export default Box;