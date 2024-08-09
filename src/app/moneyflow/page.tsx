
import React from 'react';
import GraphWrapper from '../../components/GraphWrapper/GraphWrapper';
import { drag } from 'd3-drag';

const MoneyFlowPage = () => {
    return (
        <div >
            <h1>Money Flow Chart</h1>
            <h1 className='tree-container'>
                <GraphWrapper />
            </h1>

        </div>
    );
};

export default MoneyFlowPage;