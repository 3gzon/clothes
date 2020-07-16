import React, { Component } from 'react'
import SHOP_DATA from "./shop.data"
import PreviewCollection from '../../components/preview-collection/preview-collection'
export default class shop extends Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
