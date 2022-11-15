// Grup 1 (Normal, Effect, Fusion, Ritual, Synchro, Legendary Dragon, Token, Obelisk, Slifer, Ra)

// card type
import normal from '../assets/images/cardtype/normal.jpeg';
import imgeffect from '../assets/images/cardtype/effect.jpeg';
import fusion from '../assets/images/cardtype/fusion.jpeg';
import ritual from '../assets/images/cardtype/ritual.jpeg';
import synchro from '../assets/images/cardtype/synchro.jpeg';
import legendarydragon from '../assets/images/cardtype/legendarydragon.jpeg';
import token from '../assets/images/cardtype/token.jpeg';
import obelisk from '../assets/images/cardtype/obelisk.jpeg';
import slifer from '../assets/images/cardtype/slifer.jpeg';
import ra from '../assets/images/cardtype/ra.jpeg';

// pendulum
import normalp from '../assets/images/cardtype/normalp.jpeg';
import effectp from '../assets/images/cardtype/effectp.jpeg';
import fusionp from '../assets/images/cardtype/fusionp.jpeg';
import ritualp from '../assets/images/cardtype/ritualp.jpeg';
import synchrop from '../assets/images/cardtype/synchrop.jpeg';
import legendarydragonp from '../assets/images/cardtype/legendarydragonp.jpeg';
import tokenp from '../assets/images/cardtype/tokenp.jpeg';
import obeliskp from '../assets/images/cardtype/obeliskp.jpeg';
import sliferp from '../assets/images/cardtype/sliferp.jpeg';
import rap from '../assets/images/cardtype/rap.jpeg';

// attribute
import boss from '../assets/images/attribute/boss.png';
import boss1 from '../assets/images/attribute/boss1.png';
import boss2 from '../assets/images/attribute/boss2.png';
import boss3 from '../assets/images/attribute/boss3.png';
import dark from '../assets/images/attribute/dark.png';
import divine from '../assets/images/attribute/divine.png';
import earth from '../assets/images/attribute/earth.png';
import fire from '../assets/images/attribute/fire.png';
import laugh from '../assets/images/attribute/laugh.png';
import light from '../assets/images/attribute/light.png';
import water from '../assets/images/attribute/water.png';
import wind from '../assets/images/attribute/wind.png';
// misc
import imglevel from '../assets/images/misc/level.png';
///////////////////////////////////////////////////////////////////
import React, { useState, useEffect, useRef } from "react"
import '../assets/css/style.css';

