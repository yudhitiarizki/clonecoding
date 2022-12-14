// Grup 3 (dark synchro)

import imagecardtype from '../assets/images/cardtype/index.js'
import imageattribute from '../assets/images/attribute/index.js'
import imageneglevel from '../assets/images/misc/neglevel.png';
import React, { useState, useEffect, useRef} from "react"
import '../assets/css/style.css';

const Gambar3 = ({
  name= "Test Name",
  cardtype= "darksynchro",
  rarity= "common",
  picture= "https://thiscatdoesnotexist.com/",
  effect= "Working on clone coding",
  attribute="earth",
  neglevel="12",
  monstertype="DEVELOPER/EFFECT",
  attack="1",
  defense="1",
  pendulum=false,
  pendulumeffect="",
  bluescale="1",
  redscale="8",
  set1= "1234",
  set2= "123456",
  serial= "",
  edition= "",
  year= "",
  creator= ""
}) => {
  
  // initial state
  const [image, setImage] = useState(null)
  const [neglevelimage, setNegLevelImage] = useState(null)
  const [backimage, setBackImage] = useState(null)
  const [attributeimage, setAttributeImage] = useState(null)
  const canvas = useRef(null)
  let iter = 0

  // Preparing image
  useEffect(() => {
    const imagetemp = new Image();
    imagetemp.src = picture
    imagetemp.onload = () => setImage(imagetemp)
  }, [picture])

  // Preparing Negative Level
  useEffect(() => {
    const neglevelimagetemp = new Image();
    neglevelimagetemp.src = imageneglevel
    neglevelimagetemp.onload = () => setNegLevelImage(neglevelimagetemp)
  })

  // Preparing template card
  useEffect(() => {
    const backimagetemp = new Image();
    if (pendulum === false) {
      backimagetemp.src = imagecardtype.imagecardtypemonster.darksynchro
    } else if (pendulum === true){
      backimagetemp.src = imagecardtype.imagecardtypemonster.darksynchrop  
    }
    backimagetemp.onload = () => setBackImage(backimagetemp)
  }, [pendulum])

  // Preparing attribute icon
  useEffect(() => {
    const attributeimagetemp = new Image();
    if (attribute === "dark" || attribute === "") {
      attributeimagetemp.src = imageattribute.dark
    } else if (attribute === "divine") {
      attributeimagetemp.src = imageattribute.divine
    } else if (attribute === "earth") {
      attributeimagetemp.src = imageattribute.earth
    } else if (attribute === "fire") {
      attributeimagetemp.src = imageattribute.fire
    } else if (attribute === "laugh") {
      attributeimagetemp.src = imageattribute.laugh
    } else if (attribute === "light") {
      attributeimagetemp.src = imageattribute.light
    } else if (attribute === "water") {
      attributeimagetemp.src = imageattribute.water
    } else if (attribute === "wind") {
      attributeimagetemp.src = imageattribute.wind
    } else if (attribute === "boss") {
      attributeimagetemp.src = imageattribute.boss
    } else if (attribute === "boss1") {
      attributeimagetemp.src = imageattribute.boss1
    } else if (attribute === "boss2") {
      attributeimagetemp.src = imageattribute.boss2
    } else if (attribute === "boss3") {
      attributeimagetemp.src = imageattribute.boss3
    }
    attributeimagetemp.onload = () => setAttributeImage(attributeimagetemp)
  }, [attribute])

  // Generating card image
  useEffect(() => {
    if( canvas && image && backimage && attributeimage && neglevelimage && (pendulum === false || pendulum === "")) {
      const ctx = canvas.current.getContext("2d") 
      // emptying canvas
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // card template
      ctx.drawImage(backimage, 0, 0, 1308, 2026 )
      // card picture
      ctx.drawImage(image, 158, 371, 993, 1053)
      // attribute icon
      ctx.drawImage(attributeimage, 1091, 88, 132, 132)
      // Neglevel
      while (iter < neglevel){
        ctx.drawImage(neglevelimage, 133+(iter*88), 255, 75, 75)
        iter++
      }
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

      // monster type font settings
      ctx.font = "bold 34px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(['[', monstertype ,']'].join(""), 100, 1560, 1100)
      
      // effect font settings
      ctx.font = "30px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(effect, 100, 1600, 1100)

      // attack and def
      ctx.font = "bold 47px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText(attack, 940, 1887)
      ctx.fillText(defense, 1200, 1887)
      
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
      ctx.fillText(["??",year,creator].join(" "), 1190, 1965, 520)
    } else if ( canvas && image && backimage && attributeimage && neglevelimage && pendulum === true){
      //////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////
      const ctx = canvas.current.getContext("2d") 
      // emptying canvas
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // card template
      ctx.drawImage(backimage, 0, 0, 1308, 2026 )
      // card picture
      ctx.drawImage(image, 85, 365, 1136, 895)
      // attribute icon
      ctx.drawImage(attributeimage, 1091, 88, 132, 132)
      // Neglevel
      while (iter < neglevel){
        ctx.drawImage(neglevelimage, 133+(iter*88), 255, 75, 75)
        iter++
      }
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
      // blue scale and red scale
      ctx.font = "47px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(bluescale, 120, 1490)
      ctx.fillText(redscale, 1160, 1490)
      
      // pendulum effect
      ctx.font = "30px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(pendulumeffect, 210, 1315, 885)

      // monster type font settings
      ctx.font = "bold 34px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(['[', monstertype ,']'].join(""), 100, 1605, 1100)

      // effect font settings
      ctx.font = "30px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(effect, 100, 1645, 1100)
      
      // attack and defense font settings
      ctx.font = "bold 47px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText(attack, 940, 1887)
      ctx.fillText(defense, 1200, 1887)
      
      // set1 and set2 font settings
      ctx.font = "34px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "left"
      ctx.fillText([set1,set2].join("-"), 100, 1885)

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
      ctx.fillText(["??",year,creator].join(" "), 1190, 1965, 520)
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

export default Gambar3 