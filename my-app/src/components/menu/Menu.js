import React from 'react';
import {Nav} from "react-bootstrap";

function Menu(props) {
    return (
        <div>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/">Main Page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/users">Users Page</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Menu;