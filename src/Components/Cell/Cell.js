import React from 'react';
import './Cell.css';
import './Celltd';

import stage1 from './Stages/1.jpg';
import stage2 from './Stages/2.jpg';
import stage3 from './Stages/3.jpg';
import stage4 from './Stages/4.jpg';
import stage5 from './Stages/5.jpg';
import stage6 from './Stages/6.jpg';
import stage7 from './Stages/7.jpg';
import stage8 from './Stages/8.jpg';
import stage9 from './Stages/9.jpg';

import Celltd from './Celltd';





class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageCounter: '',
            backgroundImage: [
                stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9
            ],
            selectedStageIndex: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            selectedStageIndex: e.target.value
        });
    }


    render() {
        return (
            <section>
                <table style={{ backgroundImage: `url(${this.state.backgroundImage[this.state.selectedStageIndex]})` }}>
                    <tbody>
                        <tr>
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                        </tr>
                        <tr>
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                        </tr>
                        <tr>
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                        </tr>
                        <tr>
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                        </tr>
                        <tr>
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                        </tr>
                        <tr>
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                        </tr>
                        <tr>
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                            <Celltd />
                        </tr>
                    </tbody>
                </table >
                <div>
                    <div className="stageSelector stage-choice-wrap">
                        <label for="stageChoice">Stage select: </label>
                        <select type="number" id="stageChoice" name="stageChoice" className="stage-choice" onChange={this.handleClick}>

                            <option value=""  > --- </option>
                            <option value="0" >Stage 1</option>
                            <option value="1" > Stage 2</option>
                            <option value="2"  > Stage 3</option>
                            <option value="3" > Stage 4</option>
                            <option value="4" >Stage 5</option>
                            <option value="5" >Stage 6</option>
                            <option value="6" >Stage 7</option>
                            <option value="7" >Stage 8</option>
                            <option value="8" >Stage 9</option>

                        </select>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cell;
