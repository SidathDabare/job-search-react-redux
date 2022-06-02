import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import CartIndicator from './CartIndicator'

class MainSearch extends Component {
  state = {
    query: '',
    jobs: [],
  }

  baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(
      this.baseEndpoint + this.state.query + '&limit=20'
    )

    if (!response.ok) {
      alert('Error fetching results')
      return
    }

    const { data } = await response.json()
    this.setState({ jobs: data })
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
                <CartIndicator xs={3} />
              </Form>

            </Row>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.state.jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainSearch