import "./style.css";
//import javascriptLogo from "./javascript.svg";
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'

document.querySelector("#app").innerHTML = `
  <div>
    <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
        <!-- Definir el marcador personalizado -->
        <a-marker preset="hiro">
            <!-- Contenido 3D: una esfera roja flotando sobre el marcador -->
            <a-entity gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"></a-entity>
        </a-marker>
        <!-- Cámara para AR -->
        <a-entity camera></a-entity>
    </a-scene>
  </div>
`;

//setupCounter(document.querySelector("#counter"));
//https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf
