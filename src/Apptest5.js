// // Function to find the closest label text for a given angle
// function getClosestLabelText(angle, labels) {
//     try {
//         console.log("Finding closest label for angle:", angle);
//         return labels.reduce((prev, curr) => {
//             console.log("Comparing:", curr.angle, "with", angle);
//             return (Math.abs(curr.angle - angle) < Math.abs(prev.angle - angle) ? curr : prev);
//         }).text;
//     } catch (error) {
//         console.error("Error in getClosestLabelText:", error);
//         return null;
//     }
//   }
    
//     import React, { useState, useEffect } from 'react';
//     import { Slider, Snackbar } from '@mui/material';
//     import axios from 'axios';
    
//     import LocalParkingIcon from '@mui/icons-material/LocalParking';
//     import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
//     import BoltIcon from '@mui/icons-material/Bolt';
//     import BatteryFullIcon from '@mui/icons-material/BatteryFull';
//     import PercentIcon from '@mui/icons-material/Percent';
//     import EvStationIcon from '@mui/icons-material/EvStation';
//     import SettingsIcon from '@mui/icons-material/Settings';
//     import { TbManualGearboxFilled } from "react-icons/tb";
//     import { TbManualGearbox } from "react-icons/tb";
//     import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
//     import { FaTemperatureEmpty } from "react-icons/fa6";
//     import { FaTemperatureFull } from "react-icons/fa6";
//     import { FaTemperatureHalf } from "react-icons/fa6";
//     import { FaTemperatureQuarter } from "react-icons/fa6";
//     import { FaTemperatureThreeQuarters } from "react-icons/fa6";
//     import { LuParkingCircle, LuParkingCircleOff } from "react-icons/lu";
//     import { SiGoogleearthengine } from "react-icons/si";
//     import { ImPower } from "react-icons/im";
//     import { MdBatteryChargingFull } from "react-icons/md";
//     import Engineicon from './components/engine.js';
//     import { MdBatteryCharging20 } from "react-icons/md";
//     import { MdBatteryCharging30 } from "react-icons/md";
//     import { MdBatteryCharging50 } from "react-icons/md";
//     import { MdBatteryCharging60 } from "react-icons/md";
//     import { MdBatteryCharging80 } from "react-icons/md";
//     import { MdBatteryCharging90 } from "react-icons/md";
//     import { MdOutlineBolt } from "react-icons/md";
//     import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
//     import { MdOutlineBatteryAlert } from "react-icons/md";
//     import { MdBattery20, MdBattery30, MdBattery50, MdBattery60, MdBattery80, MdBattery90, MdBatteryFull } from "react-icons/md";
//     import { FaThermometerEmpty, FaThermometerQuarter, FaThermometerHalf, FaThermometerThreeQuarters, FaThermometerFull } from "react-icons/fa";
//     import { BsPlugin } from "react-icons/bs";
//     import { PiPlugChargingDuotone, PiPlugChargingFill } from "react-icons/pi";
//     import { FaPlug } from "react-icons/fa6";
//     import * as d3 from 'd3';
  
//   const kwLabels = [
//     { angle: -135, text: '-1000 kW' },
//     { angle: -108, text: '-800 kW' },
//     { angle: -81, text: '-600 kW' },
//     { angle: -54, text: '-400 kW' },
//     { angle: -27, text: '-200 kW' },
//     { angle: 0, text: '0 kW' },
//     { angle: 27, text: '200 kW' },
//     { angle: 54, text: '400 kW' },
//     { angle: 81, text: '600 kW' },
//     { angle: 108, text: '800 kW' },
//     { angle: 135, text: '1000 kW' }
//   ];
  
//   function GaugeSection({ kwLabels, rpmLabels, motorRPM, motorIconColor, updateMotorIconColor, updateMotorIconColorTrue, rechargeAngle }) {
//     const [kwNeedleAngle, setKwNeedleAngle] = useState(0); 
//     const [rpmNeedleAngle, setRpmNeedleAngle] = useState(-135); 
  
//     useEffect(() => {
//       console.log('kwNeedleAngle:', kwNeedleAngle);
//       console.log('kwLabels:', kwLabels);
//       // Create SVG container (larger for more dramatic styling)
//       const svg = d3.select('#gaugeContainer')
//         .append('svg')
//         .attr('width', 1000)
//         .attr('height', 400)
//         .style('display', 'block')
//         .style('margin', '0 auto');  
  
//       // === DEFINITIONS & GRADIENTS ===
//       const defs = svg.append('defs');
  
//       // Outer ring metallic gradient
//       const outerRingGradient = defs.append('linearGradient')
//         .attr('id', 'outerRingGradient')
//         .attr('x1', '0%').attr('y1', '0%')
//         .attr('x2', '100%').attr('y2', '100%');
//       outerRingGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', '#666');
//       outerRingGradient.append('stop')
//         .attr('offset', '50%')
//         .attr('stop-color', '#ccc');
//       outerRingGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#666');
  
