import React from 'react'

import './preview-collection.scss'
import CollectionItem from '../collection-item/CollectionItem';

type ItemProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

type PreviewCollectionProps = {
  title: string;
  items: ItemProps[];
}

const PreviewCollection: React.FC<PreviewCollectionProps> = ({title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items.filter((item, index) => index < 4).map((item: any) => ( //returns 4 items
            <CollectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
          ))
        }
      </div>
    </div>
  )
}

export default PreviewCollection
