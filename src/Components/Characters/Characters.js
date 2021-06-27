import React from 'react';
import './Characters.css';
import CharacterSelect from '../CharacterSelect/CharacterSelect';


class Characters extends React.Component {


    render() {
        return (
            <div className="character-wrap">
                <CharacterSelect />
                <CharacterSelect />
                <CharacterSelect />
                <CharacterSelect />
                <CharacterSelect />
            </div>
        )
    }
}

export default Characters;