//       // Background radial gradient inside the gauge
//       const radialGradient = defs.append('radialGradient')
//         .attr('id', 'backgroundGradient')
//         .attr('cx', '50%')
//         .attr('cy', '50%')
//         .attr('r', '50%');
//       radialGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', 'rgba(255, 255, 255, 0.85)');
//       radialGradient.append('stop')
//         .attr('offset', '20%')
//         .attr('stop-color', 'rgba(220, 230, 250, 0.3)');
//       radialGradient.append('stop')
//         .attr('offset', '40%')
//         .attr('stop-color', 'rgba(150, 180, 255, 0.2)');
//       radialGradient.append('stop')
//         .attr('offset', '60%')
//         .attr('stop-color', 'rgba(80, 140, 255, 0.15)');
//       radialGradient.append('stop')
//         .attr('offset', '80%')
//         .attr('stop-color', 'rgba(40, 80, 200, 0.1)');
//       radialGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#000');
  
//       // Needle metallic shine gradient
//       const needleGradient = defs.append('linearGradient')
//         .attr('id', 'needleGradient')
//         .attr('x1', '0%')
//         .attr('y1', '0%')
//         .attr('x2', '0%')
//         .attr('y2', '100%');
//       needleGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', '#f0f0f0');
//       needleGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#777');
  
//       // Needle shadow for 3D depth
//       const needleShadow = defs.append('filter')
//         .attr('id', 'needleShadow');
//       needleShadow.append('feDropShadow')
//         .attr('dx', 0)
//         .attr('dy', 3)
//         .attr('stdDeviation', 2)
//         .attr('flood-color', '#000')
//         .attr('flood-opacity', 0.5);
  
//       // Reflection overlay
//       const reflectionGradient = defs.append('radialGradient')
//         .attr('id', 'reflectionGradient')
//         .attr('cx', '50%')
//         .attr('cy', '50%')
//         .attr('r', '70%');
//       reflectionGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', 'rgba(255,255,255,0.4)');
//       reflectionGradient.append('stop')
//         .attr('offset', '50%')
//         .attr('stop-color', 'rgba(255,255,255,0.05)');
//       reflectionGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', 'rgba(255,255,255,0)');
  
//       // Color-coded arcs for negative and positive ranges
//       // (optional, purely decorative, does not affect logic)
//       const negativeArcGradient = defs.append('linearGradient')
//         .attr('id', 'negativeArcGradient')
//         .attr('x1', '0%').attr('y1', '0%')
//         .attr('x2', '100%').attr('y2', '0%');
//       negativeArcGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', '#FF3C3C');
//       negativeArcGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#FFA700');
  
//       const positiveArcGradient = defs.append('linearGradient')
//         .attr('id', 'positiveArcGradient')
//         .attr('x1', '0%').attr('y1', '0%')
//         .attr('x2', '100%').attr('y2', '0%');
//       positiveArcGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', '#00D900');
//       positiveArcGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#00FFC8');
  
//       // === GAUGE CREATION FUNCTION ===
//       const createGauge = (x, y, labels, initialAngle) => {
//         const gaugeGroup = svg.append('g')
//           .attr('transform', `translate(${x + 100}, ${y})`);
  
//         // Outer metallic ring
//         gaugeGroup.append('circle')
//           .attr('r', 190)
//           .style('fill', 'none')
//           .style('stroke', 'url(#outerRingGradient)')
//           .style('stroke-width', 8)
//           .style('filter', 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))');
  
//         // Inner gauge circle with the background gradient
//         gaugeGroup.append('circle')
//           .attr('r', 180)
//           .style('fill', 'url(#backgroundGradient)')
//           .style('stroke', 'rgba(255,255,255,0.2)')
//           .style('stroke-width', 2)
//           .style('filter', 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))')
//           .style('opacity', 0.95)
//           .style('transition', 'all 0.3s ease-in-out');
  
//         // Subtle reflection overlay
//         gaugeGroup.append('circle')
//           .attr('r', 180)
//           .style('fill', 'url(#reflectionGradient)')
//           .style('opacity', 0.25);
  
//         // Add decorative arcs to highlight negative vs positive ranges
//         // purely for styling, not for functionality
//         const arcGenerator = d3.arc().innerRadius(170).outerRadius(179);
//         // Negative arc (-135 to 0)
//         gaugeGroup.append('path')
//           .attr('d', arcGenerator({
//             startAngle: -135 * (Math.PI / 180),
//             endAngle: 0
//           }))
//           .style('fill', 'url(#negativeArcGradient)')
//           .attr('transform', 'rotate(0)');
//         // Positive arc (0 to 135)
//         gaugeGroup.append('path')
//           .attr('d', arcGenerator({
//             startAngle: 0,
//             endAngle: 135 * (Math.PI / 180)
//           }))
//           .style('fill', 'url(#positiveArcGradient)')
//           .attr('transform', 'rotate(0)');
  
//         // Painted ticks around the gauge
//         labels.forEach(label => {
//           gaugeGroup.append('line')
//             .attr('x1', 0)
//             .attr('y1', -160)
//             .attr('x2', 0)
//             .attr('y2', -170)
//             .attr('transform', `rotate(${label.angle})`)
//             .style('stroke', '#fff')
//             .style('stroke-width', 2)
//             .style('filter', 'drop-shadow(0 0 3px #000)');
//         });
  
