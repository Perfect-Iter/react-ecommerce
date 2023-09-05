import React from "react";

import { SHOP_DATA } from "../../data/Shopdata";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

interface ShopState {
    collections: any[];
  }

class Shop extends React.Component<{}, ShopState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render(): React.ReactNode {

        const {collections} = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({id, title, items}) =>(
                        <PreviewCollection key={id} title={title} items={items}  />
                    ))
                }
            </div>
        )
    }

}

export default Shop;