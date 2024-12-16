// // Function to find the closest label text for a given angle
// function getClosestLabelText(angle, labels) {
//     return labels.reduce((prev, curr) => {
//       return (Math.abs(curr.angle - angle) < Math.abs(prev.angle - angle) ? curr : prev);
//     }).text;
//   }
  
//   import React, { useState, useEffect } from 'react';
//   import { Slider, Snackbar } from '@mui/material';
//   import axios from 'axios';
  
//   import LocalParkingIcon from '@mui/icons-material/LocalParking';
//   import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
//   import BoltIcon from '@mui/icons-material/Bolt';
//   import BatteryFullIcon from '@mui/icons-material/BatteryFull';
//   import PercentIcon from '@mui/icons-material/Percent';
//   import EvStationIcon from '@mui/icons-material/EvStation';
//   import SettingsIcon from '@mui/icons-material/Settings';
//   import { TbManualGearboxFilled } from "react-icons/tb";
//   import { TbManualGearbox } from "react-icons/tb";
//   import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
//   import { FaTemperatureEmpty } from "react-icons/fa6";
//   import { FaTemperatureFull } from "react-icons/fa6";
//   import { FaTemperatureHalf } from "react-icons/fa6";
//   import { FaTemperatureQuarter } from "react-icons/fa6";
//   import { FaTemperatureThreeQuarters } from "react-icons/fa6";
//   import { LuParkingCircle, LuParkingCircleOff } from "react-icons/lu";
//   import { SiGoogleearthengine } from "react-icons/si";
//   import { ImPower } from "react-icons/im";
//   import { MdBatteryChargingFull } from "react-icons/md";
//   import Engineicon from './components/engine.js';
//   import { MdBatteryCharging20 } from "react-icons/md";
//   import { MdBatteryCharging30 } from "react-icons/md";
//   import { MdBatteryCharging50 } from "react-icons/md";
//   import { MdBatteryCharging60 } from "react-icons/md";
//   import { MdBatteryCharging80 } from "react-icons/md";
//   import { MdBatteryCharging90 } from "react-icons/md";
//   import { MdOutlineBolt } from "react-icons/md";
//   import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
//   import { MdOutlineBatteryAlert } from "react-icons/md";
//   import { MdBattery20, MdBattery30, MdBattery50, MdBattery60, MdBattery80, MdBattery90, MdBatteryFull } from "react-icons/md";
//   import { FaThermometerEmpty, FaThermometerQuarter, FaThermometerHalf, FaThermometerThreeQuarters, FaThermometerFull } from "react-icons/fa";
//   import { BsPlugin } from "react-icons/bs";
//   import { PiPlugChargingDuotone, PiPlugChargingFill } from "react-icons/pi";
//   import { FaPlug } from "react-icons/fa6";
//   import * as d3 from 'd3';
  
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
//       // Create SVG container with increased size and centered alignment
//       const svg = d3.select('#gaugeContainer')
//         .append('svg')
//         .attr('width', 1000)  // Increased width
//         .attr('height', 400)  // Increased height
//         .style('display', 'block')
//         .style('margin', '0 auto');  // Center the SVG

//       // === BEGIN DEFS ===
//       const defs = svg.append('defs');

//       // Define the radial gradient background for the entire SVG (if desired)
//       const globalBgGradient = defs.append('linearGradient')
//         .attr('id', 'globalBgGradient')
//         .attr('x1', '0%').attr('y1', '0%')
//         .attr('x2', '100%').attr('y2', '100%');
//       globalBgGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', '#101216');
//       globalBgGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#222933');

//       // Make the SVG background more interesting (optional)
//       svg.append('rect')
//         .attr('width', '100%')
//         .attr('height', '100%')
//         .style('fill', 'url(#globalBgGradient)');

//       // Define the main radial gradient for the gauge face
//       const backgroundGradient = defs.append('radialGradient')
//         .attr('id', 'backgroundGradient')
//         .attr('cx', '50%').attr('cy', '50%').attr('r', '50%');
//       backgroundGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', 'rgba(255, 255, 255, 0.95)');
//       backgroundGradient.append('stop')
//         .attr('offset', '20%')
//         .attr('stop-color', 'rgba(230, 240, 255, 0.8)');
//       backgroundGradient.append('stop')
//         .attr('offset', '40%')
//         .attr('stop-color', 'rgba(200, 220, 255, 0.6)');
//       backgroundGradient.append('stop')
//         .attr('offset', '60%')
//         .attr('stop-color', 'rgba(170, 200, 255, 0.4)');
//       backgroundGradient.append('stop')
//         .attr('offset', '80%')
//         .attr('stop-color', 'rgba(140, 180, 255, 0.2)');
//       backgroundGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', 'rgba(110, 160, 255, 0.1)');

