import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item'
import './collection.scss'

const CollectionPage = ({ collection }) => {
    console.log(collection)
    return (
        <div className="collection">
            <h1>Collection</h1>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)

