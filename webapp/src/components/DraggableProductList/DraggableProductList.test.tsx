import React from 'react';
import { render, screen } from '@testing-library/react'
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableProductList from './DraggableProductList';
import { Product } from '../interfaces';

describe('DraggableProductList', () => {
    it('rendersDraggableProductList', async () => {
        const ID = '1';
        const props = {
            ID,
            listTitle: 'Test Product List',
            removeProduct: (product: Product) => { },
            items: [
                {
                    ProductID: 1,
                    ProductName: "Hat",
                    ProductPhotoURL: "https://i.ibb.co/85GGy5t/ryan-hoffman-2-BK0-JEw-QSp-Q-unsplash.jpg",
                    ProductStatus: 'Active'
                },
                {
                    ProductID: 2,
                    ProductName: "Shoes",
                    ProductPhotoURL: "https://i.ibb.co/VVcbfnT/shoe.jpg",
                    ProductStatus: 'Active'
                },
                {
                    ProductID: 3,
                    ProductName: "Pants",
                    ProductPhotoURL: "https://i.ibb.co/23PF5Sd/pant.jpg",
                    ProductStatus: 'InActive'
                },
            ],
        };
        render(
            <DragDropContext onDragEnd={() => { }}>
                <DraggableProductList {...props} />
            </DragDropContext>
        );
        expect(screen.getByTestId(`droppable-container-${ID}`)).toBeInTheDocument();
        expect(screen.getByTestId(`droppable-title-${ID}`)).toBeInTheDocument();
        expect(screen.getByText("Hat")).toBeInTheDocument();
        expect(screen.getByText("Shoes")).toBeInTheDocument();
        expect(screen.getByText("Pants")).toBeInTheDocument();
    });
});