//       // Define stroke gradient for outer ring
//       const strokeGradient = defs.append('linearGradient')
//         .attr('id', 'strokeGradient')
//         .attr('x1', '0%').attr('y1', '0%')
//         .attr('x2', '100%').attr('y2', '100%');
//       strokeGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', '#e2e2e2');
//       strokeGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#888');

//       // Define outer glow filter
//       const outerGlow = defs.append('filter')
//         .attr('id', 'outerGlow');
//       outerGlow.append('feGaussianBlur')
//         .attr('stdDeviation', 5)
//         .attr('result', 'coloredBlur');
//       outerGlow.append('feMerge')
//         .selectAll('feMergeNode')
//         .data(['coloredBlur', 'SourceGraphic'])
//         .enter()
//         .append('feMergeNode')
//         .attr('in', d => d);

//       // Define inner shadow filter
//       const innerShadow = defs.append('filter')
//         .attr('id', 'innerShadow')
//         .attr('x', '-50%')
//         .attr('y', '-50%')
//         .attr('width', '200%')
//         .attr('height', '200%');
//       innerShadow.append('feComponentTransfer')
//         .append('feFuncA')
//         .attr('type', 'table')
//         .attr('tableValues', '1 0');
//       innerShadow.append('feGaussianBlur')
//         .attr('stdDeviation', 3)
//         .attr('result', 'blur');
//       innerShadow.append('feOffset')
//         .attr('dx', 3)
//         .attr('dy', 3)
//         .attr('result', 'offsetBlur');
//       innerShadow.append('feComposite')
//         .attr('operator', 'out')
//         .attr('in', 'SourceGraphic')
//         .attr('in2', 'offsetBlur')
//         .attr('result', 'inverse');
//       innerShadow.append('feFlood')
//         .attr('flood-color', 'black')
//         .attr('flood-opacity', '0.5')
//         .attr('result', 'color');
//       innerShadow.append('feComposite')
//         .attr('operator', 'in')
//         .attr('in', 'color')
//         .attr('in2', 'inverse')
//         .attr('result', 'shadow');
//       innerShadow.append('feComposite')
//         .attr('operator', 'over')
//         .attr('in', 'shadow')
//         .attr('in2', 'SourceGraphic');

//       // Define radial reflection gradient for the gauge face
//       const reflectionGradient = defs.append('radialGradient')
//         .attr('id', 'reflectionGradient')
//         .attr('cx', '50%').attr('cy', '50%').attr('r', '50%');
//       reflectionGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', '#fff')
//         .attr('stop-opacity', 0.1);
//       reflectionGradient.append('stop')
//         .attr('offset', '50%')
//         .attr('stop-color', '#fff')
//         .attr('stop-opacity', 0.05);
//       reflectionGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#fff')
//         .attr('stop-opacity', 0);

//       // Define an extra glossy highlight arc (for added 3D effect)
//       const highlightGradient = defs.append('linearGradient')
//         .attr('id', 'highlightGradient')
//         .attr('x1', '0%').attr('y1', '0%')
//         .attr('x2', '0%').attr('y2', '100%');
//       highlightGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', 'rgba(255, 255, 255, 0.8)');
//       highlightGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', 'rgba(255, 255, 255, 0)');

//       // Define needle gradient for shading effect
//       const needleGradient = defs.append('linearGradient')
//         .attr('id', 'needleGradient')
//         .attr('x1', '0%').attr('y1', '0%')
//         .attr('x2', '0%').attr('y2', '100%');
//       needleGradient.append('stop')
//         .attr('offset', '0%')
//         .attr('stop-color', '#ffffff');
//       needleGradient.append('stop')
//         .attr('offset', '100%')
//         .attr('stop-color', '#888888');

//       // Define needle shadow for 3D effect
//       const needleShadow = defs.append('filter')
//         .attr('id', 'needleShadow');
//       needleShadow.append('feDropShadow')
//         .attr('dx', 0)
//         .attr('dy', 3)
//         .attr('stdDeviation', 2)
//         .attr('flood-color', '#000')
//         .attr('flood-opacity', 0.5);
//       // === END DEFS ===

//       // Enhanced styling function
//       const createGauge = (x, y, labels, initialAngle) => {
//         const gaugeGroup = svg.append('g')
//           .attr('transform', `translate(${x + 100}, ${y})`);