const Gambar1 = ({
  name= "Test Name",
  cardtype= "normal",
  rarity= "common",
  picture= "https://thiscatdoesnotexist.com/",
  effect= "",
  attribute="dark",
  level="0",
  monstertype="",
  attack="0",
  defense="0",
  pendulum=false,
  pendulumeffect="",
  bluescale="0",
  redscale="0",
  set1= "",
  set2= "",
  serial= "",
  edition= "",
  year= "",
  creator= ""
}) => {
  
  // initial state
  const [image, setImage] = useState(null)
  const [levelimage, setLevelImage] = useState(null)
  const [backimage, setBackImage] = useState(null)
  const [attributeimage, setAttributeImage] = useState(null)
  const canvas = useRef(null)

  // Preparing image
  useEffect(() => {
    const imagetemp = new Image();
    imagetemp.src = picture
    imagetemp.onload = () => setImage(imagetemp)
  }, [picture])

  // Preparing level
  useEffect(() => {
    const levelimagetemp = new Image();
    levelimagetemp.src = imglevel
    levelimagetemp.onload = () => setLevelImage(levelimagetemp)
  })

  // Preparing template card
  useEffect(() => {
    const backimagetemp = new Image();
    if (pendulum === false) {
      if (cardtype === "normal") {
        backimagetemp.src = normal  
      } else if (cardtype === "fusion") {
        backimagetemp.src = fusion  
      } else if (cardtype === "effect") {
        backimagetemp.src = imgeffect  
      } else if (cardtype === "ritual") {
        backimagetemp.src = ritual  
      } else if (cardtype === "token") {
        backimagetemp.src = token  
      } else if (cardtype === "synchro") {
        backimagetemp.src = synchro  
      } else if (cardtype === "legendarydragon") {
        backimagetemp.src = legendarydragon  
      } else if (cardtype === "obelisk") {
        backimagetemp.src = obelisk  
      } else if (cardtype === "ra") {
        backimagetemp.src = ra  
      } else if (cardtype === "slifer") {
        backimagetemp.src = slifer  
      }
    } else if (pendulum === true){
      if (cardtype === "normal") {
        backimagetemp.src = normalp  
      } else if (cardtype === "fusion") {
        backimagetemp.src = fusionp  
      } else if (cardtype === "effect") {
        backimagetemp.src = effectp
      } else if (cardtype === "ritual") {
        backimagetemp.src = ritualp  
      } else if (cardtype === "token") {
        backimagetemp.src = tokenp  
      } else if (cardtype === "synchro") {
        backimagetemp.src = synchrop  
      } else if (cardtype === "legendarydragon") {
        backimagetemp.src = legendarydragonp  
      } else if (cardtype === "obelisk") {
        backimagetemp.src = obeliskp  
      } else if (cardtype === "ra") {
        backimagetemp.src = rap 
      } else if (cardtype === "slifer") {
        backimagetemp.src = sliferp  
      }
    }
    backimagetemp.onload = () => setBackImage(backimagetemp)
  }, [cardtype,pendulum])

  // Preparing attribute icon
  useEffect(() => {
    const attributeimagetemp = new Image();
    if (attribute === "dark" || attribute === "") {
      attributeimagetemp.src = dark
    } else if (attribute === "divine") {
      attributeimagetemp.src = divine
    } else if (attribute === "earth") {
      attributeimagetemp.src = earth
    } else if (attribute === "fire") {
      attributeimagetemp.src = fire
    } else if (attribute === "laugh") {
      attributeimagetemp.src = laugh
    } else if (attribute === "light") {
      attributeimagetemp.src = light
    } else if (attribute === "water") {
      attributeimagetemp.src = water
    } else if (attribute === "wind") {
      attributeimagetemp.src = wind
    } else if (attribute === "boss") {
      attributeimagetemp.src = boss
    } else if (attribute === "boss1") {
      attributeimagetemp.src = boss1
    } else if (attribute === "boss2") {
      attributeimagetemp.src = boss2
    } else if (attribute === "boss3") {
      attributeimagetemp.src = boss3
    }
    attributeimagetemp.onload = () => setAttributeImage(attributeimagetemp)
  }, [cardtype,attribute])

  // Generating card image
  useEffect(() => {
    if( canvas && image && backimage && attributeimage && levelimage && pendulum === false) {
      const ctx = canvas.current.getContext("2d") 
      // emptying canvas
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // card template
      ctx.drawImage(backimage, 0, 0, 1308, 2026 )
      // card picture
      ctx.drawImage(image, 158, 371, 993, 1053)
      // attribute icon
      ctx.drawImage(attributeimage, 1076, 230, 69, 69)
      // level
      // Nanti pakai iterasi
      ctx.drawImage(levelimage, 1076, 255, 69, 69)
      
      // name font settings 
      ctx.font = "100px Times New Roman"
      ctx.textAlign = "left"
      if (rarity==="common" || rarity===""){
        ctx.fillStyle = "white"
        ctx.fillText(name, 97, 193, 970)
        ctx.fillStyle = "white"
      } else if (rarity==="silver"){
        ctx.fillStyle = "white"
        ctx.fillText(name, 98, 192, 970)
        ctx.fillStyle = "black"
        ctx.fillText(name, 102, 188, 970)
        ctx.fillStyle = "gray"
        ctx.fillText(name, 100, 190, 970)
      } else if (rarity==="gold"){
        ctx.fillStyle = "white"
        ctx.fillText(name, 98, 192, 970)
        ctx.fillStyle = "black"
        ctx.fillText(name, 102, 188, 970)
        ctx.fillStyle = "olive"
        ctx.fillText(name, 100, 190, 970)
      }

      // effect font settings
      ctx.font = "30px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(effect, 100, 1560, 1100)

      // set1 and set2 font settings
      ctx.font = "34px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText([set1,set2].join("-"), 1170, 1490)

      // serial font settings
      ctx.font = "34px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "left"
      ctx.fillText(serial, 70, 1965, 150)

      // edition font settings
      ctx.font = "34px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(edition, 235, 1965, 400)

      // year font settings
      ctx.font = "34px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText(["©",year,creator].join(" "), 1190, 1965, 520)
    }
  },)

  return (
    <div>
        <canvas className="canvas"
            ref={canvas}
            // ini ukuran gambar yang ditampilkan
            width={1388}
            height={2026}
            />
    </div>
  )
}

export default Gambar1