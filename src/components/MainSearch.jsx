import { useState } from 'react'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import Job from './Job'
import ListIndicator from './ListIndicator'
import { getJobsAction } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'


// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     jobsFromRedux: state.jobSearch.jobs, // <-- the array of books from the redux store
//     errorFetching: state.error,
//     isLoading: state.loading,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getJobs: (query) => {
//       dispatch(getJobsAction(query))
//     },
//     // isLoading: () => {
//     //   dispatch(jobsLoading())
//     // }
//   }
// }


const MainSearch = () => {

  // state = {
  //   query: '',
  //   jobs: [],
  //   isLoading: true
  // }
  const [query, setQuery] = useState('')
  const jobs = useSelector((state) => state.jobSearch.jobs)
  const loading = useSelector((state) => state.loading)

  const dispatch = useDispatch()

  let handleChange = (e) => {
    setQuery(e.target.value)
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }



  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>

        <Col xs={10} className="mx-auto">
          <Row xs={10}>
            <Form style={{ flexGrow: '1', display: "flex" }} onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter"
              />
              <ListIndicator xs={3} />
            </Form>

          </Row>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading && <Spinner variant="success" animation="border" />}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )

}

export default MainSearch