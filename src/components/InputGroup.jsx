import '../assets/css/InputGroup.css'
import '../assets/css/fontawesome.css';
// import { useState } from 'react';

const InputGroup = () => {
    // Aku udah buat sebagian state untuk inputnya, nanti buat redux tinggal di hilangin aja komennya
    // const [cardtype, setCardType] = useState('link');

    const cardtypeSelect = (event) => {
        // setCardType(event.target.value);

        const cardType = event.target.value;
        if (cardType === 'spell' || cardType === 'trap') {
            document.getElementById("icon").style.display = 'flex';
            document.getElementById("pendulum").style.display = 'none';
            document.getElementById("monster-type").style.display = 'none';
            document.getElementById("atk-dev").style.display = 'none';
            document.getElementById("attribute-rarity").style.display = 'none';
            document.getElementById("rarity").style.display = 'flex';

        } else {
            document.getElementById("icon").style.display = 'none';
            document.getElementById("pendulum").style.display = 'flex';
            document.getElementById("attribute-rarity").style.display = 'flex';
            document.getElementById("rarity").style.display = 'none';
        }
    }

    return (
        <div className='card-picture-container'>
            <div className="side-add"></div>
            <div className="inputgroup-container">
                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Name</label>
                    </div>
                    <input type={"text"} name='name' className='input-field name-input' />
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Card Type</label>
                    </div>
                    <select onChange={cardtypeSelect} name='card_type' className='input-field select-style card-type-select'>
                        <option value='link'>Link</option>
                        <option value='effect'>Efect</option>
                        <option value='spell'>Spell</option>
                        <option value='xyz'>Xyz</option>
                        <option value='normal'>Normal</option>
                        <option value='fusion'>Fusion</option>
                        <option value='ritual'>Ritual</option>
                        <option value='trap'>Trap</option>
                        <option value='synchro'>Synchro</option>
                        <option value='darkSynchro'>Dark Synchro</option>
                        <option value='legendaryDragon'>Legendary Dragon</option>
                        <option value='token'>Token</option>
                        <option value='obelisk'>Obelisk</option>
                        <option value='ra'>Ra</option>
                        <option value='slifer'>Slifer</option>
                    </select>

                    <div className='right-input-style' id='icon' style={{ 'display': 'none' }}>
                        <label className='right-input-label'>Icon</label>
                        <select className='input-field select-style rarity-select'>
                            <option value='none'>None</option>
                            <option value='continuous'>Continuous</option>
                            <option value='counter'>Counter</option>
                            <option value='equip'>Equip</option>
                            <option value='field'>Field</option>
                            <option value='quick-play'>Quick-Play</option>
                            <option value='ritual'>Ritual</option>
                        </select>
                    </div>

                    <div className='right-input-style' id='pendulum'>
                        <input type={'checkbox'} className='checkbox-style' />
                        <label className="pendulum-label">Pendulum</label>
                    </div>
                </div>

                <div className='row-inputgroup' id='attribute-rarity'>
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
                            <option value='common'>Common</option>
                            <option value='silver'>Silver</option>
                            <option value='gold'>Gold</option>
                        </select>
                    </div>
                </div>

                <div className='row-inputgroup' id='rarity' style={{ 'display': 'none' }}>
                    <div className='field-label-container'>
                        <label>Rarity</label>
                    </div>
                    <select className='input-field select-style rarity-select'>
                        <option value='common'>Common</option>
                        <option value='silver'>Silver</option>
                        <option value='gold'>Gold</option>
                    </select>
                </div>

                <div className='row-inputgroup' style={{ 'display': 'none' }}>
                    <div className='field-label-container'>
                        <label>Level</label>
                    </div>
                    <select className='input-field select-style'>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Picture</label>
                    </div>
                    <input type={"file"} className='input-field upload-file' />
                </div>

                <div className='row-inputgroup' id='monster-type'>
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

                <div className='row-inputgroup' id='atk-dev'>
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
                        <label>Set</label>
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