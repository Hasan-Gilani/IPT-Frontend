import {Component} from "react";

class AttendanceTable extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>This will be a live table where student IDs who scan there QRCodes will be shown
                    Immediately
                </h2>
            </div>
        );
    }
}

export default AttendanceTable