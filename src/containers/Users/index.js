import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container,Header, List, Image } from 'semantic-ui-react';
import { getUsers } from '../../actions';

class Users extends Component {

    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        return (
            <Container>
                <Header>User List</Header>
                <List divided relaxed>
                    { this.props.users && this.props.users.map((item, index) => (
                        <List.Item>
                            <Image src={item.avatar} size='small'></Image>
                            {item.first_name} {item.last_name}
                      </List.Item>
                    )) }
                </List>
            </Container>
        );
    }
}

const mapStateToProps = ( {users} ) => {
    return {
        users: users.users
    }
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

//TODO: Add PropTypes