//         // Add a soft neon-like glow ring behind the gauge
//         gaugeGroup.append('circle')
//           .attr('r', 205)
//           .style('fill', 'none')
//           .style('stroke', '#2b2b2b')
//           .style('stroke-width', 35)
//           .style('filter', 'url(#outerGlow)')
//           .style('opacity', 0.3);

//         // Add outer ring with an animated neon pulse
//         gaugeGroup.append('circle')
//           .attr('r', 190)
//           .style('fill', 'none')
//           .style('stroke', 'rgba(0, 200, 255, 0.6)')
//           .style('stroke-width', 5)
//           .style('filter', 'url(#outerGlow)')
//           .style('animation', 'pulseNeon 3s ease-in-out infinite alternate');

//         // Core gauge body with 3D glass-like styling
//         gaugeGroup.append('circle')
//           .attr('r', 180)
//           .style('fill', 'url(#reflectionGradient)')
//           .style('stroke', 'url(#strokeGradient)')
//           .style('stroke-width', 6)
//           .style('filter', 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))')
//           .style('opacity', 0.9)
//           .style('transition', 'all 0.3s ease-in-out')
//           .style('fill-opacity', 0.85)
//           .style('stroke-dasharray', '5,5')
//           .style('stroke-linecap', 'round')
//           .style('transform', 'translateZ(10px) scale(1.05)')
//           .style('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)')
//           .style('backdrop-filter', 'blur(5px)')
//           .style('background', 'rgba(255, 255, 255, 0.2)')
//           .style('border-radius', '50%')
//           .style('border', '1px solid rgba(255, 255, 255, 0.3)')
//           .style('mix-blend-mode', 'overlay');

//         // Inner shadow for depth
//         gaugeGroup.append('circle')
//           .attr('r', 175)
//           .style('fill', 'none')
//           .style('stroke', 'rgba(0, 0, 0, 0.5)')
//           .style('stroke-width', 10)
//           .style('filter', 'url(#innerShadow)');

//         // Additional subtle radial gradient background
//         gaugeGroup.append('circle')
//           .attr('r', 165)
//           .style('fill', 'url(#backgroundGradient)')
//           .style('opacity', 0.7);

//         // Enhanced arrow-shaped stroke or ornament near the top of the gauge
//         gaugeGroup.append('path')
//           .attr('d', 'M 0 -180 L 10 -170 L 0 -160 L -10 -170 Z')
//           .style('fill', 'url(#strokeGradient)')
//           .style('filter', 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))')
//           .style('opacity', 0.9)
//           .style('transition', 'all 0.3s ease-in-out')
//           .style('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)');

//         // Add a subtle highlight arc on the inside for more glossy effect
//         gaugeGroup.append('path')
//           .attr('d', d3.arc()
//             .innerRadius(140)
//             .outerRadius(160)
//             .startAngle(-Math.PI / 2.1)
//             .endAngle(Math.PI / 2.1))
//           .attr('fill', 'url(#highlightGradient)')
//           .style('opacity', 0.3)
//           .attr('transform', 'rotate(90)');

//         // Ticks
//         labels.forEach(label => {
//           gaugeGroup.append('line')
//             .attr('x1', 0)
//             .attr('y1', -160)
//             .attr('x2', 0)
//             .attr('y2', -170)
//             .attr('transform', `rotate(${label.angle})`)
//             .style('stroke', '#fff')
//             .style('stroke-width', 2);
//         });

//         // Thicker needle with shading
//         const needle = gaugeGroup.append('path')
//           .attr('d', 'M -2 0 L 2 0 L 0 -150 Z')
//           .attr('transform', `rotate(${initialAngle})`) // Start at specified initial angle
//           .style('fill', 'url(#needleGradient)')
//           .style('filter', 'url(#needleShadow)');

//         // Apply CSS transition for smooth rotation
//         needle.node().style.transition = 'transform 1s ease-out 0.5s'; // 3s duration, 1s delay

//         // Delay actual angle assignment for the “intro” animation
//         setTimeout(() => {
//           if (labels === kwLabels) {
//             needle.attr('transform', `rotate(${kwNeedleAngle})`);
//           } else if (labels === rpmLabels) {
//             needle.attr('transform', `rotate(${rpmNeedleAngle})`);
//           }
//         }, 1000); // 1 second delay before starting the animation

//         // Add initial placeholder text
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

//         // Smooth fade-in for initial text
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
//         }, 2500); // Delay to match needle animation

//         // Add labels around the gauge
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
//       };

//       // Create left gauge (kW)
//       createGauge(200, 200, kwLabels, kwNeedleAngle);
//       // Create right gauge (RPM)
//       createGauge(600, 200, rpmLabels, rpmNeedleAngle);