//         // Tick labels
//         labels.forEach(label => {
//           gaugeGroup.append('text')
//             .attr('x', 0)
//             .attr('y', -180)
//             .attr('transform', `rotate(${label.angle})`)
//             .attr('text-anchor', 'middle')
//             .style('fill', '#fff')
//             .style('font-size', '12px')
//             .style('text-shadow', '2px 2px 4px #000, 0 0 10px #555')
//             .style('filter', 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))')
//             .style('font-weight', 'bold')
//             .text(label.text);
//         });
  
//         // Needle
//         const needle = gaugeGroup.append('path')
//           .attr('d', 'M -4 0 L 4 0 L 0 -150 Z') // slightly wider
//           .attr('transform', `rotate(${initialAngle})`)
//           .style('fill', 'url(#needleGradient)')
//           .style('filter', 'url(#needleShadow)');
  
//         // Pivot circle
//         gaugeGroup.append('circle')
//           .attr('r', 8)
//           .style('fill', '#fff')
//           .style('stroke', '#aaa')
//           .style('stroke-width', 2)
//           .style('filter', 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.7))');
  
//         // Animate the needle from 0 to initialAngle
//         needle.node().style.transition = 'transform 1s ease-out 0.5s'; 
//         setTimeout(() => {
//           if (labels === kwLabels) {
//             needle.attr('transform', `rotate(${kwNeedleAngle})`);
//           } else if (labels === rpmLabels) {
//             needle.attr('transform', `rotate(${rpmNeedleAngle})`);
//           }
//         }, 1000);
  
//         // Central text
//         if (labels === kwLabels) {
//           const centralText = gaugeGroup.append('text')
//             .attr('x', 0)
//             .attr('y', 60)
//             .attr('text-anchor', 'middle')
//             .style('fill', '#fff')
//             .style('font-size', '16px')
//             .style('text-shadow', '2px 2px 4px #000, 0 0 10px #555')
//             .style('filter', 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))')
//             .style('font-weight', 'bold')
//             .text('0 kW');
  
//           setTimeout(() => {
//             console.log('Updating central text with closest label');
//             centralText.text(getClosestLabelText(kwNeedleAngle, kwLabels));
//           }, 2500);
//         }
  
//         if (labels === rpmLabels) {
//           const centralText = gaugeGroup.append('text')
//             .attr('x', 0)
//             .attr('y', 60)
//             .attr('text-anchor', 'middle')
//             .style('fill', '#fff')
//             .style('font-size', '16px')
//             .style('text-shadow', '2px 2px 4px #000, 0 0 10px #555')
//             .style('filter', 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))')
//             .style('font-weight', 'bold')
//             .text('Loading...');
  
//           setTimeout(() => {
//             centralText.text(getClosestLabelText(rpmNeedleAngle, rpmLabels) + ' RPM');
//           }, 2500);
//         }
  
//         // Fade-in effect for the initial text
//         const textElement = gaugeGroup.select('text');
//         textElement.style('transition', 'opacity 1s ease-in-out');
//         textElement.style('opacity', 0);
//         if (labels === kwLabels) {
//           textElement.text('0 KW');
//         } else if (labels === rpmLabels) {
//           textElement.text('0 RPM');
//         }
//         textElement.style('opacity', 1);
//         setTimeout(() => {
//           if (labels === kwLabels) {
//             textElement.text(getClosestLabelText(kwNeedleAngle, kwLabels));
//           } else if (labels === rpmLabels) {
//             textElement.text(getClosestLabelText(rpmNeedleAngle, rpmLabels) + ' RPM');
//           }
//           textElement.style('opacity', 1);
//         }, 2500);
//       };
  
//       // Create left gauge (kW)
//       createGauge(200, 200, kwLabels, kwNeedleAngle);
//       // Create right gauge (RPM)
//       createGauge(600, 200, rpmLabels, rpmNeedleAngle);
  
//       return () => svg.remove();
//     }, []); // Renders the SVG once on mount
  
//     // === UPDATE NEEDLE POSITIONS ON CHANGES ===
//     useEffect(() => {
//       const kwNeedle = d3.select('#gaugeContainer')
//         .select('svg')
//         .selectAll('g')
//         .filter((d, i) => i === 0)
//         .select('path[d="M -4 0 L 4 0 L 0 -150 Z"]');
  
//       const rpmNeedle = d3.select('#gaugeContainer')
//         .select('svg')
//         .selectAll('g')
//         .filter((d, i) => i === 1)
//         .select('path[d="M -4 0 L 4 0 L 0 -150 Z"]');
  
//       kwNeedle
//         .transition()
//         .duration(1000)
//         .attr('transform', `rotate(${kwNeedleAngle})`);
  
//       rpmNeedle
//         .transition()
//         .duration(1000)
//         .attr('transform', `rotate(${rpmNeedleAngle})`);
  
//       setTimeout(() => {
//         const kwText = d3.select('#gaugeContainer')
//           .select('svg')
//           .selectAll('g')
//           .filter((d, i) => i === 0)
//           .select('text');
//         const rpmText = d3.select('#gaugeContainer')
//           .select('svg')
//           .selectAll('g')
//           .filter((d, i) => i === 1)
//           .select('text');
  
