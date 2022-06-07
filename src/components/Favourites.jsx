import React from 'react'
import { Col, Button, Row, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { REMOVE_FROM_FAVOURITES } from '../redux/actions'

const mapStateToProps = (state) => {
    console.log(state);
    return {
        favourites: state.favourites.content,

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromList: (indexToRemove) => {
            dispatch({
                type: REMOVE_FROM_FAVOURITES,
                payload: indexToRemove,
            })
        },
    }
}


const Favourites = ({ favourites, removeFromList }) => {
    console.log(favourites)
    return (
        <Row>
            <Col sm={10} className="mx-auto">

                <h4>Favourites List</h4>
                <ListGroup >
                    {favourites.map((company, i) => (
                        <ListGroup.Item key={i} className="d-flex justify-content-between">
                            <Link to={`/${company}`}>{company}</Link>
                            <Button style={{ margin: '2px' }} variant="danger" onClick={() => { removeFromList(i) }} >
                                Remove
                            </Button>

                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)