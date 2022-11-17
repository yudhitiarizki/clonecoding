import '../assets/css/InputGroup.css'
import '../assets/css/fontawesome.css';
import 'bootstrap/dist/js/bootstrap';
import '../scss/custom.scss';
import  React, { useState } from 'react';
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { __createcards } from "../redux/modules/cardsSlices";
import axios from 'axios';

const InputGroup = () => {
    // Aku udah buat sebagian state untuk inputnya, nanti buat redux tinggal di hilangin aja komennya
    const [cardtype, setCardType] = useState('link');
    const [footer, setFooter] = useState('This fan card was created at cardmaker.net');

    const id = nextId();
    const dispatch = useDispatch()

    //State Untuk image
    const [image, setimage] = useState('');

    const onChangeImage = (event) => {
        setimage(event.target.files[0]);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        // if (card.title.trim() === "" || card.category.trim() === ""  || card.description.trim() === "") return alert('Fill the Form!');
        const data = {...cardtype, id};

        // untuk upload data image
        let formData = new FormData();
        formData.append("image", image);

        let url = "http://servercard.yudhitiarizki.my.id/upload.php";
        axios.post(url, formData, {
        })
        .then(res => {
            
            // untuk upload data card dari state
            console.log(res.data);
            // data.image = res.data.url;
            // dispatch(__createcards(data));;

        })

        // untuk reset data
        // setcard({
        // id: "0",
        // title: "",
        // imagelink: "",
        // category: '',
        // description: "",
        // });
        
    };
    
    

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
            document.getElementById("monster-type").style.display = 'flex';
            document.getElementById("atk-dev").style.display = 'flex';
            document.getElementById("attribute-rarity").style.display = 'flex';
            document.getElementById("rarity").style.display = 'none';
        }

        if (cardType === 'link') {
            document.getElementById("link-arrows").style.display = 'flex';
        } else {
            document.getElementById("link-arrows").style.display = 'none';
        }

        if (cardType === 'xyz') {
            document.getElementById("rank").style.display = 'flex';
        } else {
            document.getElementById("rank").style.display = 'none';
        }

        if (cardType !== 'spell' && cardType !== 'trap' && cardType !== 'link' && cardType !== 'xyz') {
            document.getElementById("level").style.display = 'flex';
        } else {
            document.getElementById("level").style.display = 'none';
        }
    }

    const pendulumCheck = () => {
        const onCheck = document.getElementById('pendulum-checkbox');

        if (onCheck.checked) {
            document.getElementById("bluered-scale").style.display = 'flex';
        } else {
            document.getElementById("bluered-scale").style.display = 'none';
        }
    }

    const footerInput = (event) => {
        setFooter(event.target.value);
    }

    const selectCard = () => {
        document.getElementById("searchmycards").placeholder = 'Card 1'; // Ubah card 1 pakai state
        document.getElementById("searchmycards").classList.remove('schi');
        document.getElementById("searchmycards").classList = 'schi2'
    }

    const newCard = () => {
        document.getElementById("searchmycards").placeholder = 'Search my cards...';

        if (document.getElementById("searchmycards").className === 'schi2') {
            document.getElementById("searchmycards").classList.remove('schi2');
            document.getElementById("searchmycards").classList = 'schi';
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
                        <option value='effect'>Effect</option>
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

                    <div className='right-input-style2' id='pendulum'>
                        <label className='custom-checkbox checkbox-style'>
                            <input type='checkbox' id='pendulum-checkbox' onChange={pendulumCheck} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="pendulum-label">Pendulum</label>
                    </div>
                </div>

                <div className='row-inputgroup' id='attribute-rarity'>
                    <div className='field-label-container'>
                        <label>Attribute</label>
                    </div>
                    <select className='input-field select-style attribute-select'>
                        <option value='dark'>Dark</option>
                        <option value='light'>Light</option>
                        <option value='fire'>Fire</option>
                        <option value='earth'>Earth</option>
                        <option value='water'>Water</option>
                        <option value='wind'>Wind</option>
                        <option value='laugh'>Laugh</option>
                        <option value='divine'>Divine</option>
                        <option value='boss (start)'>Boss (Start)</option>
                        <option value='boss (1)'>Boss (1)</option>
                        <option value='darkboss (2)'>Boss (2)</option>
                        <option value='boss (3)'>Boss (3)</option>
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

                <div className='row-inputgroup2' id='link-arrows'>
                    <div className='field-label-container2'>
                        <label>Link Arrows</label>
                    </div>
                    <div className='link-arrows-container'>
                        <div className='link-arrows'>
                            <label className='custom-checkbox'>
                                <input type='checkbox' />
                                <span className="checkmark"></span>
                            </label>
                            <label className='custom-checkbox'>
                                <input type='checkbox' />
                                <span className="checkmark"></span>
                            </label>
                            <label className='custom-checkbox'>
                                <input type='checkbox' />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='link-arrows row-2'>
                            <label className='custom-checkbox'>
                                <input type='checkbox' />
                                <span className="checkmark"></span>
                            </label>
                            <label className='custom-checkbox'>
                                <input type='checkbox' />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='link-arrows'>
                            <label className='custom-checkbox'>
                                <input type='checkbox' />
                                <span className="checkmark"></span>
                            </label>
                            <label className='custom-checkbox'>
                                <input type='checkbox' />
                                <span className="checkmark"></span>
                            </label>
                            <label className='custom-checkbox'>
                                <input type='checkbox' />
                                <span className="checkmark"></span>
                            </label>
                        </div>
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

                <div className='row-inputgroup' id='level' style={{ 'display': 'none' }}>
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

                <div className='row-inputgroup' id='rank' style={{ 'display': 'none' }}>
                    <div className='field-label-container'>
                        <label>Rank</label>
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

                <div className='row-inputgroup' id='bluered-scale' style={{ 'display': 'none' }}>
                    <div className='field-label-container'>
                        <label>Blue Scale</label>
                    </div>
                    <input type={"text"} className='input-field blue-red-scale' />
                    <div className='right-input-style'>
                        <label className='right-input-label'>Red Scale</label>
                        <input type={"text"} className='input-field blue-red-scale' />
                    </div>
                </div>

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Picture</label>
                    </div>
                    <input type={"file"} className='input-field upload-file' onChange={(event) => onChangeImage(event)} name="image"/>
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

                <div className='row-inputgroup'>
                    <div className='field-label-container'>
                        <label>Footer</label>
                    </div>
                    <input type={"text"} value={footer} onChange={footerInput} className='input-field name-input' />
                </div>
            </div>

            <div className="picture-container">
                <div className="top-pc-container">
                    <div>
                        <button className="searchbox2" id="dropdownMenuOffset3" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,8">
                            <input type='text' placeholder='Search my cards...' id='searchmycards' className='search2-input schi' />
                            <div className='down-arrow'><i className="fa-solid fa-angle-down"></i></div>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-custom2" aria-labelledby="dropdownMenuOffset3">
                            <div><button className='style-button' onClick={newCard}>New Card</button></div>
                            <li><hr className="dropdown-divider" /></li>
                            <li><p className="dropdown-item disabled did" tabIndex="-1" aria-disabled="true">Saved</p></li>
                            <li>
                                <div className="dropdown-item di-custom" onClick={selectCard}>
                                    Card 1
                                    <button className='delete-btn'><i className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <button className='style-button' onClick={(event) => onSubmitHandler(event)} type='button'>Save</button>

                </div>

                <div className="image-box">
                    <div style={{ 'backgroundColor': 'white', 'height': '658.3px' }}>{'Ganti <div> ini dengan gambar kartu'}</div>
                </div>

                <div className='bottom-pc-container'>
                    <div>
                        <button className='style-button' id="dropdownMenuOffset1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-50,8">
                            Download <i className="fa-solid fa-angle-down"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-custom1" aria-labelledby="dropdownMenuOffset1">
                            <li><button className="dropdown-item"><i className="fa-solid fa-download"></i>Normal-Res</button></li>
                            <li><button className="dropdown-item"><i className="fa-solid fa-download"></i>High-Res</button></li>
                        </ul>
                    </div>

                    <div>
                        <button className='style-button' id="dropdownMenuOffset2" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-40,8">
                            Get share link <i className="fa-solid fa-angle-down"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-custom1" aria-labelledby="dropdownMenuOffset2">
                            <li><span className="dropdown-item-text">Uploading...</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputGroup;