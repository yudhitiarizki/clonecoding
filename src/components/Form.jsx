//  /$$$$$$                          /$$                          
// /$$__  $$                        | $$                          
// | $$  \__/  /$$$$$$  /$$$$$$/$$$$ | $$$$$$$   /$$$$$$   /$$$$$$ 
// | $$ /$$$$ |____  $$| $$_  $$_  $$| $$__  $$ |____  $$ /$$__  $$
// | $$|_  $$  /$$$$$$$| $$ \ $$ \ $$| $$  \ $$  /$$$$$$$| $$  \__/
// | $$  \ $$ /$$__  $$| $$ | $$ | $$| $$  | $$ /$$__  $$| $$      
// |  $$$$$$/|  $$$$$$$| $$ | $$ | $$| $$$$$$$/|  $$$$$$$| $$      
//  \______/  \_______/|__/ |__/ |__/|_______/  \_______/|__/     
// Import gambar kartu
// Grup 1 (Normal, Effect, Fusion, Ritual, Synchro, Legendary Dragon, Token, Obelisk, Slifer, Ra)
import Gambar1 from "./Gambar1"
// // Grup 2 (xyz)
// import Gambar2 from "./Gambar2"
// // Grup 3 (dark synchro)
// import Gambar3 from "./Gambar3"
// // Grup 4 (Link)
// import Gambar4 from "./Gambar4"
// // Grup 5 (Spell, Trap)
// import Gambar5 from "./Gambar5"
///////////////////////////////////////////////////////////////////
import { useState } from "react"
import styled from "styled-components";
import useInput from "../hooks/useInput"

///////////////////////////////////////////////////////////////////

