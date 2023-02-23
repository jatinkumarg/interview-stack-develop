import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableProductList from './DraggableProductList';
import { Product } from '../interfaces';

export default {
    title: 'Draggable Product List',
    component: DraggableProductList,
} as ComponentMeta<typeof DraggableProductList>;

const Template: ComponentStory<typeof DraggableProductList> = (args) => (
    <DragDropContext onDragEnd={() => { }}>
        <DraggableProductList {...args} />
    </DragDropContext>
);

const getArgs = (ProductStatus: string) => ({
    ID: '1',
    listTitle: 'Product Test List',
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
});

export const Active = Template.bind({});
Active.args = getArgs('Active');

export const InActive = Template.bind({});
InActive.args = getArgs('InActive');