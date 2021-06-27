import React from 'react';
import './CharacterSelect.css';


import quest from './character-pixels/quest-pixel.png';
import aerizo from './character-pixels/aerizo-pixel.png';
import hairy from './character-pixels/hairy-pixel.png';
import iko from './character-pixels/iko-pixel.webp';
import newplayer from './character-pixels/new-player-pixel.png';
import chooseCharacter from './character-pixels/chooseCharacter.jpg';






class CharacterSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Blank',
            images: [
                { id: 0, img: chooseCharacter },
                { id: 1, img: quest },
                { id: 2, img: aerizo },
                { id: 3, img: hairy },
                { id: 4, img: iko },
                { id: 5, img: newplayer }
            ],
            selectedImageIndex: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.setState({ selectedImageIndex: event.target.value })
    }


    render() {
        return (

            <form className="player-card" >

                <label for="players" >Player: </label>
                <select id="players" name="players" value={this.state.value} onChange={this.handleChange}>
                    <option value="0"  > --- </option>
                    <option value="1" >Quest</option>
                    <option value="2" > Aerizo</option>
                    <option value="3"  > Hairy MB</option>
                    <option value="4" > Iko</option>
                    <option value="5" > New Player</option>
                </select>

                <div className="player-details">
                    <img key={this.state.images.id} src={this.state.images[this.state.selectedImageIndex]["img"]} className="image-box" alt='character'></img>
                    <div className="stats">
                        <div>
                            <label for="hp-input">HP:  </label>
                            <input type="number" id="hp" name="hp" min="0" max="10" className="hp-input"></input>
                        </div>
                        <div>
                            <label for="dice-roll">Roll: </label>
                            <input type="number" id="dice-roll" name="dice-roll" min="0" max="20" className="hp-input"></input>
                        </div>
                        <div>
                            <label for="aromor-class">AC: </label>
                            <input type="number" id="aromor-class" name="aromor-class" min="0" max="20" className="hp-input"></input>
                        </div>
                    </div>
                </div>

                <div className="initiative" >
                    <label for="dice-roll">Initiative: </label>
                    <input type="number" id="dice-roll" name="dice-roll" min="0" max="20" className="hp-input"></input>
                </div>
            </form >


        )
    }
}

export default CharacterSelect;