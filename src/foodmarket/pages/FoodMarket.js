import './FoodMarket.css';
import {Nav, Container, Navbar,Row, Col, Card, Button} from 'react-bootstrap';

import banner_bg from '../images/banner_bg.jpg';
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';

function FoodMarket () {

    return(
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">FoodDetail</Nav.Link>
                        <Nav.Link href="#pricing">Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*
                이미지 사용//

                1) css 처리 : 이미지 경로로 사용
                2) React Component js코드에서 처리 : import 한 이후에 사용 가능
                3) public 폴더에 이미지 저장 후, 서버 경로로 접근해서 사용
                    src='/images/food1.jpg'

                *권장 방식
                src={process.env.PUBLIC_URL + '/images/food2.jpg'} /> 서버 경로가 바뀌는 것의 대안

                * 기본 서비스 경로 루트 경로 (/)
                서버주소 : 포트번호 /

                package.jdon > homepage 필드 설정 들어가면 시작 지점을 바꿀 수 있다.
                빌드 관리. "homepage ":" / foodmarket"  권장 방식으로 안하면 바뀔 때마다 수정해야함


            */}
            {/* <img src={banner_bg}/> 직접 이미지 태그 출력 가능*/} 

            {/* <div className='main-bg' style={{backgroundImage: 'url(' + banner_bg + ')' }}></div> */}
            <div className='main-bg'></div>

            <Container>
                <Row>
                    <Col md={4} sm={6}>

                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src={food1} /> */}
                            <Card.Img variant="top" src='/images/food1.jpg' />
                            <Card.Body>
                                <Card.Title>냠냠</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>       


                    <Col md={4} sm={6}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL +'/images/food2.jpg'} />
                            <Card.Body>
                                <Card.Title>튀튀</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>       



                    <Col md={4} sm={6}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>벅벅</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>       
                </Row>
            </Container>








        </div>

        
    )

}

export default FoodMarket;