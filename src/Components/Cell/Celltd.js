import React from 'react';
import './Cell.css';

import quest from '../CharacterSelect/character-pixels/quest-pixel.png';
import aerizo from '../CharacterSelect/character-pixels/aerizo-pixel.png';
import hairy from '../CharacterSelect/character-pixels/hairy-pixel.png';
import iko from '../CharacterSelect/character-pixels/iko-pixel.webp';
import newPlayer from '../CharacterSelect/character-pixels/new-player-pixel.png';
import enemy from '../CharacterSelect/character-pixels/enemy.png';
import redSquare from '../CharacterSelect/character-pixels/red-square.png';
import blueSquare from '../CharacterSelect/character-pixels/blue-square.png';
import greenSquare from '../CharacterSelect/character-pixels/green-square.png';



class Celltd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            image: [
                null,
                quest,
                aerizo,
                hairy,
                iko,
                newPlayer,
                enemy,
                redSquare,
                blueSquare,
                greenSquare

            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.currentImage > 8) {
            return this.setState({ currentImage: 0 })
        } else {
            return this.setState({ currentImage: this.state.currentImage + 1 });
        }

    }

    render() {
        return (
            <td onClick={this.handleClick}><img src={this.state.image[this.state.currentImage]} onClick={this.handleClick} ></img></td>
        )
    }
}

export default Celltd;