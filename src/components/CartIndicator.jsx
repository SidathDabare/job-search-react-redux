import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

// we need to write mapStateToProps for EVERY component we want to empower with read access to the redux store
// mapStateToProps is a function: it will return an OBJECT
// it is called mapStateToProps because every PROPERTY in this object
// will become a PROP for CartIndicator
const mapStateToProps = (state) => {
    return {
        //cartLength: state.cart.content.length,
        favourites: state.favourites.content.length
    }
}

const CartIndicator = ({ favourites }) => {
    const navigate = useNavigate()

    return (
        <div className="w-25 ml-2" >
            <Button onClick={() => navigate('/Favourites')}>
                Favourite List
                <span className="ml-2">{favourites}</span>
            </Button>
        </div>
    )
}

export default connect(mapStateToProps)(CartIndicator)