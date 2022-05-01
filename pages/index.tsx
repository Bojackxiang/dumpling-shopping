import { GetStaticProps } from 'next';
import React, { useState, FunctionComponent } from 'react';

// import axios from "axios";

import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';
import QuickView from '../components/QuickView/QuickView';

import { ProductWeb, QuickPreview } from '../context/ShoppingCart';
import { Request } from '../util/requests';

const Home: FunctionComponent<{ products: ProductWeb[] }> = ({ products }) => {
    const [term, setTerm] = useState<string>('');

    const [modalActive, flipModelState] = useState<boolean>(false);

    const initQuickPreview = {
        image: 'blank',
        id: 0,
        price: 0,
        name: 'blank',
    };

    const [quickViewProduct, setQuickViewProduct] =
        useState<QuickPreview>(initQuickPreview);

    // Search by Keyword
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    // Mobile Search Reset
    const resetSearch = () => {
        setTerm('');
    };

    // Open Modal
    const openModal = (product: QuickPreview) => {
        setQuickViewProduct(product);
        flipModelState(true);
    };

    // Close Modal
    const closeModal = () => {
        flipModelState(false);
    };

    return (
        <div className="container">
            <Header
                handleSearch={handleSearch}
                resetSearch={resetSearch}
                searchValue={term}
            />
            <Products
                productsList={products}
                searchTerm={term}
                openModal={openModal}
            />
            <Footer />
            <QuickView
                product={quickViewProduct}
                openModalState={modalActive}
                closeModal={closeModal}
            />
        </div>
    );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const url =
        'https://script.google.com/macros/s/AKfycbwrtpxP95JWg2GghdxdxXDltiL101EWGhOGaJZZ0rRmedAow0t4hrQ4/exec';
    // const res = await axios.get(url);
    const res = await fetch(url);

    const data = await res.json();
    // const data = await res.data;

    const response = await getData(url);
    console.log(response);

    return { props: { products: data } };
};

const getData = async (url: string) => {
    // 我们可以在 new 这个 request 的时候直接给一个值，
    // 或者我们可以在 request 的时候给一值，看需求
    const request = new Request({});
    return request.request({
        url,
        interceptors: {
            requestInterceptors(req) {
                console.log('request inspector ');
                return req;
            },
            responseInterceptors(result) {
                console.log('response inspector');
                return result;
            },
        },
    });
};
