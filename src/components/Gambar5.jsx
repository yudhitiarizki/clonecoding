// Group 5 (Spell, Trap)
  
// card type
import normalspell from '../assets/images/cardtype/normalspell.jpeg';
import typespell from '../assets/images/cardtype/typespell.jpeg';
import normaltrap from '../assets/images/cardtype/normaltrap.jpeg';
import typetrap from '../assets/images/cardtype/typetrap.jpeg';
// icon
import normal from '../assets/images/sticon/normal.png';
import continuous from '../assets/images/sticon/continuous.png';
import counter from '../assets/images/sticon/counter.png';
import equip from '../assets/images/sticon/equip.png';
import field from '../assets/images/sticon/field.png';
import quickplay from '../assets/images/sticon/quickplay.png';
import ritual from '../assets/images/sticon/ritual.png';
///////////////////////////////////////////////////////////////////
import React, { useState, useEffect, useRef } from "react"
import '../assets/css/style.css';

const Gambar5 = ({
  name= "Test Name",
  cardtype= "spell",
  rarity= "common",
  picture= "https://thiscatdoesnotexist.com/",
  icon= "normal",
  effect= "",
  set1= "",
  set2= "",
  serial= "",
  edition= "",
  year= "",
  creator= ""
}) => {
  
  // initial state
  const [image, setImage] = useState(null)
  const [backimage, setBackImage] = useState(null)
  const [iconimage, setIconImage] = useState(null)
  const canvas = useRef(null)

  // Preparing image
  useEffect(() => {
    const imagetemp = new Image();
    imagetemp.src = picture
    imagetemp.onload = () => setImage(imagetemp)
  }, [picture])

  // Preparing template card and Icon
  useEffect(() => {
    const backimagetemp = new Image();
    const iconimagetemp = new Image();
    if (icon === "normal" || icon === "") {
      iconimagetemp.src = normal
      iconimagetemp.onload = () => setIconImage(iconimagetemp)
      if (cardtype === "spell"){
        backimagetemp.src = normalspell
      } else if (cardtype === "trap"){
        backimagetemp.src = normaltrap
      }
    } else {
      if (icon === "continuous") {
        iconimagetemp.src = continuous
      } else if (icon === "counter") {
        iconimagetemp.src = counter
      } else if (icon === "equip") {
        iconimagetemp.src = equip
      } else if (icon === "field") {
        iconimagetemp.src = field
      } else if (icon === "quickplay") {
        iconimagetemp.src = quickplay
      } else if (icon === "ritual") {
        iconimagetemp.src = ritual
      }
      iconimagetemp.onload = () => setIconImage(iconimagetemp)
      if (cardtype === "spell"){
        backimagetemp.src = typespell
      } else if (cardtype === "trap"){
        backimagetemp.src = typetrap
      }
    }
    backimagetemp.onload = () => setBackImage(backimagetemp)
  }, [cardtype,icon])

  // Generating card image
  useEffect(() => {
    if( canvas && image && backimage && iconimage) {
      const ctx = canvas.current.getContext("2d") 
      // emptying canvas
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // card template
      ctx.drawImage(backimage, 0, 0, 1308, 2026 )
      // card picture
      ctx.drawImage(image, 158, 371, 993, 1053)
      // spell/trap icon
      ctx.drawImage(iconimage, 1076, 255, 69, 69)
      
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

export default Gambar5