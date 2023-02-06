import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './Categories';
import Catalog from './Catalog';
import CatalogItem from './CatalogItem';
import Admin from './Admin';
import Slider from './Slider';
import EditItem from './EditItem';

export default function Main() {
    return (
        <div className='main'>
            {/* <Slider /> */}
            <Routes>
                <Route path="/" element={<Categories />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/catalog/:id" element={<Catalog />} />
                <Route path="/catalogitem/:id" element={<CatalogItem />} />
                <Route path="/edit/:id" element={<EditItem />} />
                <Route path="/delete" element={<EditItem />} />
            </Routes>
        </div>
    )
}