//       // Keyframes for neon pulsing animation
//       const styleEl = document.createElement('style');
//       styleEl.textContent = `
//         @keyframes pulseNeon {
//           0% {
//             stroke-width: 5;
//             stroke: rgba(0, 200, 255, 0.6);
//             opacity: 0.6;
//           }
//           100% {
//             stroke-width: 8;
//             stroke: rgba(0, 255, 255, 1);
//             opacity: 1;
//           }
//         }
//       `;
//       document.head.appendChild(styleEl);

//       return () => {
//         svg.remove();
//         document.head.removeChild(styleEl);
//       };
//     }, []); // Runs once on mount

//     // Separate useEffect for updating needle positions
//     useEffect(() => {
//       const kwNeedle = d3.select('#gaugeContainer')
//         .select('svg')
//         .selectAll('g')
//         .filter((d, i) => i === 0)
//         .select('path[d="M -2 0 L 2 0 L 0 -150 Z"]');

//       const rpmNeedle = d3.select('#gaugeContainer')
//         .select('svg')
//         .selectAll('g')
//         .filter((d, i) => i === 1)
//         .select('path[d="M -2 0 L 2 0 L 0 -150 Z"]');

//       // Update needle positions with transition
//       kwNeedle
//         .transition()
//         .duration(1000)
//         .attr('transform', `rotate(${kwNeedleAngle})`);

//       rpmNeedle
//         .transition()
//         .duration(1000)
//         .attr('transform', `rotate(${rpmNeedleAngle})`);

//       // Update text values after needle animation
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
//         let newRPM = getClosestLabelText(rpmNeedleAngle, rpmLabels);
//         localStorage.setItem('kW', getClosestLabelText(kwNeedleAngle, kwLabels));
//         localStorage.setItem('RPM', getClosestLabelText(rpmNeedleAngle, rpmLabels));
        
//         console.log('newRPM', newRPM)
//         if (newRPM === '400') {
//           updateMotorIconColor('#ff0000');
//           updateMotorIconColorTrue(true)
//           console.log('newRPM Lights', newRPM, motorIconColor)
//         } else {
//           updateMotorIconColorTrue(false)
//           updateMotorIconColor('rgb(51, 51, 51)');
//         }
//       }, 1500); // Delay matches needle transition duration
//     }, [kwNeedleAngle, rpmNeedleAngle]);

//     useEffect(() => {
//       const maxRPM = 800; // Assuming max RPM is 800
//       const angleRange = 270; // Total angle range for the needle

//       let kwAngle = (motorRPM / maxRPM) * angleRange - 0;
//       let rpmAngle = (motorRPM / maxRPM) * angleRange - 135;
//       console.log('kwAngle', kwAngle);
//       console.log('rpmAngle', rpmAngle);

//       if (rechargeAngle) {
//         console.log('test-rechargeAngle', rechargeAngle);
//         setKwNeedleAngle(-27);
//         if (motorRPM === 0) {
//           console.log('test-motorRPM', motorRPM);
//           setKwNeedleAngle(-27);
//         }
//       } else {
//         console.log('test-rechargeAngle', rechargeAngle);
//         console.log('test-motorRPM', motorRPM);
//         if (motorRPM === 0) {
//           console.log('test-motorRPM', motorRPM);
//           setKwNeedleAngle(0);
//         } else {
//           setKwNeedleAngle(prevAngle => (prevAngle !== kwAngle ? kwAngle : prevAngle));
//         }
//       }

//       setRpmNeedleAngle(prevAngle => (prevAngle !== rpmAngle ? rpmAngle : prevAngle));
//     }, [motorRPM, rechargeAngle]);

//     return (
//       <div id="gaugeContainer"></div>
//     );
// }

  
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
//       // <MdBatteryCharging30 style={{color:'#aaa', fontSize:'32px'}} />, 
//       <MdBatteryCharging50 style={{color:'#aaa', fontSize:'32px'}} />, 
//       <MdBatteryCharging60 style={{color:'#aaa', fontSize:'32px'}} />, 
//       <MdBatteryCharging80 style={{color:'#aaa', fontSize:'32px'}} />, 
//       <MdBatteryCharging90 style={{color:'#aaa', fontSize:'32px'}} />, 
//       // <MdBatteryChargingFull style={{color:'#aaa', fontSize:'32px'}} />
//     ];
  
//     const batteryIconsPercentage = [
//       <MdBattery20 style={{color:'#aaa', fontSize:'32px'}} />,
//       // <MdBattery30 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery50 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery60 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery80 style={{color:'#aaa', fontSize:'32px'}} />,
//       // <MdBattery90 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBatteryFull style={{color:'#aaa', fontSize:'32px'}} />
//     ];
  