//         kwText.text(getClosestLabelText(kwNeedleAngle, kwLabels));
//         rpmText.text(getClosestLabelText(rpmNeedleAngle, rpmLabels) + ' RPM');
//         console.log('getClosestLabelText1', getClosestLabelText(kwNeedleAngle, kwLabels));
//         console.log('getClosestLabelText2', getClosestLabelText(rpmNeedleAngle, rpmLabels));
//         let newRPM = getClosestLabelText(rpmNeedleAngle, rpmLabels);
//         localStorage.setItem('kW', getClosestLabelText(kwNeedleAngle, kwLabels));
//         localStorage.setItem('RPM', getClosestLabelText(rpmNeedleAngle, rpmLabels));
  
//         // Example condition for toggling color
//         if (newRPM === '400') {
//           updateMotorIconColor('#ff0000');
//           updateMotorIconColorTrue(true);
//         } else {
//           updateMotorIconColorTrue(false);
//           updateMotorIconColor('rgb(51, 51, 51)');
//         }
//       }, 1500);
//     }, [kwNeedleAngle, rpmNeedleAngle]);
  
//     // === CALCULATE ANGLES ===
//     useEffect(() => {
//       const maxRPM = 800; 
//       const angleRange = 270; 
  
//       let kwAngle = (motorRPM / maxRPM) * angleRange;
//       let rpmAngle = (motorRPM / maxRPM) * angleRange - 135;
  
//       if (rechargeAngle) {
//         setKwNeedleAngle(-27);
//         if (motorRPM === 0) {
//           setKwNeedleAngle(-27);
//         }
//       } else {
//         if (motorRPM === 0) {
//           setKwNeedleAngle(0);
//         } else {
//           setKwNeedleAngle(prevAngle => prevAngle !== kwAngle ? kwAngle : prevAngle);
//         }
//       }
  
//       setRpmNeedleAngle(prevAngle => prevAngle !== rpmAngle ? rpmAngle : prevAngle);
//     }, [motorRPM, rechargeAngle]);
  
//     return (
//       <div id="gaugeContainer"></div>
//     );
//   }
  
  
//   function App() {
//     const [status, setStatus] = useState({});
//     const [error, setError] = useState(null);
  
//     const [temperatureIndex, setTemperatureIndex] = useState(0);
//     const [parkingCircleColor, setParkingCircleColor] = useState('#ff0000');
//     const [earthEngineColor, setEarthEngineColor] = useState('#ff0000');
//     const [engineIconColor, setEngineIconColor] = useState('#ff0000');
//     const [batteryIconColor, setBatteryIconColor] = useState('rgb(51, 51, 51)');
//     const [motorIconColor, setMotorIconColor] = useState(false);
//     const [motorIconColorTrue, setMotorIconColorTrue] = useState('#ff0000');
//     const [currentIconIndex, setCurrentIconIndex] = useState(0);
//     const [batteryIconIndex, setBatteryIconIndex] = useState(0);
//     const [batteryIconPercentageIndex, setBatteryIconPercentageIndex] = useState(4);
//     const [thermometerIconIndex, setThermometerIconIndex] = useState(0);
//     const [currentIcon, setCurrentIcon] = useState('PiPlugChargingDuotone');
//     const [gearValue, setGearValue] = useState('N/N');
//     const [sliderDisabled, setSliderDisabled] = useState(false);
//     const [rechargeAngle, setRechargeAngle] = useState(false);
//     const [batteryPercentage, setBatteryPercentage] = useState(0);
//     const [batteryTemperature, setBatteryTemperature] = useState(10);
//     const [motorRPM, setMotorRPM] = useState(0);
  
//     const temperatureIcons = [
//       <FaTemperatureEmpty />,
//       <FaTemperatureQuarter />,
//       <FaTemperatureHalf />,
//       <FaTemperatureThreeQuarters />,
//       <FaTemperatureFull />,
//     ];
  
//     const icons = [
//       <MdBatteryCharging20 style={{color:'#aaa', fontSize:'32px'}} />, 
//       <MdBatteryCharging50 style={{color:'#aaa', fontSize:'32px'}} />, 
//       <MdBatteryCharging60 style={{color:'#aaa', fontSize:'32px'}} />, 
//       <MdBatteryCharging80 style={{color:'#aaa', fontSize:'32px'}} />, 
//       <MdBatteryCharging90 style={{color:'#aaa', fontSize:'32px'}} />, 
//     ];
  
//     const batteryIconsPercentage = [
//       <MdBattery20 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery50 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery60 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery80 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBatteryFull style={{color:'#aaa', fontSize:'32px'}} />
//     ];
  
//     const batteryIcons = [
//       <MdBattery20 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery50 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery60 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery80 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery90 style={{color:'#aaa', fontSize:'32px'}} />,
//     ];
  
//     const thermometerIcons = [
//       <FaThermometerEmpty style={{color:'#aaa', fontSize:'32px'}} />, 
//       <FaThermometerQuarter style={{color:'#aaa', fontSize:'32px'}} />, 
//       <FaThermometerHalf style={{color:'#aaa', fontSize:'32px'}} />, 
//       <FaThermometerThreeQuarters style={{color:'#aaa', fontSize:'32px'}} />, 
//       <FaThermometerFull style={{color:'#aaa', fontSize:'32px'}} />
//     ];
  
//     useEffect(() => {
//       const ws = new WebSocket('ws://localhost:8080');
  
