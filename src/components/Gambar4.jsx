// Grup 4 (Link)

import imagecardtype from '../assets/images/cardtype/index.js'
import imageattribute from '../assets/images/attribute/index.js'
import imagelinkarrow from '../assets/images/linkarrow/index.js'
import React, { useState, useEffect, useRef} from "react"
import '../assets/css/style.css';

const Gambar4 = ({
  name= "Test Name",
  cardtype= "link",
  rarity= "common",
  picture= "https://thiscatdoesnotexist.com/",
  effect= "Working on clone coding",
  attribute="earth",
  linkarrow={
    NW:false,
    NN:false,
    NE:false,
    EE:false,
    SE:false,
    SS:false,
    SW:false,
    WW:false,
  },
  monstertype="DEVELOPER/EFFECT",
  attack="1000",
  pendulum=true,
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
  const [backimage, setBackImage] = useState(null)
  const [attributeimage, setAttributeImage] = useState(null)
  const canvas = useRef(null)
  
  // link arrow
  const [NW, setNW] = useState(null)
  const [NN, setNN] = useState(null)
  const [NE, setNE] = useState(null)
  const [EE, setEE] = useState(null)
  const [SE, setSE] = useState(null)
  const [SS, setSS] = useState(null)
  const [SW, setSW] = useState(null)
  const [WW, setWW] = useState(null)
  
  // Preparing image
  useEffect(() => {
    const imagetemp = new Image();
    imagetemp.src = picture
    imagetemp.onload = () => setImage(imagetemp)
  }, [picture])

  // Preparing linkarrow
  useEffect(() => {
    if (linkarrow.NW){
      const imagelinkarrowtemp = new Image();
      imagelinkarrowtemp.src = imagelinkarrow.NW
      imagelinkarrowtemp.onload = () => setNW(imagelinkarrowtemp)
    }
    if (linkarrow.NN){
      const imagelinkarrowtemp = new Image();
      imagelinkarrowtemp.src = imagelinkarrow.NN
      imagelinkarrowtemp.onload = () => setNN(imagelinkarrowtemp)
    }
    if (linkarrow.NE){
      const imagelinkarrowtemp = new Image();
      imagelinkarrowtemp.src = imagelinkarrow.NE
      imagelinkarrowtemp.onload = () => setNE(imagelinkarrowtemp)
    }
    if (linkarrow.EE){
      const imagelinkarrowtemp = new Image();
      imagelinkarrowtemp.src = imagelinkarrow.EE
      imagelinkarrowtemp.onload = () => setEE(imagelinkarrowtemp)
    }
    if (linkarrow.SE){
      const imagelinkarrowtemp = new Image();
      imagelinkarrowtemp.src = imagelinkarrow.SE
      imagelinkarrowtemp.onload = () => setSE(imagelinkarrowtemp)
    }
    if (linkarrow.SS){
      const imagelinkarrowtemp = new Image();
      imagelinkarrowtemp.src = imagelinkarrow.SS
      imagelinkarrowtemp.onload = () => setSS(imagelinkarrowtemp)
    }
    if (linkarrow.SW){
      const imagelinkarrowtemp = new Image();
      imagelinkarrowtemp.src = imagelinkarrow.SW
      imagelinkarrowtemp.onload = () => setSW(imagelinkarrowtemp)
    }
    if (linkarrow.WW){
      const imagelinkarrowtemp = new Image();
      imagelinkarrowtemp.src = imagelinkarrow.WW
      imagelinkarrowtemp.onload = () => setWW(imagelinkarrowtemp)
    }
  }, [linkarrow])


  // Preparing template card
  useEffect(() => {
    const backimagetemp = new Image();
    if (pendulum === false) {
      backimagetemp.src = imagecardtype.imagecardtypemonster.link
    } else if (pendulum === true){
      backimagetemp.src = imagecardtype.imagecardtypemonster.linkp  
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
    if( canvas && image && backimage && attributeimage && (pendulum === false || pendulum === "")) {
      const ctx = canvas.current.getContext("2d") 
      // emptying canvas
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // card template
      ctx.drawImage(backimage, 0, 0, 1308, 2026 )
      // card picture
      ctx.drawImage(image, 158, 371, 993, 1053)
      // attribute icon
      ctx.drawImage(attributeimage, 1091, 88, 132, 132)

      // image Link arrow
      if ( NW !== false && NW !== null) {
        ctx.drawImage(NW, 107, 319, 255, 265)
      }
      if ( NN !== false && NN !== null) {
        ctx.drawImage(NN, 527, 300, 255, 265)
      }
      if( NE !== false && NE !== null) {
        ctx.drawImage(NE, 1087, 319, 245, 265)
      }
      if( EE !== false && EE !== null) {
        ctx.drawImage(EE, 1153, 770, 250, 260)
      }
      if( SE !== false && SE !== null) {
        ctx.drawImage(SE, 1072, 1363, 252, 260)
      }
      if( SS !== false && SS !== null) {
        ctx.drawImage(SS, 525, 1424, 260, 270)
      }
      if( SW !== false && SW !== null) {
        ctx.drawImage(SW, 108, 1362, 245, 260)
      }
      if( WW !== false && WW !== null) {
        ctx.drawImage(WW, 83, 763, 260, 270)
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

      // attack 
      ctx.font = "bold 47px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText(attack, 940, 1887)

      // link arrow
      ctx.font = " 47px vanda"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText((Object.values(linkarrow).reduce((a, item) => a + item, 0)), 1200, 1887)
      
      // set1 and set2 font settings
      ctx.font = "34px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText([set1,set2].join("-"), 1060, 1490)

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
    } else if ( canvas && image && backimage && attributeimage && NN && NE && EE && SE && SS && SW && WW && NN && pendulum === true){
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

      // image Link arrow
      if( NW !== false || NW !== null) {
        ctx.drawImage(NW, 50, 317, 255, 265)
      }
      if( NN !== false || NN !== null) {
        ctx.drawImage(NN, 527, 292, 255, 265)
      }
      if( NE !== false || NE !== null) {
        ctx.drawImage(NE, 1145, 317, 245, 265)
      }
      if( EE !== false || EE !== null) {
        ctx.drawImage(EE, 1222, 960, 250, 265)
      }
      if( SE !== false || SE !== null) {
        ctx.drawImage(SE, 1140, 1825, 252, 265)
      }
      if( SS !== false || SS !== null) {
        ctx.drawImage(SS, 525, 1908, 260, 270)
      }
      if( SW !== false || SW !== null) {
        ctx.drawImage(SW, 53, 1825, 245, 264)
      }
      if( WW !== false || WW !== null) {
        ctx.drawImage(WW, 8, 956, 265, 270)
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
      
      // attack font settings
      ctx.font = "bold 47px Times New Roman"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText(attack, 940, 1887)

      // link arrow
      ctx.font = " 47px vanda"
      ctx.fillStyle = "black"
      ctx.textAlign = "right"
      ctx.fillText((Object.values(linkarrow).reduce((a, item) => a + item, 0)), 1200, 1887)

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

export default Gambar4