//     const batteryIcons = [
//       <MdBattery20 style={{color:'#aaa', fontSize:'32px'}} />,
//       // <MdBattery30 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery50 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery60 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery80 style={{color:'#aaa', fontSize:'32px'}} />,
//       <MdBattery90 style={{color:'#aaa', fontSize:'32px'}} />,
//       // <MdBatteryFull style={{color:'#aaa', fontSize:'32px'}} />
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
//       }, 1000); // Change color every 1 second
//       return () => clearInterval(earthInterval);
//     }, []);
  
//     useEffect(() => {
//       const maxRPM = 400;
//       const batteryIndex = status.motorRPM/100 || 0//maxRPM * batteryIcons.length || 0;
//       const thermometerIndex = status.motorRPM/100 || 0;
//       const iconIndex = status.motorRPM/100 || 0;
  
//       setBatteryIconIndex(batteryIndex);
//       setThermometerIconIndex(thermometerIndex);
//       setCurrentIconIndex(iconIndex);
//     }, [status.motorRPM]);
  
//     useEffect(() => {
//       const iconInterval = setInterval(() => {
//         setCurrentIcon(prevIcon => prevIcon === 'PiPlugChargingDuotone' ? 'PiPlugChargingFill' : 'PiPlugChargingDuotone');
//       }, 1000); // Toggle every second
  
//       return () => clearInterval(iconInterval);
//     }, []);
  
//     useEffect(() => {
//         if (motorIconColorTrue) {
//         const toggleInterval = setInterval(() => {
//           setMotorIconColor(prevColor => prevColor === '#ff0000' ? 'rgb(51, 51, 51)' : '#ff0000');
//         }, 1000);
//         return () => clearInterval(toggleInterval);
//       }
//     }, [motorIconColorTrue]);
  
//     // batteryIconPercentageIndex
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
//           // console.log('test-gearValue sending', data.gearValue)
//           // console.log('test-engineIconColor sending', data.engineIconColor)
//           // console.log('test-motorRPM sending', data.motorRPM)
//         };
  
//         // Send data every second
//         const intervalId = setInterval(sendData, 1000);
  
//         ws.onclose = (event) => {
//           console.log('WebSocket connection closed:', event);
//           clearInterval(intervalId);
//         };
  
//         ws.onerror = (error) => {
//           console.error('WebSocket error:', error);
//           clearInterval(intervalId);
//         };
  
//         // Cleanup on component unmount   
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
  
  
//     const topBarReflection = {
//       content: '""',
//       position: 'absolute',
//       top:'0',
//       left:'0',
//       width:'100%',
//       height:'50%',
//       background:'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)',
//       zIndex:1
//     };
  
//     const topIconCommon = {
//       width: '50px',
//       height: '50px',
//       borderRight: '1px solid #333',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       transition: transitionAll,
//       position: 'relative',
//       cursor: 'pointer',
//       overflow: 'hidden',
//       // Gentle idle scaling animation
//       animation: 'iconIdle 6s infinite alternate ease-in-out'
//     };
  
//     const iconReflection = {
//       content: '""',
//       position: 'absolute',
//       top:0,
//       left:0,
//       width:'100%',
//       height:'50%',
//       background:'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
//       pointerEvents:'none',
//       animation: 'shimmer 5s infinite'
//     };
  
//     const activeIconBackground = {
//       backgroundColor: '#ff0000',
//       // Pulsing background animation
//       animation: 'iconBgPulse 5s infinite alternate ease-in-out'
//     };
  
//     const topIconStyle = {
//       color: '#fff',
//       fontSize: '30px',
//       transition: transitionAll,
//       textShadow: '0 0 2px rgba(0, 0, 0, 0.5)'
//     };
  
//     const onIconHover = (e) => {
//       e.currentTarget.style.transform = 'scale(1.05)';
//       e.currentTarget.style.boxShadow = '0 0 10px #ff5555 inset, 0 0 10px #ff4444';
//     };
  
//     const onIconLeave = (e) => {
//       e.currentTarget.style.transform = '';
//       e.currentTarget.style.boxShadow = '';
//     };
  
//     // Gauges
//     const gaugesContainerStyle = {
//       display: 'flex',
//       flexDirection: 'row',
//       backgroundColor: '#333',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '20px 0',
//       borderBottom: '1px solid #444',
//       position: 'relative'
//     };
  