//       ws.onmessage = (event) => {
//         const { engineIconColor } = JSON.parse(event.data);
//         setEngineIconColor(engineIconColor);
//         localStorage.setItem('engineIconColor', engineIconColor);
//         console.log('Received engine icon color:', engineIconColor);
//       };
  
//       return () => {
//         ws.close();
//       };
//     }, []);
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setTemperatureIndex((prevIndex) => (prevIndex + 1) % temperatureIcons.length);
//       }, 2000);
//       return () => clearInterval(interval);
//     }, []);
    
//     useEffect(() => {
//       const ws = new WebSocket('ws://localhost:8080');
  
//       ws.onmessage = (event) => {
//         const { currentGear } = JSON.parse(event.data);
//         localStorage.setItem('currentGear', currentGear);
//         setGearValue(currentGear);
//         console.log('Received gear value:', currentGear);
//         if (currentGear === 'N/N') {
//           setParkingCircleColor('#ff0000');
//         } else {
//           setParkingCircleColor('rgb(51, 51, 51)');
//         }
//       };
  
//       return () => {
//         ws.close();
//       };
//     }, [gearValue]);
  
//     useEffect(() => {
//       console.log('test-gearValue outside', gearValue);
//     }, [gearValue]);
  
//     useEffect(() => {
//       const earthInterval = setInterval(() => {
//         setEarthEngineColor((prevColor) => (prevColor === '#ff0000' ? 'rgb(51, 51, 51)' : '#ff0000'));
//       }, 1000); 
//       return () => clearInterval(earthInterval);
//     }, []);
  
//     useEffect(() => {
//       const maxRPM = 400;
//       const batteryIndex = status.motorRPM/100 || 0;
//       const thermometerIndex = status.motorRPM/100 || 0;
//       const iconIndex = status.motorRPM/100 || 0;
  
//       setBatteryIconIndex(batteryIndex);
//       setThermometerIconIndex(thermometerIndex);
//       setCurrentIconIndex(iconIndex);
//     }, [status.motorRPM]);
  
//     useEffect(() => {
//       const iconInterval = setInterval(() => {
//         setCurrentIcon(prevIcon => prevIcon === 'PiPlugChargingDuotone' ? 'PiPlugChargingFill' : 'PiPlugChargingDuotone');
//       }, 1000); 
//       return () => clearInterval(iconInterval);
//     }, []);
  
//     useEffect(() => {
//       if (motorIconColorTrue) {
//         const toggleInterval = setInterval(() => {
//           setMotorIconColor(prevColor => prevColor === '#ff0000' ? 'rgb(51, 51, 51)' : '#ff0000');
//         }, 1000);
//         return () => clearInterval(toggleInterval);
//       }
//     }, [motorIconColorTrue]);
  
//     useEffect(() => {
//       console.log('batteryIconPercentageIndex', batteryIconPercentageIndex)
//       if (batteryIconPercentageIndex === 0 ) {
//         const toggleInterval = setInterval(() => {
//           setBatteryIconColor(prevColor => prevColor === '#ff0000' ? 'rgb(51, 51, 51)' : '#ff0000');
//         }, 1000);
//         return () => clearInterval(toggleInterval);
//       }
//       else if (batteryIconPercentageIndex !== 0 ) {
//         setBatteryIconColor('rgb(51, 51, 51)');
//       }
//     }, [batteryIconPercentageIndex]);
  
//     useEffect(() => {
//       if (!rechargeAngle && status.motorRPM > 0) {
//         const interval = setInterval(() => {
//           setBatteryIconPercentageIndex((prevIndex) => {
//             const newIndex = prevIndex - 1;
//             return newIndex < 0 ? 0 : newIndex;
//           });
//         }, 3000);
//         return () => clearInterval(interval);
//       }
//     }, [status.motorRPM]);
  
//     useEffect(() => {
//       const ws = new WebSocket('ws://localhost:8080');
  
//       ws.onopen = () => {
//         console.log('WebSocket connection opened');
//         const sendData = () => {
//           const data = {
//             gearValue: localStorage.getItem('currentGear') || 'N/A',
//             engineIconColor: localStorage.getItem('engineIconColor'),
//             batteryPercentage: localStorage.getItem('batteryPercentage'),
//             batteryTemperature: localStorage.getItem('batteryTemperature'),
//             motorRPM: localStorage.getItem('motorRPM'),
//             kW: localStorage.getItem('kW'),
//             RPM: localStorage.getItem('RPM')+ ' RPM',
//           };
  
//           ws.send(JSON.stringify(data));
//           console.log('Data sent:', JSON.stringify(data));
//         };
  
//         const intervalId = setInterval(sendData, 1000);
  
//         ws.onclose = (event) => {
//           console.log('WebSocket connection closed:', event);
//           clearInterval(intervalId);
//         };
  
//         ws.onerror = (error) => {
//           console.error('WebSocket error:', error);
//           clearInterval(intervalId);
//         };
  
//         return () => {
//           clearInterval(intervalId);
//           ws.close();
//         };
//       };
//     }, []);
  
//     const handleSpeedChange = async (event, newValue) => {
//       const updatedStatus = { ...status, batteryPercentage, batteryTemperature, motorRPM: newValue * 100 };
//       setStatus(updatedStatus);
//       console.log('Updated status:', updatedStatus);
  
