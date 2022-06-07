import { Component } from 'react'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import Job from './Job'
import ListIndicator from './ListIndicator'
import { connect } from 'react-redux'
import { getJobsAction, jobsLoading } from '../redux/actions'


const mapStateToProps = (state) => {
  console.log(state);
  return {
    jobsFromRedux: state.jobSearch.jobs, // <-- the array of books from the redux store
    errorFetching: state.error,
    isLoading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getJobs: (query) => {
      dispatch(getJobsAction(query))
    },
    // isLoading: () => {
    //   dispatch(jobsLoading())
    // }
  }
}


class MainSearch extends Component {
  state = {
    query: '',
    jobs: [],
    isLoading: true
  }

  // componentDidMount = async () => {
  //   // previously here I was doing the fetch and saving the books locally...
  //   // ...now I'll dispatch the action creator here! getBooks
  //   this.props.getJobs()
  // }
  // state = {
  //   query: '',
  //   jobs: [],
  //   jobSelected: null,
  // }

  // baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.getJobs(this.state.query)

    // const response = await fetch(
    //   this.baseEndpoint + this.state.query + '&limit=20'
    // // )
    // if (!response.ok) {
    //   alert('Error fetching results')
    //   return
    // }
    // const { data } = await response.json()
    // this.setState({ jobs: data })
  }

  render() {

    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
          </Col>

          <Col xs={10} className="mx-auto">
            <Row xs={10}>
              <Form style={{ flexGrow: '1', display: "flex" }} onSubmit={this.handleSubmit}>
                <Form.Control
                  type="search"
                  value={this.state.query}
                  onChange={this.handleChange}
                  placeholder="type and press Enter"
                />
                <ListIndicator xs={3} />
              </Form>

            </Row>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.props.isLoading && <Spinner animation="border" variant="secondary" />}
            {this.props.jobsFromRedux.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)