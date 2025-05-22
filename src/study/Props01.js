import Box from "./Box";

function Props01 (){ //매개변수

    let titleArr = ['아침', '점심', '저녁', '야식']
    let contnetArr = ['시리얼', '햄버거', '삼겹살','치킨']

    return(
        <div>
            <p></p>
                {/* Box 컴포넌트에 매개변수 전달*/}
            <Box title={titleArr[0]} content={contnetArr[0]}/>  
            <Box title={titleArr[1]} content={contnetArr[1]}/>
            <Box title={titleArr[2]} content={contnetArr[2]}/>
            <Box title={titleArr[3]} content={contnetArr[3]}/>


            {/* <Box title='아침' content='시리얼'/>   Box 컴포넌트에 매개변수 전달
            <Box title='점심' content='햄버거'/>
            <Box title='저녁' content='삼겹살'/>
            <Box title='야식' content='치킨'/> */}
        </div>
        
    );
}

export default Props01;