//       try {
//         const response = await axios.post('http://localhost:5000/api/update-status', updatedStatus);
//         console.log('Status updated successfully via HTTP:', response.data);
//       } catch (error) {
//         console.error('HTTP request error:', error);
//         setError('Failed to update status');
//       }
//     };
  
//     useEffect(() => {
//       setBatteryPercentage(batteryIconPercentageIndex*25)
//       localStorage.setItem('batteryPercentage', batteryIconPercentageIndex*25)
//       setBatteryTemperature(((status.motorRPM/100)*7 + 20) || 10)
//       localStorage.setItem('batteryTemperature', ((status.motorRPM/100)*7 + 20) || 10)
//       setMotorRPM(status.motorRPM || 0)
//       localStorage.setItem('motorRPM', status.motorRPM || 0)
//     },[batteryIconPercentageIndex, status.motorRPM]);
  
//     const transitionAll = 'all 0.3s ease';
  
//     // Page and container styles
//     const pageStyle = {
//       backgroundColor: '#111',
//       width: '100%',
//       minHeight: '100vh',
//       margin: '0',
//       padding: '0',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       fontFamily: 'Arial, sans-serif',
//       WebkitFontSmoothing: 'antialiased',
//       position: 'relative',
//       background: `radial-gradient(circle at center, #111 0%, #000 100%)`,
//       animation: 'fadeIn 1.5s ease-out forwards'
//     };
  
//     const containerStyle = {
//       width: '1100px',
//       margin: '0 auto',
//       display: 'flex',
//       flexDirection: 'column',
//       border: '1px solid #333',
//       boxShadow: '0 0 20px rgba(0,0,0,0.5)',
//       padding: '0',
//       background: `repeating-linear-gradient(
//         45deg,
//         #111,
//         #111 10px,
//         #101010 10px,
//         #101010 20px
//       )`,
//       position: 'relative',
//       overflow: 'hidden',
//       backgroundSize: '400px 400px',
//       backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent 50%, rgba(255,255,255,0.05) 100%)',
//       animation: 'horizontalSweep 20s infinite linear alternate'
//     };
  
//     const panelStyle = {
//       display: 'flex',
//       flexDirection: 'row',
//       alignItems: 'center',
//       backgroundColor: '#111',
//       padding: '5px 10px',
//       borderBottom: '1px solid #333',
//       fontFamily: 'Arial, sans-serif',
//       background: 'linear-gradient(to bottom, #111, #101010)'
//     };
  
//     const boxStyle = {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: '#ccc',
//       width: '80px',
//       height: '60px',
//       backgroundColor: '#222',
//       margin: '2px',
//       borderRadius: '2px',
//       border: '1px solid #333',
//       transition: transitionAll,
//       cursor: 'default',
//       position: 'relative',
//       overflow:'hidden'
//     };
  
//     const onBoxHover = (e) => {
//       e.currentTarget.style.transform = 'scale(1.02)';
//       e.currentTarget.style.boxShadow = 'inset 0 0 10px #444';
//       e.currentTarget.style.background = 'linear-gradient(to bottom, #222, #1f1f1f)';
//       e.currentTarget.style.backgroundSize = '100% 200px';
//       e.currentTarget.style.backgroundImage = 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)';
//       e.currentTarget.style.animation = 'verticalSweep 3s linear';
//     };
  
//     const onBoxLeave = (e) => {
//       e.currentTarget.style.transform = '';
//       e.currentTarget.style.boxShadow = '';
//       e.currentTarget.style.background = '#222';
//       e.currentTarget.style.animation = '';
//       e.currentTarget.style.backgroundImage = '';
//     };
  
//     const bottomLabelStyle = {
//       color: '#ccc',
//       fontSize: '12px',
//       textAlign: 'center',
//       textShadow: '0 0 2px rgba(0, 0, 0, 0.5)'
//     };
  
//     const sliderContainerStyle = {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       backgroundColor: '#222',
//       padding: '5px 10px',
//       borderRadius: '2px',
//       border: '1px solid #333',
//       marginLeft: '10px',
//       color: '#ccc',
//       fontSize: '12px',
//       transition: transitionAll
//     };
  
//     const sliderLabelsStyle = {
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       color: '#ccc',
//       fontSize: '10px',
//       marginTop: '2px',
//       paddingLeft: '16px'
//     };
  
//     const bottomRowStyle = {
//       ...panelStyle,
//       borderTop:'none',
//       borderBottom:'none'
//     };
  
//     const keypadStyle = {
//       ...boxStyle,
//       width: '60px',
//       height: '60px',
//       backgroundColor: '#333',
//       display: 'grid',
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gridTemplateRows: 'repeat(3, 1fr)',
//       gap: '2px',
//       transition: transitionAll,
//       animation:'keypadPulse 8s infinite alternate'
//     };
  
//     const plugBoxStyle = {
//       ...boxStyle,
//       width: '60px'
//     };
  