const Form = () => {

//    /$$$$$$   /$$                 /$$              
//   /$$__  $$ | $$                | $$              
//  | $$  \__//$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$ 
//  |  $$$$$$|_  $$_/   |____  $$|_  $$_/   /$$__  $$
//   \____  $$ | $$      /$$$$$$$  | $$    | $$$$$$$$
//   /$$  \ $$ | $$ /$$ /$$__  $$  | $$ /$$| $$_____/
//  |  $$$$$$/ |  $$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$
//   \______/   \___/   \_______/   \___/   \_______/
                                                  
  // Gambar menyusul...
  const imagelink = "https://thiscatdoesnotexist.com/"

  // Ada di semua (atas)
  const [ name, onChangeHandlerName ] = useInput() 
  const [ cardtype, onChangeHandlerCardType ] = useInput()
  const [ rarity, onChangeHandlerRarity ] = useInput()
  //////////////////////////////////////// gambar sementara
  // const [ picture, onChangeHandlerPicture ] = useInput()
  
  // Ada di grup 1-4
  const [ pendulum, setPendulum] = useState(false)
  const onChangeHandlerPendulum = (event) => {
    setPendulum(!pendulum)
  }

  const [ attribute, onChangeHandlerAttribute ] = useInput()
  const [ monstertype, onChangeHandlerMonsterType ] = useInput()
  const [ attack, onChangeHandlerAttack ] = useInput()
  
  // Ada di grup 1-3
  // Grup 1 (Normal, Fusion, Ritual, Synchro, Legendary Dragon, Token, Obelisk, Slifer, Ra)
  // Grup 2 (xyz)
  // Grup 3 (dark synchro)
  const [ defense, onChangeHandlerDefense ] = useInput()
  // Level gabung dengan rank dan negative level
  const [ level, onChangeHandlerLevel ] = useInput()

  // Grup 4 (Link)
  //////////////////////////////////////////////////masih bingung gimana bentukannya
  // const [ linkarrows, onChangeHandlerLinkArrows ] = useInput()
  
  // Grup 5 (Spell, Trap)
  const [ icon, onChangeHandlerIcon ] = useInput()
  
  // Menu pendulum
  const [ bluescale, onChangeHandlerBlueScale ] = useInput()
  const [ redscale, onChangeHandlerRedScale ] = useInput()
  const [ pendulumeffect, onChangeHandlerPendulumEffect ] = useInput()
  
  // Ada di semua (bawah)
  const [ effect, onChangeHandlerEffect ] = useInput()
  // const [ set1, onChangeHandlerSet1 ] = useInput()
  // const [ set2, onChangeHandlerSet2 ] = useInput()
  // const [ serial, onChangeHandlerSerial ] = useInput()
  // const [ edition, onChangeHandlerEdition ] = useInput()
  // const [ year, onChangeHandlerYear ] = useInput()
  // const [ creator, onChangeHandlerCreator ] = useInput()
//////////////////////////////////////////////////////////////////

  return (
    <StContainerLayout>
      <StContainerPage>
         <StContainerForm>
          <StContainerHorizontal>
          <p>Title :
            <input value={name} onChange={onChangeHandlerName}></input>
          </p>
          <p>Category :
            <select onChange={onChangeHandlerCardType}>
              <option value="Kosong">Kosong</option>
              {/* <option value="spell">spell</option>
              <option value="trap">trap</option> */}
              <option value="normal">Normal</option>
              <option value="effect">Effect</option>
              <option value="fusion">fusion</option>
              <option value="ritual">RItual</option>
              <option value="legendarydragon">legendary dragon</option>
              <option value="obelisk">obelisk</option>
              <option value="slifer">slifer</option>
              <option value="ra">ra</option>
              <option value="token">token</option>
            </select>
          </p>
          </StContainerHorizontal>

          <StContainerHorizontal>
            <p>Rarity</p>
            <select onChange={onChangeHandlerRarity}>
              <option value="common">common</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
            </select>

            <p>Effect</p>
            <input value={effect} onChange={onChangeHandlerEffect}></input>
          </StContainerHorizontal>
            
          {/* <StContainerHorizontal>
            <p>Set1</p>
            <input value={set1} onChange={onChangeHandlerSet1}></input>

            <p>Set2</p>
            <input value={set2} onChange={onChangeHandlerSet2}></input>
          </StContainerHorizontal> */}

          {/* <StContainerHorizontal>
            <p>Serial #</p>
            <input value={serial} onChange={onChangeHandlerSerial}></input>

            <p>Edition</p>
            <input value={edition} onChange={onChangeHandlerEdition}></input>
          </StContainerHorizontal> */}
            
          {/* <StContainerHorizontal>
            <p>Year</p>
            <input value={year} onChange={onChangeHandlerYear}></input>
            
            <p>Creator</p>
            <input value={creator} onChange={onChangeHandlerCreator}></input>
          </StContainerHorizontal> */}

          <StContainerHorizontal>
            {/* <p>Icon
            <select onChange={onChangeHandlerIcon}>
              <option value="normal">Normal</option>
              <option value="continuous">Continuous</option>
              <option value="counter">Counter</option>
              <option value="equip">Equip</option>
              <option value="field">Field</option>
              <option value="quickplay">Quick-Play</option>
              <option value="ritual">Ritual</option>
            </select>
            </p> */}
            <p>Attribute
              <select onChange={onChangeHandlerAttribute}>
                <option value="dark">Dark</option>
                <option value="boss">Boss</option>
                <option value="boss1">Boss1</option>
                <option value="boss2">Boss2</option>
                <option value="boss3">Boss3</option>
                <option value="divine">Divine</option>
                <option value="earth">Earth</option>
                <option value="fire">Fire</option>
                <option value="laugh">Laugh</option>
                <option value="light">Light</option>
                <option value="water">Water</option>
                <option value="wind">Wind</option>
              </select>
            </p>
            <p>Level
              <select onChange={onChangeHandlerLevel}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </p>
            {/* <input type="checkbox" onChange={onChangeHandlerPendulum}/> Pendulum */}
          </StContainerHorizontal>
            
          <StContainerHorizontal>
            <p>Monster Type</p>
              <input value={monstertype} onChange={onChangeHandlerMonsterType}></input>
            <p>Atk</p>
              <input value={attack} onChange={onChangeHandlerAttack}></input>
            <p>Defense</p>
              <input value={defense} onChange={onChangeHandlerDefense}></input>
          </StContainerHorizontal>

          <StContainerHorizontal>
            <p>Pendulum Effect</p>
              <input value={pendulumeffect} onChange={onChangeHandlerPendulumEffect}></input>
            <p>Blue Scale</p>
              <input value={bluescale} onChange={onChangeHandlerBlueScale}></input>
            <p>Red Scale</p>
              <input value={redscale} onChange={onChangeHandlerRedScale}></input>
          </StContainerHorizontal>
        </StContainerForm> 
          <StCardPage>
          <Gambar1
            name={name}
            cardtype={cardtype}
            rarity={rarity}
            picture={imagelink}
            attribute={attribute}
            level={level}
            monstertype={monstertype}
            attack={attack}
            defense={defense}
            pendulum={true}
            pendulumeffect={pendulumeffect}
            bluescale={bluescale}
            redscale={redscale}
            effect={effect}
            // set1={set1}
            // set2={set2}
            // serial={serial}
            // edition={edition}
            // year={year}
            // creator={creator}
          />
        </StCardPage>
        {/* <StCardPage>
          <Gambar5
            name={name}
            cardtype={cardtype}
            rarity={rarity}
            // picture={picture}
            icon={icon}
            effect={effect}
            set1={set1}
            set2={set2}
            serial={serial}
            edition={edition}
            year={year}
            creator={creator}
          />
        </StCardPage> */}
      </StContainerPage> 
    </StContainerLayout>
  ) 
}

export default Form

const StContainerLayout = styled.div`
  margin: 0 auto;
  max-Width: 1200px;
  min-Width: 800px;
`

const StContainerPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StContainerForm = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StCardPage = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`

const StContainerHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`