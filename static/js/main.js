import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#canvas')
});
      renderer.setSize( window.innerWidth, window.innerHeight );



      // create a Scene
      var scene = new THREE.Scene();

      // create a PerspectiveCamera
      const fov = 75;
      const aspect = window.innerWidth / window.innerHeight;
      const nearClippingPlane = 0.1;
      const farClippingPlane = 1000;
      const camera = new THREE.PerspectiveCamera( fov, aspect, nearClippingPlane, farClippingPlane );
      camera.position.setZ(10);
camera.position.setX(-1)
camera.position.setY(3)
      //const controls = new OrbitControls( camera, renderer.domElement );
      const loader = new GLTFLoader();
      // create a TorusKnotBufferGeometry
      //var geometry = new THREE.TorusKnotGeometry( 5, 1, 100, 16 );

      // create a MeshStandardMaterial and set its color to purple
      //var material = new THREE.MeshStandardMaterial( {
          //color: 0xb300b3, 
      //} );

      // create a Mesh containing the geometry and material and add it to the scene
      //var mesh = new THREE.Mesh( geometry, material );
      //scene.add( mesh );

      // create a dark grey ambient light with an intensity of 1.0 and add it to the scene
      const ambientLight = new THREE.AmbientLight()
      scene.add( ambientLight );
     
      const texture = new THREE.TextureLoader().load('images/space.jpg')
      scene.background = texture
      // Create a white directional light with an intensity of 1.0

      const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
      directionalLight.position.set( 0, 10, 0 );
      scene.add( directionalLight );

 loader.load( 'static/images/room.glb', function ( gltf ) {

	scene.add( gltf.scene );
     
}, undefined, function ( error ) {

	console.error( error)

} );

// const camerahelper =  new THREE.CameraHelper(camera);
// const axishelper =  new THREE.AxesHelper()
// const lighthelper =  new THREE.PointLightHelper(ambientLight)
// const gridHelper = new THREE.GridHelper( 200, 50 );
// scene.add(lighthelper,gridHelper,axishelper,camerahelper)
      function animate() {
        // schedule the animate function to be called at the start of every frame
        requestAnimationFrame( animate );
        
        renderer.render( scene, camera );
      }
      animate();
    
   