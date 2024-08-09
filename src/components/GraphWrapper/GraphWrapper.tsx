'use client'

import React, { useContext } from "react";
import { Graph } from "react-d3-graph";

import "./GraphWrapper.css";

const data = {
    nodes: [
        { id: 'vitalik_eth' },
        { id: '0x6d8a...8960a5' },
        { id: '0xcc6d...78d222' },
        { id: '0x1234...abcd12' },
        { id: '0x5678...efgh34' },
        { id: '0x5644...edsad4' },
        { id: '0x5644...edssd4' },
        { id: '0x5s44...edssd4' },
        { id: '0x1s44...edssd4' },
        { id: '0xks44...edssd4' },
    ],
    links: [
        { source: 'vitalik_eth', target: '0x6d8a...8960a5', label: '0.5 ETH' },
        { source: 'vitalik_eth', target: '0xcc6d...78d222', label: '0.7 ETH' },
        { source: 'vitalik_eth', target: '0x5678...efgh34', label: '0.7 ETH' },
        { source: '0x6d8a...8960a5', target: '0x1234...abcd12', label: '0.3 ETH' },
        { source: '0x6d8a...8960a5', target: '0x5678...efgh34', label: '0.4 ETH' },
        { source: '0xcc6d...78d222', target: '0x5644...edsad4', label: '0.4 ETH' },
        { source: '0xcc6d...78d222', target: '0x5644...edssd4', label: '0.4 ETH' },
        { source: '0x5644...edsad4', target: '0x1s44...edssd4', label: '0.4 ETH' },
        { source: '0xcc6d...78d222', target: '0x5s44...edssd4', label: '0.4 ETH' },
        { source: '0x1234...abcd12', target: '0x1s44...edssd4', label: '0.4 ETH' },
        { source: '0x1s44...edssd4', target: '0xks44...edssd4', label: '0.4 ETH' },
    ],
};

const GraphWrapper = () => {
    const [graphData, setGraphData] = React.useState(data);


    React.useEffect(() => {
        setGraphData(data);
    }, []);

    const myConfig = {
        directed: true,
        nodeHighlightBehavior: true,
        panAndZoom: true,
        maxZoom: 3,
        minZoom: 1,
        width: 1600,
        height: 1100,
        node: {
            color: 'purple',
            size: 800,
            symbolType: "circle",
            labelProperty: 'label',
            renderLabel: true,
            fontSize: 14,
            fontWeight: 'bold',
            labelPosition: 'top',
            strokeWidth: 10,
            fontColor: 'white',
        },
        link: {
            highlightColor: 'blue',
            renderLabel: true,
            strokeWidth: 2,
            color: 'white',

            fontSize: 12, // Kích thước font cho nhãn của liên kết
            fontColor: 'white', // Màu chữ của nhãn liên kết

            semanticStrokeWidth: true,
            markerHeight: 6,
            markerWidth: 20,
            strokeLinecap: 'square',

        },
    };

    return (
        <div className="center">
            <Graph
                id="graph-id"
                data={graphData}
                config={myConfig}
            />
        </div>
    );
};

export default GraphWrapper;