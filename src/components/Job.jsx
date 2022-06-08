import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { addToCartActionWithThunk } from '../redux/actions'
import { useDispatch } from 'react-redux'
// const mapStateToProps = (state) => {
//   return {

//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addtoFavourite: (company) => {
//       dispatch({
//         type: ADD_TO_FAVOURITES,
//         payload: company,
//       })
//     },
//   }
// }

const Job = ({ data }) => {
  // const [state, setState] = useState([])
  // console.log(state);
  const dispatch = useDispatch()

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex justify-content-between">
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button onClick={() => {
          console.log(data.company_name)
          // addtoFavourite(data.company_name)
          dispatch(addToCartActionWithThunk(data.company_name))

        }}
        >Add to Favourite</Button>
      </Col>
    </Row>
  )
}



export default Job