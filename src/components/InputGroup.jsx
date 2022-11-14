import '../assets/css/style.css'
import '../assets/css/fontawesome.css';

const InputGroup = () => {
    return (
        <div className='card-picture-container'>
            <div className="side-add"></div>
            <div className="inputgroup-container">
                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Name</label>
                    </div>
                    <input type={"text"} className='input-field name-input' />
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Card Type</label>
                    </div>
                    <select className='input-field select-style card-type-select'>
                        <option>Link</option>
                        <option>Efect</option>
                        <option>Spell</option>
                        <option>Xyz</option>
                        <option>Normal</option>
                        <option>Fusion</option>
                        <option>Ritual</option>
                        <option>Trap</option>
                        <option>Synchro</option>
                        <option>Dark Synchro</option>
                        <option>Legendary Dragon</option>
                        <option>Token</option>
                        <option>Obelisk</option>
                        <option>Ra</option>
                        <option>Slifer</option>
                    </select>
                    <div className='right-input-style'>
                        <input type={'checkbox'} className='checkbox-style' />
                        <label className="pendulum-label">Pendulum</label>
                    </div>
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Attribute</label>
                    </div>
                    <select className='input-field select-style attribute-select'>
                        <option>Dark</option>
                        <option>Light</option>
                        <option>Fire</option>
                        <option>Earth</option>
                        <option>Water</option>
                        <option>Wind</option>
                        <option>Laugh</option>
                        <option>Divine</option>
                        <option>Boss (Start)</option>
                        <option>Boss (1)</option>
                        <option>Boss (2)</option>
                        <option>Boss (3)</option>
                    </select>
                    <div className='right-input-style'>
                        <label className='right-input-label'>Rarity</label>
                        <select className='input-field select-style rarity-select'>
                            <option>Common</option>
                            <option>Silver</option>
                            <option>Gold</option>
                        </select>
                    </div>
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Level</label>
                    </div>
                    <select className='input-field select-style'>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Picture</label>
                    </div>
                    <input type={"file"} className='input-field upload-file' />
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Monster Type</label>
                    </div>
                    <input type={"text"} className='input-field monster-type-creator' />
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Effect</label>
                    </div>
                    <input type={"text"} className='input-field effect-input' />
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>ATK</label>
                    </div>
                    <input type={"text"} className='input-field atk-def-year' />
                    <div className='right-input-style'>
                        <label className='right-input-label'>DEF</label>
                        <input type={"text"} className='input-field atk-def-year' />
                    </div>
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>SET</label>
                    </div>
                    <input type={"text"} className='input-field set-input' />
                    <div className='right-input-style'>
                        <label className='right-input-label'>-</label>
                        <input type={"text"} className='input-field set-serial' />
                    </div>
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Serial #</label>
                    </div>
                    <input type={"text"} className='input-field set-serial' />
                    <div className='right-input-style'>
                        <label className='right-input-label'>Edition</label>
                        <input type={"text"} className='input-field edition-input' />
                    </div>
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Year</label>
                    </div>
                    <input type={"text"} className='input-field atk-def-year' />
                    <div className='right-input-style'>
                        <label className='right-input-label'>Creator</label>
                        <input type={"text"} className='input-field monster-type-creator' />
                    </div>
                </div>

            </div>
            <div className="picture-container"></div>
        </div>
    )
}

export default InputGroup;