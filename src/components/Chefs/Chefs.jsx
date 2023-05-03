import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChefCard from '../SingleChefCard/SingleChefCard';
import { Row } from 'react-bootstrap';

const Chefs = () => {
    const chefs = useLoaderData()
    console.log(chefs);
    return (
        <div>
            <h4 className='text-center my-4'>this is chefs section</h4>
            <Row  xs={1} md={2} lg={3} className="g-4 mt-4">
            {
                chefs.map(chef=> <SingleChefCard key={chef.id} chef={chef}></SingleChefCard>)
            }
            </Row>
            

        </div>
    );
};

export default Chefs;