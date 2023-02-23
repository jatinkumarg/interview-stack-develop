import React from 'react';
import { DraggableProductItemProps } from '../interfaces';

const DraggableProductItem = (props: DraggableProductItemProps) => (
    <div
        ref={props.draggableProvided.innerRef}
        {...props.draggableProvided.draggableProps}
        {...props.draggableProvided.dragHandleProps}
        className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full'
        data-testid={`draggable-container-${props.ProductID}`}
    >
        <span data-testid={`draggable-productID-${props.ProductID}`}>#{props.ProductID}</span>
        <img data-testid={`draggable-productPhotoUrl-${props.ProductID}`} src={`${props.ProductPhotoURL}`} alt={`${props.ProductPhotoURL}`} className='h-48 w-48'></img>
        <span data-testid={`draggable-productName-${props.ProductName}`}>{props.ProductName}</span>
    </div>
);

export default DraggableProductItem;