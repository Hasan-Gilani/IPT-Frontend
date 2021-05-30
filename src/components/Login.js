import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import SHA512 from 'crypto-js/sha512'
import {Button, Form, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import "../styles/login.css"
import {LoginTeacher} from "../requests/login";


const Login = () => {
    const history = useHistory()
    const [teacherID, setTeacherID] = useState()
    const [teacherPass, setTeacherPass] = useState()
    const [courseCode, setCourseCode] = useState()
    const [feedback, setFeedBack] = useState()


    useEffect(() => {
        setTimeout(() => {
            setFeedBack('')
        }, 10000)
    }, [feedback])


    const submitForm = (e) => {
        e.preventDefault()
        const data = {
            tid: teacherID,
            cid: courseCode,
            pass: SHA512(teacherPass).toString()
        }

        LoginTeacher(data)
            .then(response => {
                console.log(response)
                if(!response.success){
                    setFeedBack(response.message)
                }
                else{
                    window.localStorage.setItem("tid", JSON.stringify(teacherID))
                    window.localStorage.setItem("cid", JSON.stringify(courseCode))
                    window.localStorage.setItem("name", JSON.stringify(response.name))
                    history.push({
                        pathname: 'Dashboard',
                    });
                }
            })
    }
    return (
        <div>
            <Form className="Form" onSubmit={submitForm}>
                <Form.Group as={Row}>
                    <Col>
                        <h1>Teacher Login</h1>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="teacherID">
                    <Col>
                        <Form.Control
                            required
                            placeholder="Enter Teacher ID"
                            type="input"
                            onChange={e => setTeacherID(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="courseCode">
                    <Col>
                        <Form.Control required
                                      type="input"
                                      placeholder="Enter Course Code"
                                      onChange={e => {setCourseCode(e.target.value)}}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="teacherPass">
                    <Col>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter Password"
                            onChange={e => {setTeacherPass(e.target.value)}}
                        />
                    </Col>
                </Form.Group>
                <Button type="submit" variant="primary">Login</Button>
                <div className='text-danger' style={{fontStyle: "italic", fontSize: "16px"}}>
                    {feedback}
                </div>
            </Form>
        </div>
    )
}

export default Login;