import React from 'react';
import './Gameboard.css';
import Cell from '../Cell/Cell';

class Gameboard extends React.Component {
    render() {
        return (
            <div className="table-wrap">
                <div className="fire-left"></div>
                <div className="fire-left-btm"></div>
                <Cell />
                <div className="fire-right"></div>
                <div className="fire-right-btm"></div>
            </div >
        )
    }
}

export default Gameboard;