//     // Rotating gradient behind gauges
//     const rotatingGradientContainer = {
//       position:'absolute',
//       top:'50%',
//       left:'50%',
//       width:'600px',
//       height:'600px',
//       transform:'translate(-50%, -50%)',
//       borderRadius:'50%',
//       background:'radial-gradient(circle, #222 10%, #000 80%)',
//       zIndex:0,
//       animation:'rotateGradient 60s linear infinite'
//     };
  
//     const gaugeWrapperStyle = {
//       position: 'relative',
//       width: '450px',
//       height: '350px',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       boxShadow: 'inset 0 0 35px #000',
//       zIndex: 1,
//       perspective: '1600px',
//       transformStyle: 'preserve-3d'
//     };
  
//     const needleAngle = (value, minVal, maxVal) => {
//       const startAngle = -135;
//       const endAngle = 45;
//       const range = maxVal - minVal;
//       const normalized = (value - minVal) / range;
//       return startAngle + normalized * (endAngle - startAngle);
//     };
  
//     const kwNeedleAngle = kwLabels[0].angle;
//     const rpmNeedleAngle = needleAngle(motorRPM, 0, 800);
  
//     const enhancedGaugeStyle = {
//       position: 'relative',
//       width: '250px',
//       height: '250px',
//       borderRadius: '50%',
//       border: '4px solid #555',
//       boxShadow: 'inset 0 0 30px #000',
//       background: 'radial-gradient(circle at 50% 50%, #333 0%, #222 100%)',
//       overflow: 'hidden',
//       animation: 'gaugeHighlight 20s infinite alternate',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)',
//       borderRadius: '50%',
//       background: 'radial-gradient(circle, #333 0%, #111 70%)',
//       border: '2px solid #444'
//     };
  
  
//     const enhancedNeedleStyle = (angle, color) => ({
//       position: 'absolute',
//       width: '2px',
//       height: '90px',
//       backgroundColor: color,
//       bottom: '50%',
//       left: '50%',
//       transformOrigin: 'bottom center',
//       transform: `rotate(${angle}deg) translate(-50%, -50%)`,
//       transition: 'transform 0.5s ease-out',
//       boxShadow: '0 0 5px rgba(255, 0, 0, 0.7)',
//     });
  
//     const enhancedPivotStyle = {
//       position: 'absolute',
//       width: '10px',
//       height: '10px',
//       backgroundColor: '#fff',
//       borderRadius: '50%',
//       bottom: '50%',
//       left: '50%',
//       transform: 'translate(-50%, 5px)',
//       animation: 'breathGlow 6s infinite',
//       boxShadow: '0 0 5px rgba(0, 0, 0, 0.5), inset 0 0 5px rgba(255, 255, 255, 0.5)'
//     };
  
//     const enhancedLabelStyle = (angle) => ({
//       position:'absolute',
//       color:'#fff',
//       fontSize:'14px',
//       transformOrigin:'bottom center',
//       bottom:'50%',
//       left:'50%',
//       transform:`translateX(-50%) rotate(${angle}deg) translateY(-90px) rotate(${-angle}deg)`,
//       textShadow: '0 0 2px rgba(0, 0, 0, 0.5)'
//     });
  
//     const chromeTextStyle = {
//       background: 'linear-gradient(to right, #ccc, #fff, #ccc)',
//       WebkitBackgroundClip:'text',
//       WebkitTextFillColor:'transparent',
//       fontWeight:'bold'
//     };
  
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
  
//     const smallIconStyle = {
//       color: '#aaa',
//       fontSize: '32px', 
//       transition: transitionAll
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
//       { component: <LuParkingCircle color={parkingCircleColor} />, },
//       { component: <Engineicon  color={engineIconColor} />, },
//       { component: <MdBatteryCharging90 color={motorIconColor} />, },
//       { component: <MdOutlineBatteryAlert color={batteryIconColor} />, },
      
  
//     ];
  
//     // Define the createTicks function
//     const createTicks = (count) => {
//       const ticks = [];
//       const angleRange = 180;
//       for (let i = 0; i < count; i++) {
//         const angle = -135 + (i * (angleRange / (count - 1)));
//         ticks.push(
//           <div key={i} style={{
//             position: 'absolute',
//             width: '2px',
//             height: '15px',
//             backgroundColor: '#ccc',
//             transformOrigin: 'bottom center',
//             bottom: '50%',
//             left: '50%',
//             transform: `translateX(-50%) rotate(${angle}deg)`
//           }}></div>
//         );
//       }
//       return ticks;
//     };
  
//     // Further enhance the styling with more 3D effects
//     const moreEnhancedGaugeStyle = {
//       ...enhancedGaugeStyle,
//       boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.2)',
//       background: 'radial-gradient(circle, #444 0%, #222 80%)',
//       border: '3px solid #555'
//     };
  
