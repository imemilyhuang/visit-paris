import React, { useState } from 'react'
import "../../styles/map.scss"
import useWindowDimensions from '../../hooks/useWindowDimensions'
import colors from '../../styles/colors'
import { getDescription } from "./utils"

const Map = () => {
  const [focused, setFocused] = useState("none")

  const {width} = useWindowDimensions()

  const svgWidth = width>1200 ? 400 : width < 400 ? width-80 : width-140

  return (
    <div className='map-container-row' style={{justifyContent: "center", alignItems: "center"}}>
      <svg onMouseLeave={() => setFocused('none')} height={(svgWidth*400)/700} width={svgWidth} viewBox={`400 0 700 880`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" xmlSpace="preserve">
        <path className='map-shape' id="arrondissement01" onMouseOver={() => setFocused("arrondissement01")} d="M619.6,311.4l-3.9,1l0.8,3.9l-9.9,21.9l-1.2,2.2l-1.5,1.3l-14.2,27.9  l62.1,30.7l9.6,3l0,0.1l12.6,4.2l14.8,3.9l19.3,16.8l11.8,14.8l10.3,7.7v0l0.1,0l8.5-12.4l6.6-15.5l2.4-0.5l15.8-42.9l4.9-13.4  l-11.3-3.7l-82.5-29.6l-8.9-3.2l-17.7-6.1l-3.2-2L632.4,308L619.6,311.4L619.6,311.4z"/>
        <path className='map-shape' id="arrondissement02" onMouseOver={() => setFocused("arrondissement02")} d="M632.4,308l12.4,13.6l3.2,2l17.7,6.1l8.9,3.2l82.5,29.6l11.3,3.7  l19.7-52.8l-38-11.9l-46.9-11.8L632.4,308L632.4,308z"/>
        <path className='map-shape' id="arrondissement03" onMouseOver={() => setFocused("arrondissement03")} d="M768.4,366.2l-4.9,13.4l19.5,6.6l20.5,10.3l11.3,12.8l11.4,8.4l6.2,4  l10.1,4.9l5,2.5l12.3,3.2l12.8,3.2l-10.4-66.2l-14.5-36.3l-3.2-3l-3.4-3l-41.2-9.4l-11.9-4L768.4,366.2L768.4,366.2z"/>
        <path className='map-shape' id="arrondissement04" onMouseOver={() => setFocused("arrondissement04")} d="M747.7,422.5l-2.4,0.5l-6.6,15.5l-8.6,12.4l11.9,5.2l16.6,10.2  l15.5,6.9l14.1,4l20.3,9.8l14.1,8.7l9.2,8.2l16,17.5l12.1-10.6l16-52.6l-3.5-22.9l-12.8-3.2l-12.3-3.2l-5-2.5l-10.1-4.9l-6.2-4  l-11.4-8.4l-11.3-12.8L783,386.2l-19.5-6.6L747.7,422.5L747.7,422.5z"/>
        <path className='map-shape' id="arrondissement05" onMouseOver={() => setFocused("arrondissement05")} d="M728.7,453.4l-7.9,25.7l-13.3,34l-10.9,31.6l-9.2,23.9l-1.5,2.2  l-1.5,3.5l-0.5,5.4l5.2,2.4l26.6,9.1l28.2,9.2l27.4,5h2.5l58-27.7l16.6-33.3l0.8-4.9l8.6-7.1l-9.9-11.1l-16-17.5l-9.2-8.2l-14.1-8.7  l-20.3-9.8l-14.1-4l-15.5-6.9L742,455.9l-11.9-5.2L728.7,453.4L728.7,453.4z"/>
        <path className='map-shape' id="arrondissement06" onMouseOver={() => setFocused("arrondissement06")} d="M658.9,410.8l4.7,2.2l-7.2,13.1l-2.9,5.5l-5.4,11.6l-1.7,5.7l-1.3,3.2  l-2.5,4.9l-1.7,5l-0.7,1.3l-4.9,6.9l-6.6,1.5l-4.4,3.7l-22.5,14.8l-18.2,14.5l-14.6,8.6l-4.4,1.8l15.5,12.1l32.9,17.1l70.8,35.3  l0.5-5.4l1.5-3.5l1.5-2.2l9.2-23.9l10.9-31.6l13.3-34l7.9-25.7l1.3-2.7l-10.3-7.7l-11.8-14.8l-19.3-16.8l-14.8-3.9l-12.6-4.2  L658.9,410.8L658.9,410.8z"/>
        <path className='map-shape' id="arrondissement07" onMouseOver={() => setFocused("arrondissement07")} d="M476.7,365.8l-25.9,5.4l-17,11.4l-27.6,29.9l65.7,63.5l0.5-0.3  l16.6,16.3l20.8,20.2l7.9-3.5l11.3-3.9l6.6,6l12.4,12.4l16.6-8.2l4.4-1.8l14.6-8.6l18.2-14.5l22.5-14.8l4.4-3.7l6.6-1.5l4.9-6.9  l0.7-1.3l1.7-5l2.5-4.9l1.3-3.2l1.7-5.7l5.4-11.6l2.9-5.5l7.2-13.1l-4.7-2.2l2.5-7.4l-9.6-3l-62.2-30.8l-12.3-6.2L476.7,365.8  L476.7,365.8z"/>
        <path className='map-shape' id="arrondissement08" onMouseOver={() => setFocused("arrondissement08")} d="M567.8,204.8l-11.6,2.4l-33.6,6.2l-67.1,21.7l-18.5,38.5l3.5,5.7  l10.9,19.7l8.4,21.2l3.5,17l2.7,14.3l9.9,5.5l0.7,9.1l100.7-2.5l12.3,6.2l14.3-28.1l1.5-1.4l1.2-2.2l9.9-21.9l-0.8-3.9l3.9-1  l4.7-27.7l0.7-3.9l2.2-5l-3-17l1.3-0.3l1.8-71.3L567.8,204.8L567.8,204.8z"/>
        <path className='map-shape' id="arrondissement09" onMouseOver={() => setFocused("arrondissement09")} d="M633.2,184l-3.7,1.5l-0.7,0.3l-1.5,0.3l-1.8,71.3l-1.3,0.3l3,17l-2.2,5  l-0.7,3.9l-4.7,27.7l12.8-3.4l70.8-18.3l46.9,11.8l-0.3-22.4l2-24l1.8-5l3.7-8.6l0.3-10.1l0.7-5.9l1.2-5l2.2-9.1l-1.5-21.3l-0.2-3.4  l-0.7-2.9l-14.8,2.9l-13.4,4l-29.2,8.4l-13.8-2.7l-28.6-12.9l-18.7-6.9L633.2,184L633.2,184z"/>
        <path className='map-shape' id="arrondissement10" onMouseOver={() => setFocused("arrondissement10")} d="M795.8,179.8l-19,2.2l-17.5,1.9l0.7,2.9l0.2,3.4l1.5,21.4l-2.2,9.1  l-1.2,5l-0.7,5.9l-0.3,10.1l-3.7,8.6l-1.9,5l-2,24l0.3,22.4l38,11.9l11.9,4l41.2,9.4l3.4,3l9.2-5.7l9.1-4.5l4.5-2l10.6-6.1l9.8-4.5  l11.6-5.4l11.4-6.7l11.6-5.7l-39.7-54.1l-0.2-35.3l-2-5.5l-1.7-3l-2.2-1.8l-2.2-3l-1.5-4.2l-3.9-2.2l-19.3-2l-31.9-0.5L795.8,179.8  L795.8,179.8z"/>
        <path className='map-shape' id="arrondissement11" onMouseOver={() => setFocused("arrondissement11")} d="M910.8,295.1l-11.4,6.6l-11.6,5.4l-9.8,4.5l-10.6,6l-4.5,2l-9.1,4.5  l-9.2,5.7l3.2,3l14.5,36.3l10.4,66.2l3.5,22.9l6.4-1.2l6.2,5.7l6,3.4l9.1,3.7l29.1,10.9l9.6,2.2l12.9,1.2l13.3,1.9l24.7,5.5  l22.5,5.4l19.2,4.2l19.2,2.7l0.7-7.1l-5.2-21.5l-25-48.2l-11.6-8.9l-14.8-7.1l-1.8-2.2l-11.9-38.2l-22.9-29.9l-3-7.7l-14.6-16.6  l-8.4-9.7l-5.4-6.7l-7.9-10.8L910.8,295.1L910.8,295.1z"/>
        <path className='map-shape' id="arrondissement13" onMouseOver={() => setFocused("arrondissement13")} d="M849.4,539.7l-0.8,4.9l-16.6,33.3l-58,27.7h-2.5l-27.4-5l-28.2-9.2  l-2.9,33l-2.4,22.4l0.5,9.8l0.7,16.8l2,11.9l-0.2,16.5l-1.3,22.2l1.5,9.1l5.6,12.9l6.4,6.6l4.9,8.1l-3.4,31.3l15.6,2.2l2.4-0.2  l10.9-8.2l11.8-6.2l5.9-1.7l7.1,0.2l3.9,1.3l3.4,2.2l5.4,7.7l4,3l12.9,0.7l31.6,2.5l21.4-12.6l47.9-24.2l21.4-10.6l4.2-2.4l8.7-4  l4-6.1l29.2-16.1l17.2-9.9l5.5-4.2l-33.1-38.5l-48.6-59.7l-24-32.1L858,532.6L849.4,539.7L849.4,539.7z"/>
        <path className='map-shape' id="arrondissement14" onMouseOver={() => setFocused("arrondissement14")} d="M611.4,546.2l-17,20.8l1.9,8.4l-2.7,3.2l-5.2-4.2l-10.2,13.3l-6.4,9.9  l-4.4,2.9L562,605l-5.6,5.9l-11.8,12.6l-0.3-0.3l-0.3,0.7l-1,1l-11.4,14.3l-0.8,1.3l-10.9,14.1L505,672.8l-6.4,7.1l-9.6,12.8l-2.9,5  l-4.5,4.7l-6.9,8.1l23,8.1l26.9,8.9l31.4,10.8l36.5,12.3l67.1,22.7l-3.7,10.3l12.4,2.7l7.6,0.5l38.5,2.9l5.9,2l6.7,3.2l0.2-3  l3.4-31.3l-4.9-8.1l-6.4-6.6l-5.6-12.9l-1.5-9.1l1.3-22.2l0.2-16.5l-2-11.9l-0.7-16.8l-0.5-9.8l2.4-22.4l2.9-33l-26.6-9.1l-5.2-2.4  l-70.8-35.3L611.4,546.2L611.4,546.2z"/>
        <path className='map-shape' id="arrondissement15" onMouseOver={() => setFocused("arrondissement15")} d="M402.4,417.4l-7.4,15.5L368.5,463l-28.9,29.9l-15.3,19.2l-43,69.1  l-34.5,50.3l14.8-3.7l13.3-2.5l12.9,13.1l1.7-1.3l1,1l-6.4,5l-10.3,8.6l-0.7,0.8l-0.7,0.7l2.2,33.3l29.1-1l2.2-1l2-1.9l12.4-11.3  l21.7-26.4l35.6,20.3l8.6,5.5l3.5,2l7.1,4.5l23.4,15.1l51.1,17l2.9,0.8l0.5,0.2l6.9-8.1l4.5-4.7l2.9-5l9.6-12.8l6.4-7.1l14.8-18.2  l10.9-14.1l0.8-1.3l11.4-14.3l1-1l0.3-0.7l0.3,0.3l11.8-12.6l5.6-5.9l5.4-4.5l4.4-2.9l6.4-9.9l10.2-13.3l5.2,4.2l2.7-3.2l-1.9-8.4  l17-20.8l1.8-1.7l-33-17.1l-15.5-12.1l-16.7,8.2l-12.4-12.4l-6.6-6l-11.3,3.9l-7.9,3.5l-37.5-36.5l-0.5,0.3l-65.7-63.5L402.4,417.4  L402.4,417.4z"/>
        <path className='map-shape' id="arrondissement17" onMouseOver={() => setFocused("arrondissement17")} d="M604,30.1l-17.1,1l-0.7,0.8l-8.6,7.6l-2.4,2.4l-16,7.4l-20.7,9.8  l-1.5,0.5l-30.3,17.3l-14,10.4l-6.6,4.5l-17.6,12.8l-17.5,12.8l-14.8,11.4l-16.1,3l-4.4,1.3l-35,25.4l-23,27.4l-3.9,5.2l-2.2,9.2  l-0.3,2.9l-0.3,3.9l-0.3,0.8l-0.5,3.9l-0.2,1l-1.2,7.9l-0.5,2.2l-0.3,3l-0.2,2.2l-1.7,1.7l90.8,43.7l18.5-38.5l67.1-21.7l33.6-6.2  l11.6-2.4l59.5-18.7l1.5-0.3L617.8,150l12.1-51.9L645,28.6L604,30.1L604,30.1z"/>
        <path className='map-shape' id="arrondissement18" onMouseOver={() => setFocused("arrondissement18")} d="M881,21.5l-45.7,1l-7.6,0.3l-8.4,0.2l-3,0.2h-0.7h-1h-0.2l-39.7,1.3  L729.2,26l-84.6,2.9l-15.1,69.4l-12.1,51.9l11.1,35.8l0.7-0.3l3.7-1.5l7.6-7.4l18.7,6.9l28.6,12.9l13.8,2.7l29.2-8.4l13.4-4L759,184  l36.5-4l22-2.4l31.9,0.5l7.7-12.4l4.5-8.2l7.9-27.4l3-9.2l8.2-29.9l2.4-4l7.7-7.4l-8.2-10.3l-0.5-1.7l0.3-13.1l-1-33.1L881,21.5  L881,21.5z"/>
        <path className='map-shape' id="arrondissement19" onMouseOver={() => setFocused("arrondissement19")} d="M951.5,18.5l-9.6,0.5l-2.5,0.2h-2l-12.6,0.5l-4.2,0.2l-7.4,0.2l-16,0.8  l-1.2-0.2h-2.4H893l-8.7,0.3h-2.4l1,33.1l-0.3,13.1L883,69l8.2,10.3l-7.7,7.4l-2.4,4l-8.2,29.9l-3,9.2l-7.9,27.4l-4.5,8.2l-7.7,12.4  l19.3,2l3.9,2.2l1.5,4.2l2.2,3l2.2,1.8l1.7,3l2,5.5l0.2,35.3l39.7,54.1l2.9-2.4l14.8-5l17.7-5.7l11.3-2.2l5-3.2l6.9-4.7l6-0.8l3-0.5  l6.4-3.5l2.9-2l5.9-0.8h6.9l19,2.2l15.8-2.2l8.7-1.2l19-4.2l48.6-22.2l-0.7-1.3l-7.9-14.5l-4-1.3l-0.5-0.2l-1-0.3l-1.5-0.5l-6.1-1.9  l-1.3-0.5l-14.8-4.9l-2.5-1.7l-0.8-0.7l-6.9-4.7l-1.2-0.7l-6.7-4.9l-3.5-4.4l-4-5.9l-1.9-5.5l-1.2-3l-2-4.4l-0.2-5l-0.2-8.4l0.2-7.1  v-0.8l-0.3-6.6l0.2-0.8l-1.2-8.6l-0.2-1.5l-0.7-4.5l-0.3-2.5l-0.8-6.2l-0.7-1.5l-1.3-9.7l-3.7-22l-4.2-9.8l-1.3-2.9l-0.2-0.5  l-1.3-2.9l-3-7.9l-0.3-0.8l-2.5-5.4l-11.1-10.3l0.3-1.2v-0.3l-12.4-10.6h-0.5h-1.3l-2.2-1.8l-7.1-2.7l-29.1-7.9l-2.9-1L951.5,18.5  L951.5,18.5z"/>
        <path className='map-shape' id="arrondissement20" onMouseOver={() => setFocused("arrondissement20")} d="M1074.5,252.9l-19,4.2l-24.5,3.4l-19-2.2h-6.9l-5.9,0.8l-2.9,2  l-6.4,3.5l-9.1,1.3l-11.9,7.9l-11.3,2.2l-17.7,5.7l-14.8,5l-2.9,2.4l7.9,10.8l5.4,6.7l8.4,9.8l14.6,16.6l3,7.7l22.9,29.9l11.9,38.2  l1.8,2.2l14.5,6.7l11.9,9.2l25,48.2l5.4,20.7l-0.8,7.9l81,10.6l18.8,2.5l2.5-20.5l-2.2-17.8l-3.7-30.6v-1.5l-0.7-6.2v-0.5l-1.2-8.7  v-0.3l-1.8-17.3l-0.2-1l-0.3-2.4l-0.3-4.4l-3.9-34.8l-0.8-35.1v-26.6l-2.2-28.1l-8.1-35.8l-8.2-14.6L1074.5,252.9L1074.5,252.9z"/>
        <polygon className='map-shape' onMouseOver={() => setFocused("arrondissement16")} strokeMiterlimit="10" points="334.4,237 346.3,229.8 437.1,273.6 451.6,299.1 460,320.3   466.2,351.6 476.1,357.1 476.7,365.8 450.8,371.2 433.9,383 406.3,412.7 402.5,417.6 395.1,433.1 368.5,463.2 339.6,493.1   324.3,512.3 281.3,581.4 246.8,631.6 201.4,623.7 179.8,587.9 177.2,550.8 184.5,528.1 174.7,527.3 126.6,508.9 112.7,491.2   106.5,487.2 18.1,457.6 17.7,452 18.7,437.6 23.1,416.4 35.7,377.6 40.7,355 66.8,311.5 108.2,293.9 119.9,284.9 129.2,274.7   145.6,250.1 148.3,252 152,253.8 199.4,272 203,270 221.5,215.7 315.3,234 "/>
        <polygon className='map-shape' onMouseOver={() => setFocused("arrondissement12")} strokeMiterlimit="10" points="876.1,458.3 860.4,511 847.9,521.3 858,532.6 895.8,574.8   919.9,606.9 1001.5,705.1 1026.4,688.6 1034.5,686.9 1055.8,679.9 1072.2,670.4 1081.6,675.4 1087,679.8 1104.5,699.4 1120.2,711.5   1132.1,714.7 1155.8,714.2 1178.2,720.6 1212.8,719.6 1225.4,721.6 1235.1,725.3 1240,731.7 1244.4,736.9 1250.9,743.3   1261.9,755.1 1261.4,762.3 1264.9,764.2 1270.3,759.8 1282,765 1281.7,772.7 1296.2,772.6 1312.6,775.8 1354.8,775.9 1382.6,783.7   1407.9,783.5 1432.3,765.3 1433.3,753.9 1446.9,720.8 1453.7,690 1444.9,667.3 1450.5,649 1472,626 1474.5,609.8 1473,603.3   1451.3,571 1438.7,558.6 1431.6,554 1408.1,545.3 1378,541.1 1284.9,535.9 1280.4,568.8 1206.6,561.4 1199.2,551.3 1196.3,545.1   1190.9,537.2 1188.2,537.6 1178.5,545.5 1173.8,555.9 1174.3,560.3 1176,565.8 1183.4,581.1 1188.2,606.8 1190.9,615.2   1156.5,632.7 1143.9,635.4 1136.7,635.9 1136.6,633.9 1128.1,630.3 1133.1,624.6 1143.5,578.2 1149.6,547 1150.1,543.6   1151.4,540.4 1154.4,517 1054.3,503.9 1035.2,501.2 968.8,486 942.5,483 933,480.8 894.8,466.2 888.7,462.8 882.5,457.1 "/>
        <text transform="matrix(1 0 0 1 674.115 382.6927)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">1</text>
        <text transform="matrix(1 0 0 1 715.301 332.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">2</text>
        <text transform="matrix(1 0 0 1 812.301 376.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">3</text>
        <text transform="matrix(1 0 0 1 811.301 460.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">4</text>
        <text transform="matrix(1 0 0 1 759.301 546.8804)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">5</text>
        <text transform="matrix(1 0 0 1 657.301 507.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">6</text>
        <text transform="matrix(1 0 0 1 536.301 435.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">7</text>
        <text transform="matrix(1 0 0 1 529.301 300.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">8</text>
        <text transform="matrix(1 0 0 1 686.301 245.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">9</text>
        <text transform="matrix(1 0 0 1 825.301 266.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">10</text>
        <text transform="matrix(1 0 0 1 923.301 408.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">11</text>
        <text transform="matrix(1 0 0 1 1008.8317 592.6935)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">12</text>
        <text transform="matrix(1 0 0 1 834.301 694.8804)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">13</text>
        <text transform="matrix(1 0 0 1 614.301 694.8804)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">14</text>
        <text transform="matrix(1 0 0 1 416.3011 582.8804)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">15</text>
        <text transform="matrix(1 0 0 1 221.7093 393.3513)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">16</text>
        <text transform="matrix(1 0 0 1 492.3011 167.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">17</text>
        <text transform="matrix(1 0 0 1 740.301 113.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">18</text>
        <text transform="matrix(1 0 0 1 953.301 168.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">19</text>
        <text transform="matrix(1 0 0 1 1057.3011 365.8802)" fontFamily="'Work Sans'" fill={colors.white} fontSize="32">20</text>
      </svg>

      <div className='map-content-container'>
        <h2 className='mb'>EXPLORE PARIS'S NEIGHBORHOODS</h2>

        {getDescription(focused).title!=="none" && 
          <h4 className=''>{getDescription(focused).title}</h4>}
        {getDescription(focused).title!=="none" && 
          <h4 className='subtitle mbSmall'>{getDescription(focused).subtitle}</h4>}
        <p>{getDescription(focused).desc}</p>
      </div>
    </div>
  )
}

export default Map