import {Button, Col, Form, Row} from "react-bootstrap";
import {Component} from "react";

class SearchRecord extends Component{
    constructor(props) {
        super(props);
        this.state = {
            StudentID: "",
        }
    }

    onInputChange = (e) => {
        const {id, value} = e.target;
        this.setState({
            [id]: value
        })
    }

    render() {
        return (
            <div>
                    <Form className="justify-content-center">
                        <Form.Group as={Row}>
                            <Col>
                                <h3>Attendance Record</h3>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="StudentID">
                            <Col>
                                <Form.Control
                                    required
                                    placeholder="Enter Student ID"
                                    type="input"
                                    onChange={this.onInputChange}
                                />
                            </Col>
                        </Form.Group>
                        <Button
                            type="submit" variant="primary">Search</Button>
                    </Form>
                </div>
        );
    }
}

export default SearchRecord