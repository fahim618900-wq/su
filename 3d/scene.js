// Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x20232a);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5,5,5);
scene.add(directionalLight);

// Geometry (Cube)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({color: 0x4CAF50});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Orbit Controls (local download if needed)
// const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