//     const moreEnhancedNeedleStyle = (angle, color) => ({
//       ...enhancedNeedleStyle(angle, color),
//       boxShadow: '0 0 10px rgba(255, 0, 0, 0.9)',
//       transition: 'transform 0.3s ease-in-out'
//     });
  
//     const moreEnhancedPivotStyle = {
//       ...enhancedPivotStyle,
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.7)'
//     };
  
//     const moreEnhancedLabelStyle = (angle) => ({
//       ...enhancedLabelStyle(angle),
//       textShadow: '2px 2px 3px #000'
//     });
  
//     // Add even more styling to the gauges section
//     const ultimateGaugeStyle = {
//       ...moreEnhancedGaugeStyle,
//       boxShadow: '0 90px 180px rgba(0, 0, 0, 1), inset 0 0 100px rgba(255, 255, 255, 1)',
//       background: 'radial-gradient(circle at 50% 50%, #f0f0f0 0%, #ccc 100%)',
//       border: '18px solid #fff',
//       transform: 'rotateX(0deg) rotateY(0deg)',
//       perspective: '2800px',
//       transformStyle: 'preserve-3d',
//       overflow: 'hidden',
//       animation: 'gaugeGlow 16s ease-in-out infinite alternate',
//       backdropFilter: 'blur(10px)'
//     };
  
//     const ultimateNeedleStyle = (angle, color) => ({
//       ...moreEnhancedNeedleStyle(angle, color),
//       boxShadow: '0 0 15px rgba(255, 0, 0, 1)',
//       transition: 'transform 0.2s ease-in-out'
//     });
  
//     const ultimatePivotStyle = {
//       ...moreEnhancedPivotStyle,
//       boxShadow: '0 0 15px rgba(0, 0, 0, 0.9), inset 0 0 15px rgba(255, 255, 255, 0.9)'
//     };
  
//     const ultimateLabelStyle = (angle) => ({
//       ...moreEnhancedLabelStyle(angle),
//       textShadow: '3px 3px 4px #000'
//     });
  
//     const ultimateGaugeReflection = {
//       content: '""',
//       position: 'absolute',
//       top: '-50%',
//       left: '-50%',
//       width: '250%',
//       height: '170%',
//       background: 'url(#reflectionGradient)',
//       borderRadius: '50%',
//       boxShadow: 'inset 0 0 110px rgba(255, 255, 255, 1)',
//       transform: 'scale(2.4) rotateX(0deg) rotateY(0deg)',
//       opacity: 0.85,
//       backdropFilter: 'blur(10px)',
//       mixBlendMode: 'overlay',
//       filter: 'brightness(1.3) contrast(1.1)'
//     };
  
//     const [iconColor, setIconColor] = useState('rgb(51, 51, 51)');
//     const iconSize = '64px'; // Increased icon size
    
//     const handleIconClick = () => {
//       setIconColor((prevColor) => (prevColor === 'rgb(51, 51, 51)' ? '#ff0000' : 'rgb(51, 51, 51)'));
//       setSliderDisabled((prevDisabled) => !prevDisabled);
//       setStatus({motorRPM: 0});
//       if (sliderDisabled) { 
//         setRechargeAngle(false)
//         console.log('test1-rechargeAngle', rechargeAngle); 
//       }
//       if (!sliderDisabled) {
//         setRechargeAngle(true)
//         console.log('test1-rechargeAngle', rechargeAngle); 
//         const interval = setInterval(() => {
//           setBatteryIconPercentageIndex((prevIndex) => {
//             const newIndex = prevIndex + 1;
//             return newIndex > 4 ? 4 : newIndex;
//           });
//         }, 3000); // Increase every second
  
//         setTimeout(() => clearInterval(interval), 15000); // Stop after 5 seconds
//       }
  
//       console.log('batteryIconPercentageIndex', batteryIconPercentageIndex);
//       console.log('sliderDisabled', sliderDisabled);
//     };
  
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
//                 justifyContent: 'flex-start', // Align icons to the left
//                 alignItems: 'center',
//                 backgroundColor: '#111',
//                 height: '70px',
//                 borderBottom: '2px solid #333',
//                 padding: '0 10px',
//                 boxShadow: '0 2px 5px rgba(0, 0, 0, 0.8)',
//               }}
//             >
//               {/* Icons Array */}
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
//                     margin: '0', // Remove margin to eliminate spaces
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
//               updateMotorIconColor={setMotorIconColor} // Pass the callback
//               updateMotorIconColorTrue={setMotorIconColorTrue}
//               rechargeAngle={rechargeAngle}
//             />
  
