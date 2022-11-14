//  /$$$$$$                          /$$                          
// /$$__  $$                        | $$                          
// | $$  \__/  /$$$$$$  /$$$$$$/$$$$ | $$$$$$$   /$$$$$$   /$$$$$$ 
// | $$ /$$$$ |____  $$| $$_  $$_  $$| $$__  $$ |____  $$ /$$__  $$
// | $$|_  $$  /$$$$$$$| $$ \ $$ \ $$| $$  \ $$  /$$$$$$$| $$  \__/
// | $$  \ $$ /$$__  $$| $$ | $$ | $$| $$  | $$ /$$__  $$| $$      
// |  $$$$$$/|  $$$$$$$| $$ | $$ | $$| $$$$$$$/|  $$$$$$$| $$      
//  \______/  \_______/|__/ |__/ |__/|_______/  \_______/|__/     
// Import gambar kartu
// Grup 1 (Normal, Fusion, Ritual, Synchro, Legendary Dragon, Token, Obelisk, Slifer, Ra)
import Gambar1 from "./Gambar1"
// Grup 2 (xyz)
import Gambar2 from "./Gambar2"
// Grup 3 (dark synchro)
import Gambar3 from "./Gambar3"
// Grup 4 (Link)
import Gambar4 from "./Gambar4"
// Grup 5 (Spell, Trap)
import Gambar5 from "./Gambar5"
///////////////////////////////////////////////////////////////////

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
  const [ picture, onChangeHandlerPicture ] = useInput()
  
  // Ada di grup 1-4
  const [ pendulum, onChangeHandlerPendulum ] = useInput()
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
  const [ linkarrows, onChangeHandlerLinkArrows ] = useInput()
  
  // Grup 5 (Spell, Trap)
  const [ icon, onChangeHandlerIcon ] = useInput()
  
  // Menu pendulum
  const [ bluescale, onChangeHandlerBlueScale ] = useInput()
  const [ redscale, onChangeHandlerRedScale ] = useInput()
  const [ pendulumeffect, onChangeHandlerPendulumEffect ] = useInput()
  
  // Ada di semua (bawah)
  const [ effect, onChangeHandlerEffect ] = useInput()
  const [ set1, onChangeHandlerSet1 ] = useInput()
  const [ set2, onChangeHandlerSet2 ] = useInput()
  const [ serial, onChangeHandlerSerial ] = useInput()
  const [ edition, onChangeHandlerEdition ] = useInput()
  const [ year, onChangeHandlerYear ] = useInput()
  const [ creator, onChangeHandlerCreator ] = useInput()
//////////////////////////////////////////////////////////////////

  return (
    <StContainerLayout>
      <StContainerPage>
        <StContainerForm>
          <p>Title</p>
          <input value={name} onChange={onChangeHandlerName}></input>
          
          <p>Category</p>
          <select onChange={onChangeHandlerCardType}>
            <option value="Kosong">Kosong</option>
            <option value="magic">magic</option>
            <option value="trap">trap</option>
          </select>

          {/* Bagian Spell & Trap */}
          <div style={{visibility: (cardtype==="magic" || cardtype==="trap") ? "visible" : "hidden"}}>
            <p>Icon</p>
            <select onChange={onChangeHandlerIcon}>
              <option value="none">None</option>
              <option value="continuous">Continuous</option>
              <option value="counter">Counter</option>
              <option value="equip">Equip</option>
              <option value="field">Field</option>
              <option value="quick-play">Quick-Play</option>
              <option value="ritual">Ritual</option>
            </select>

            <p>Rarity</p>
            <select onChange={onChangeHandlerRarity}>
              <option value="common">common</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
            </select>

            <p>Effect</p>
            <input value={effect} onChange={onChangeHandlerEffect}></input>

            <StContainerHorizontal>
              <p>Set1</p>
              <input value={set1} onChange={onChangeHandlerSet1}></input>

              <p>Set2</p>
              <input value={set2} onChange={onChangeHandlerSet2}></input>
            </StContainerHorizontal>

            <StContainerHorizontal>
              <p>Serial #</p>
              <input value={serial} onChange={onChangeHandlerSerial}></input>

              <p>Edition</p>
              <input value={edition} onChange={onChangeHandlerEdition}></input>
            </StContainerHorizontal>
            
            <StContainerHorizontal>
              <p>Year</p>
              <input value={year} onChange={onChangeHandlerYear}></input>
              
              <p>Creator</p>
              <input value={creator} onChange={onChangeHandlerCreator}></input>
            </StContainerHorizontal>
          </div>
          
        </StContainerForm>
        <StCardPage>
          <Gambar1
            title={name}
            imagelink={imagelink}
            category={cardtype}
            effect={effect}
            icon={icon}
            rarity={rarity}
          />
          <Gambar2
            title={name}
            imagelink={imagelink}
            category={cardtype}
            effect={effect}
            icon={icon}
            rarity={rarity}
          />
        </StCardPage>
        <StCardPage>
          <Gambar3
            title={name}
            imagelink={imagelink}
            category={cardtype}
            effect={effect}
            icon={icon}
            rarity={rarity}
          />
          <Gambar4
            title={name}
            imagelink={imagelink}
            category={cardtype}
            effect={effect}
            icon={icon}
            rarity={rarity}
          />
        </StCardPage>
        <StCardPage>
          <Gambar5
            title={name}
            imagelink={imagelink}
            category={cardtype}
            effect={effect}
            icon={icon}
            rarity={rarity}
          />
        </StCardPage>
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