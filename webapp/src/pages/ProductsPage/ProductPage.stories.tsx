import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import { GET_ALL_PRODUCT_URL, UPDATE_STATUS_PRODUCT_URL } from "../ApiHelper";

export default {
    title: 'Product Page',
    component: ProductsPage,
    decorators: [(Story) => (<MemoryRouter><Story /></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: GET_ALL_PRODUCT_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [
                    {
                        "ProductID": 1,
                        "ProductName": "Hat",
                        "ProductPhotoURL": "https://i.ibb.co/85GGy5t/ryan-hoffman-2-BK0-JEw-QSp-Q-unsplash.jpg",
                        "ProductStatus": 'Active'
                    },
                    {
                        "ProductID": 2,
                        "ProductName": "Shoes",
                        "ProductPhotoURL": "https://i.ibb.co/VVcbfnT/shoe.jpg",
                        "ProductStatus": 'Active'
                    },
                    {
                        "ProductID": 3,
                        "ProductName": "Pants",
                        "ProductPhotoURL": "https://i.ibb.co/23PF5Sd/pant.jpg",
                        "ProductStatus": 'InActive'
                    },
                    {
                        "ProductID": 4,
                        "ProductName": "Shirt",
                        "ProductPhotoURL": "https://i.ibb.co/Gspv7y3/shirt.jpg",
                        "ProductStatus": 'InActive'
                    },
                    {
                        "ProductID": 5,
                        "ProductName": "Coat",
                        "ProductPhotoURL": "https://i.ibb.co/ssQK19S/coat.jpg",
                        "ProductStatus": 'InActive'
                    },
                ],
                message: ""
            },
        },
        {
            url: UPDATE_STATUS_PRODUCT_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: GET_ALL_PRODUCT_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        },
        {
            url: UPDATE_STATUS_PRODUCT_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: GET_ALL_PRODUCT_URL,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        },
        {
            url: UPDATE_STATUS_PRODUCT_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};