//     const keypadSquares = [];
//     for (let i = 0; i < 9; i++) {
//       const row = Math.floor(i / 3);
//       const col = i % 3;
//       const highlighted =
//         (row === 0 && col === 0) ||
//         (row === 0 && col === 1) ||
//         (row === 1 && col === 0) ||
//         (row === 1 && col === 1);
//       keypadSquares.push(
//         <div
//           key={i}
//           style={{
//             width: '100%',
//             height: '100%',
//             backgroundColor: highlighted ? '#eee' : '#555',
//             backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.2))'
//           }}
//         ></div>
//       );
//     }
  
//     const topBarIcons = [
//       { component: <LuParkingCircle color={parkingCircleColor} /> },
//       { component: <Engineicon  color={engineIconColor} /> },
//       { component: <MdBatteryCharging90 color={motorIconColor} /> },
//       { component: <MdOutlineBatteryAlert color={batteryIconColor} /> },
//     ];
  
//     const rpmLabels = [
//       { angle: -135, text: '0' },
//       { angle: -118.125, text: '50' },
//       { angle: -101.25, text: '100' },
//       { angle: -84.375, text: '150' },
//       { angle: -67.5, text: '200' },
//       { angle: -50.625, text: '250' },
//       { angle: -33.75, text: '300' },
//       { angle: -16.875, text: '350' },
//       { angle: 0, text: '400' },
//       { angle: 16.875, text: '450' },
//       { angle: 33.75, text: '500' },
//       { angle: 50.625, text: '550' },
//       { angle: 67.5, text: '600' },
//       { angle: 84.375, text: '650' },
//       { angle: 101.25, text: '700' },
//       { angle: 118.125, text: '750' },
//       { angle: 135, text: '800' }
//     ];
  
//     const handleIconClick = () => {
//       // Plug icon click logic
//       setIconColor((prevColor) => (prevColor === 'rgb(51, 51, 51)' ? '#ff0000' : 'rgb(51, 51, 51)'));
//       setSliderDisabled((prevDisabled) => !prevDisabled);
//       setStatus({motorRPM: 0});
//       if (sliderDisabled) { 
//         setRechargeAngle(false);
//         console.log('test1-rechargeAngle', rechargeAngle); 
//       }
//       if (!sliderDisabled) {
//         setRechargeAngle(true);
//         console.log('test1-rechargeAngle', rechargeAngle); 
//         const interval = setInterval(() => {
//           setBatteryIconPercentageIndex((prevIndex) => {
//             const newIndex = prevIndex + 1;
//             return newIndex > 4 ? 4 : newIndex;
//           });
//         }, 3000);
//         setTimeout(() => clearInterval(interval), 15000);
//       }
//       console.log('batteryIconPercentageIndex', batteryIconPercentageIndex);
//       console.log('sliderDisabled', sliderDisabled);
//     };
  
//     const [iconColor, setIconColor] = useState('rgb(51, 51, 51)');
//     const iconSize = '64px';
  
//     return (
//       <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
//         <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', padding: '10px', backgroundColor: '#E60000', color: 'white', fontWeight: 'bold', fontSize: '39px', zIndex: 1000 }}>
//           EAE
//         </div>
//         <div style={pageStyle}>
//           <div style={containerStyle}>
  
//             {/* Top Bar */}
//             <div
//               style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',
//                 backgroundColor: '#111',
//                 height: '70px',
//                 borderBottom: '2px solid #333',
//                 padding: '0 10px',
//                 boxShadow: '0 2px 5px rgba(0, 0, 0, 0.8)',
//               }}
//             >
//               {topBarIcons.map((iconObj, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     width: '60px',
//                     height: '60px',
//                     backgroundColor: '#000',
//                     margin: '0',
//                     border: '1px solid #444',
//                     boxShadow: 'none',
//                     cursor: 'default',
//                   }}
//                 >
//                   {React.cloneElement(iconObj.component, {
//                     style: {
//                       color: iconObj.color,
//                       fontSize: '36px',
//                     },
//                   })}
//                 </div>
//               ))}
//             </div>
  
//             {/* Gauges Section */}
//             <GaugeSection 
//               kwLabels={kwLabels} 
//               rpmLabels={rpmLabels} 
//               motorRPM={motorRPM} 
//               updateMotorIconColor={setMotorIconColor}
//               updateMotorIconColorTrue={setMotorIconColorTrue}
//               rechargeAngle={rechargeAngle}
//             />
  
//             {/* TOP ROW OF BOTTOM SECTION */}
//             <div style={panelStyle}>
//               <div style={boxStyle} onMouseEnter={onBoxHover} onMouseLeave={onBoxLeave}>
//                 <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', fontSize: '24px'}}>
//                     <TbManualGearbox style={{ fontSize: '32px' }} />
//                   </div>
//                   <div style={bottomLabelStyle}>{gearValue || localStorage.getItem('gearValue')}</div>
//                 </div>
//               </div>
  
//               <div style={boxStyle} onMouseEnter={onBoxHover} onMouseLeave={onBoxLeave}>
//                 <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                     {batteryIconsPercentage[batteryIconPercentageIndex]}
//                   </div>
//                   <div style={bottomLabelStyle}>{batteryPercentage} %</div>
//                 </div>
//               </div>
  
