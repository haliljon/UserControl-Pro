import React from "react";
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table'
import Registration from "../components/auth/Registration";

// export default class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
//     }

//     handleSuccessfulAuth(data) {
//         // this.props.handleLogin(data);
//         this.props.history.push("/dashboard");
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Home</h1>
//                 <p>Welcome to the home page!</p>
//                 <h2>Status: {this.props.loggedInStatus}</h2>
//                 {/* <Table striped bordered hover /> */}
//                 <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
//             </div>
//         );
//     }
// }


const Home = (props) => {
    const navigate = useNavigate();
    const handleSuccessfulAuth = (data) => {
        props.handleLogin(data);
        navigate("/dashboard");
    };
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <h2>Status: {props.loggedInStatus}</h2>
            <Table striped bordered hover />
            <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
        </div>
    );
};

export default Home;