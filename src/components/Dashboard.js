import {Component, useEffect, useState} from "react";
import {Navbar, Nav, Button, Image, Container, Row, Col} from "react-bootstrap";
import person from "./person.png"
import {ImQrcode, RiUserSearchFill, BsFillPeopleFill} from "react-icons/all";
import QrCode from "./QrCode";
import SearchRecord from "./SearchRecord";
import AttendanceTable from "./AttendanceTable";
import {useHistory, useLocation} from "react-router";



const Dashboard = () => {

    const history = useHistory();

    let {name} = localStorage;
    name = name.replace('"', '')
    name = name.replace('"', '')
    const [component, setComponent] = useState();
    const onLogoutClick = () => {
        history.push({
            pathname: '/'
        });
    }
        return (
            <div>
                    <Navbar bg="dark" variant="dark" className="container-fluid">
                        <a href="#"><Image width="45" height="45"  roundedCircle src={person}/></a>
                        <Nav className="mr-auto">
                            <Nav.Item style={{color: "white", marginLeft: "15px"}} href="#home">{name}</Nav.Item>
                        </Nav>
                            <Button onClick={onLogoutClick} variant="outline-danger">Logout</Button>
                    </Navbar>
                    <Container fluid style={{ paddingLeft: 0, paddingRight: 0}}>
                        <Row md={12}>
                            <Col md={1} style={{backgroundColor: "#343a40"}}>

                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Row md={4} className="d-flex justify-content-md-center">
                                    <Col xs={6} md={8} >
                                        <a href="#"
                                           onClick={e => {setComponent(<AttendanceTable/>)}}
                                        >
                                            <BsFillPeopleFill size="4em" style={{color: "grey"}}/></a>
                                    </Col>
                                </Row>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>


                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                            </Col>
                            <Col md={8} className="d-flex justify-content-center">
                                {component}
                            </Col>
                        </Row>




                    </Container>
            </div>
        );
}

export default Dashboard;