//               <div style={boxStyle} onMouseEnter={onBoxHover} onMouseLeave={onBoxLeave}>
//                 <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                     {batteryIcons[batteryIconIndex]}
//                   </div>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                     {thermometerIcons[thermometerIconIndex]}
//                   </div>
//                 </div>
//                 <div style={bottomLabelStyle}>{batteryTemperature} °C</div>
//               </div>
  
//               <div style={boxStyle} onMouseEnter={onBoxHover} onMouseLeave={onBoxLeave}>
//                 <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                   {icons[currentIconIndex]}
//                 </div>
//                 <div style={bottomLabelStyle}>{(motorRPM || 0.0).toFixed(1)} RPM</div>
//               </div>
  
//               <div style={sliderContainerStyle}>
//                 <div style={{
//                   fontSize:'12px', 
//                   marginBottom:'5px', 
//                   color:'#ccc', 
//                   textShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
//                   animation:'neonPulse 3s infinite'
//                 }}>
//                   MOTOR SPEED SETTING
//                 </div>
//                 <div style={{display:'flex', alignItems:'center'}}>
//                   <div style={{
//                     width:'20px',
//                     height:'20px',
//                     border:'2px solid #ccc',
//                     borderRadius:'50%',
//                     marginRight:'10px'
//                   }}></div>
//                   <Slider
//                     value={motorRPM/100}
//                     onChange={handleSpeedChange}
//                     step={1}
//                     marks
//                     min={0}
//                     max={4}
//                     valueLabelDisplay="off"
//                     disabled={sliderDisabled || status.charging}
//                     style={{
//                       color: '#999',
//                       width: '120px',
//                       cursor: 'pointer',
//                       transition: transitionAll,
//                       boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
//                       borderRadius: '10px'
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.boxShadow='';
//                       const thumb = e.currentTarget.querySelector('.MuiSlider-thumb');
//                       if (thumb) {
//                         thumb.style.removeProperty('animation');
//                       }
//                     }}
//                     componentsProps={{
//                       thumb: {
//                         className: 'MuiSlider-thumb',
//                         style: {
//                           backgroundColor: '#777',
//                           width: '14px',
//                           height: '14px',
//                           transition: transitionAll,
//                           border: '2px solid #fff'
//                         }
//                       },
//                       track: {
//                         style: {
//                           background: 'linear-gradient(to right, #777, #bbb)'
//                         }
//                       },
//                       rail: {
//                         style: {
//                           background: 'linear-gradient(to right, #444, #555)'
//                         }
//                       }
//                     }}
//                   />
//                 </div>
//                 <div style={sliderLabelsStyle}>
//                   <div>OFF</div>
//                   <div>1</div>
//                   <div>2</div>
//                   <div>3</div>
//                   <div>4</div>
//                 </div>
//               </div>
//             </div>
  
//             {/* BOTTOM ROW OF BOTTOM SECTION */}
//             <div style={{
//               ...bottomRowStyle,
//               borderTop: 'none',
//               borderBottom: 'none',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <div style={boxStyle} onMouseEnter={onBoxHover} onMouseLeave={onBoxLeave}>
//                   <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
//                     <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', fontSize: '24px'}}>
//                       <TbManualGearbox style={{ fontSize: '32px' }} />
//                     </div>
//                   </div>
//                 </div>
  
//                 <div style={boxStyle} onMouseEnter={onBoxHover} onMouseLeave={onBoxLeave}>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                     <MdBatteryChargingFull style={{color:'#aaa', fontSize:'32px'}} />
//                   </div>
//                 </div>
  
//                 <div style={boxStyle} onMouseEnter={onBoxHover} onMouseLeave={onBoxLeave}>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                     <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                       <BatteryFullIcon style={{color:'#aaa', fontSize:'32px'}} />
//                     </div>
//                     <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                       <FaThermometerFull style={{color:'#aaa', fontSize:'32px'}} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
  
//               <div
//                 style={{
//                   ...boxStyle,
//                   width: '80px',
//                   height: '60px',
//                   backgroundColor: '#222',
//                   border: '1px solid #333',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   position: 'absolute',
//                   left: '50%',
//                   bottom: '10px',
//                   transform: 'translateX(-50%)',
//                   transition: 'background-color 0.3s ease, transform 0.3s ease',
//                   cursor: 'pointer'
//                 }}
//                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
//                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#222'}
//                 onMouseDown={(e) => e.currentTarget.style.transform = 'translateX(-50%) scale(0.95)'}
//                 onMouseUp={(e) => e.currentTarget.style.transform = 'translateX(-50%) scale(1)'}
//               >
//                 <div style={keypadStyle}>
//                   {keypadSquares}
//                 </div>
//               </div>
  
//               <div 
//                 style={{
//                   ...plugBoxStyle,
//                   position: 'relative'
//                 }}
//                 onMouseEnter={onBoxHover}
//                 onMouseLeave={onBoxLeave}
//                 onClick={handleIconClick}
//               >
//                 <div style={{ color: iconColor, fontSize: iconSize }}>
//                   <PiPlugChargingDuotone />
//                 </div>
//               </div>
//             </div>
//           </div>
  
//           {error && (
//             <Snackbar
//               open={true}
//               message={error}
//               autoHideDuration={6000}
//               onClose={() => setError(null)}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//             />
//           )}
//         </div>
//       </div>
//     );
//   }
  
//   export default App;
  