//             {/* TOP ROW OF BOTTOM SECTION */}
//             <div style={panelStyle}>
//               {/* Gear icon with N/N */}
//               <div style={boxStyle}
//                    onMouseEnter={onBoxHover}
//                    onMouseLeave={onBoxLeave}>
//                 <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', fontSize: '24px'}}>
//                     <TbManualGearbox style={{ fontSize: '32px' }} />
//                   </div>
//                   <div style={bottomLabelStyle}>{gearValue || localStorage.getItem('gearValue')}</div>
//                 </div>
//               </div>
  
//               {/* Battery Percentage */}
//               <div style={boxStyle}
//                    onMouseEnter={onBoxHover}
//                    onMouseLeave={onBoxLeave}>
//                 <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                   {batteryIconsPercentage[batteryIconPercentageIndex]}
//                   </div>
//                   <div style={bottomLabelStyle}>{batteryPercentage} %</div>
//                 </div>
//               </div>
  
//               {/* Battery Temperature */}
//               <div style={boxStyle}
//                    onMouseEnter={onBoxHover}
//                    onMouseLeave={onBoxLeave}>
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
  
//               {/* Battery Lightning (for RPM) */}
//               <div style={boxStyle}
//                    onMouseEnter={onBoxHover}
//                    onMouseLeave={onBoxLeave}>
//                 <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                   {icons[currentIconIndex]}
//                 </div>
//                 <div style={bottomLabelStyle}>{(motorRPM || 0.0).toFixed(1)} RPM</div>
//               </div>
  
//               {/* Motor Speed Setting Slider */}
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
//                       width: '120px',  // Slightly increased width
//                       cursor: 'pointer',
//                       transition: transitionAll,
//                       boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',  // Added subtle shadow
//                       borderRadius: '10px'  // Rounded corners
//                     }}
//                     // onMouseEnter={(e) => {
//                     //   e.currentTarget.style.boxShadow='0 0 12px #fff';  // Enhanced glow on hover
//                     //   const thumb = e.currentTarget.querySelector('.MuiSlider-thumb');
//                     //   if (thumb) {
//                     //     thumb.style.animation='bounceThumb 1s ease';
//                     //     // thumb.style.transform='translateY(0)'; // Ensure no vertical movement
//                     //   }
//                     // }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.boxShadow='';
//                       const thumb = e.currentTarget.querySelector('.MuiSlider-thumb');
//                       if (thumb) {
//                         thumb.style.removeProperty('animation');
//                         // thumb.style.transform='translateY(0)'; // Ensure no vertical movement
//                       }
//                     }}
//                     componentsProps={{
//                       thumb: {
//                         className: 'MuiSlider-thumb',
//                         style: {
//                           // top: '0px',
//                           backgroundColor: '#777',
//                           width: '14px',  // Slightly larger thumb
//                           height: '14px',
//                           transition: transitionAll,
//                           border: '2px solid #fff'  // Added border for contrast
//                         }
//                       },
//                       track: {
//                         style: {
//                           background: 'linear-gradient(to right, #777, #bbb)'  // Enhanced gradient
//                         }
//                       },
//                       rail: {
//                         style: {
//                           background: 'linear-gradient(to right, #444, #555)'  // Enhanced gradient
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
//               justifyContent: 'space-between', // Adjust spacing as needed
//               alignItems: 'center'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 {/* Gear icon with N/N */}
//                 <div style={boxStyle}
//                     onMouseEnter={onBoxHover}
//                     onMouseLeave={onBoxLeave}>
//                   <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
//                     <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', fontSize: '24px'}}>
//                       <TbManualGearbox style={{ fontSize: '32px' }} />
//                     </div>
//                   </div>
//                 </div>
  
//                 {/* Battery Lightning */}
//                 <div style={boxStyle} onMouseEnter={onBoxHover} onMouseLeave={onBoxLeave}>
//                   <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                     <MdBatteryChargingFull style={{color:'#aaa', fontSize:'32px'}} />
//                   </div>
//                 </div>
  
//                 {/* Battery Temperature */}
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
  
//               {/* Keypad box */}
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
  
//               {/* Plug Icon */}
//               <div style={{
//                 ...plugBoxStyle,
//                 position: 'relative'
//               }}
//                    onMouseEnter={onBoxHover}
//                    onMouseLeave={onBoxLeave}
//                    onClick={handleIconClick}
//               >
//                 <div style={{ color: iconColor, fontSize: iconSize }}>
//                 <PiPlugChargingDuotone />
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
  