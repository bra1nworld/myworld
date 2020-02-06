const poemsLen = window["poems"].length;
const strArr = window["poems"][(Math.random() * poemsLen) | 0];
const filterSpaceStrArr = strArr.map(arr =>
    arr.split("").filter(i => i !== " ")
);

const winW = window.innerWidth;
const winH = window.innerHeight;
const config = {
    moveSpeed: 0.5,
    rotationSpeed: 0.02,
    maxX: winW / 2,
    maxY: winH / 2,
    maxZ: 300
};
const fontSize = Math.min(30, Math.max(12, 360 / strArr.length));
const pausedConfig = {
    lineOffset: -50,
    rowOffset: fontSize,
    pausedZ: 200
};

let scene;
let camera;
let renderer;
let light;
let gui;
let stats = initStats();
const animInfoMatrix = [];
const objectMatrix = [];
const pausedLineIndexArr = [];

const pausedInfoMatrix = getPausedInfo(strArr);

function getPausedInfo(strArr) {
    const maxRowLength = Math.max(...strArr.map(arr => arr.length));
    const maxLineLength = strArr.length;
    const { lineOffset, rowOffset, pausedZ } = pausedConfig;
    const rowStartX = (maxRowLength / 2) * rowOffset * -1;
    const lineStartY = (maxLineLength / 2 - 0.5) * lineOffset * -1;

    return strArr.reduce((result, arr, i) => {
        const pArr = [];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === " ") continue;
            pArr.push({
                x: rowStartX + j * rowOffset,
                y: lineStartY + i * lineOffset,
                z: pausedZ
            });
        }
        result.push(pArr);
        return result;
    }, []);
}

function initScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        650,
        1350
    );
    const { maxX, maxY } = config;
    // camera = new THREE.OrthographicCamera(
    //     maxX * -1,
    //     maxX,
    //     maxY,
    //     maxY * -1,
    //     0.01,
    //     1500
    // );
    camera.position.set(0, 0, 1000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    // renderer = new THREE.WebGLRenderer();
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0xffffff);
    // renderer.shadowMap.enabled = false;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);
}

function initLight() {
    light = new THREE.SpotLight(0x858585);
    light.position.set(0, 0, 0);
    light.castShadow = true;

    scene.add(light);
    scene.add(new THREE.AmbientLight(0x858585));
}

function initContent() {
    // var loader = new THREE.FontLoader();

    // loader.load("../resources/HYXingKaiJ_Regular.json", function(font) {
    // const num = str.length;
    // scene.add(getFontMesh({ font, text: str[0] }));
    // for (let i = 0; i < num; i = i + 1) {
    //     const text = str[i];
    //     // const fontMesh = getFontMesh({ font, text });
    //     const fontMesh = get3DObject(text);
    //     const {
    //         x,
    //         y,
    //         z,
    //         rotateX,
    //         rotateY,
    //         rotateZ,
    //         xSpeed,
    //         ySpeed,
    //         zSpeed,
    //         rotateSpeed
    //     } = getRandomTranslationInfo();
    //     fontMesh.position.set(x, y, z);
    //     fontMesh.rotation.set(rotateX, rotateY, rotateZ);
    //     animInfoArr.push({ xSpeed, ySpeed, zSpeed, rotateSpeed });
    //     scene.add(fontMesh);
    // }
    // });

    for (let i = 0, len = filterSpaceStrArr.length; i < len; i++) {
        const str = filterSpaceStrArr[i];
        const objArr = [];
        const animInfoArr = [];

        for (let j = 0, jLen = str.length; j < jLen; j++) {
            const text = str[j];
            const fontMesh = get3DObject(text);
            fontMesh.name = `${i},${j}`;
            fontMesh.element.addEventListener("click", () => {
                clickHandler(fontMesh.name);
            });
            const {
                x,
                y,
                z,
                rotateX,
                rotateY,
                rotateZ,
                xSpeed,
                ySpeed,
                zSpeed,
                rotateSpeed
            } = getRandomTranslationInfo();
            fontMesh.position.set(x, y, z);
            fontMesh.rotation.set(rotateX, rotateY, rotateZ);
            animInfoArr.push({ xSpeed, ySpeed, zSpeed, rotateSpeed });
            objArr.push(fontMesh);
            scene.add(fontMesh);
        }

        objectMatrix.push(objArr);
        animInfoMatrix.push(animInfoArr);
    }
}
function get3DObject(text) {
    var ele = document.createElement("div");
    ele.className = "element";
    ele.innerHTML = text;
    ele.style.fontSize = `${fontSize}px`;
    ele.style.color = "#000000";
    return new THREE.CSS3DObject(ele);
}
function getFontMesh({ font, text }) {
    var fontCfg = {
        font: font,
        size: fontSize,
        height: 5,
        curveSegments: 2,
        bevelEnabled: false
    };
    var fontGeometry = new THREE.TextGeometry(text, fontCfg);
    fontGeometry.computeBoundingBox();

    var fontMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000
    });
    const obj = new THREE.Mesh(fontGeometry, fontMaterial);
    objects.push(obj);
    return obj;
}

function getRandomTranslationInfo() {
    const { maxX, maxY, maxZ, moveSpeed, rotationSpeed } = config;
    const x = maxX * getRandom([-1, 1]);
    const y = maxY * getRandom([-1, 1]);
    const z = maxZ * getRandom([-1, 1]);
    const rotateX = 180 * getRandom([-1, 1]);
    const rotateY = 180 * getRandom([-1, 1]);
    const rotateZ = 180 * getRandom([-1, 1]);
    const xSpeed = moveSpeed * getRandom([-1, 1]);
    const ySpeed = moveSpeed * getRandom([-1, 1]);
    const zSpeed = moveSpeed * getRandom([-1, 1]);
    const rotateSpeed = rotationSpeed * getRandom([-1, 1]);
    return {
        x,
        y,
        z,
        rotateX,
        rotateY,
        rotateZ,
        xSpeed,
        ySpeed,
        zSpeed,
        rotateSpeed
    };
}

function getRandom(arr) {
    const { max, min, random } = Math;
    const maxNum = max(...arr);
    const minNum = min(...arr);
    if (arr.length === 0) return 0;
    return random() * (maxNum - minNum) + minNum;
}
function clickHandler(name) {
    const [iy, ix] = name.split(",");
    const { xSpeed, ySpeed, zSpeed } = animInfoMatrix[iy][ix];
    if (xSpeed === ySpeed && xSpeed === zSpeed && xSpeed === 0) {
        pausedLineIndexArr.splice(pausedLineIndexArr.indexOf(iy), 1);
        restartLine(iy);
    } else {
        pausedLineIndexArr.push(iy);
        pauseLine(iy);
    }
}

function pauseLine(matrixY) {
    const targetObjectArr = objectMatrix[matrixY];
    THREE.TWEEN.removeAll();

    targetObjectArr.forEach((object, index) => {
        const { x, y, z } = pausedInfoMatrix[matrixY][index];
        new THREE.TWEEN.Tween(object.position)
            .to({ x, y, z }, 1000)
            .easing(THREE.TWEEN.Easing.Exponential.InOut)
            .start();

        new THREE.TWEEN.Tween(object.rotation)
            .to({ x: 0, y: 0, z: 0 }, 1000)
            .easing(THREE.TWEEN.Easing.Exponential.InOut)
            .start();
    });
    new THREE.TWEEN.Tween(this).to({}, 1000).start();

    animInfoMatrix[matrixY].forEach(info => {
        info.xSpeed = 0;
        info.ySpeed = 0;
        info.zSpeed = 0;
        info.rotateSpeed = 0;
    });
}

function restartLine(matrixY) {
    const { moveSpeed, rotationSpeed } = config;
    animInfoMatrix[matrixY].forEach(info => {
        info.xSpeed = moveSpeed * getRandom([-1, 1]);
        info.ySpeed = moveSpeed * getRandom([-1, 1]);
        info.zSpeed = moveSpeed * getRandom([-1, 1]);
        info.rotateSpeed = rotationSpeed * getRandom([-1, 1]);
    });
}

function initControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function update() {
    stats.update();
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    config.maxX = window.innerWidth / 2;
    config.maxY = window.innerHeight / 2;
}

function translate() {
    objectMatrix.forEach((arr, arrIndex) => {
        if (!~pausedLineIndexArr.indexOf(arrIndex)) {
            arr.forEach((object, index) => {
                const position = object.position;
                const { out, outX, outY, outZ } = getObjectOutOfRangeInfo(
                    position
                );
                const info = animInfoMatrix[arrIndex][index];
                if (out) {
                    info.xSpeed *= outX ? -1 : 1;
                    info.ySpeed *= outY ? -1 : 1;
                    info.zSpeed *= outZ ? -1 : 1;
                    info.rotateSpeed *= -1;
                }
                const { xSpeed, ySpeed, zSpeed, rotateSpeed } = info;
                const { x, y, z } = position;
                const { x: rX, y: rY, z: rZ } = object.rotation;
                object.position.set(x + xSpeed, y + ySpeed, z + zSpeed);
                object.rotation.set(
                    (rX + rotateSpeed) % 720,
                    (rY + rotateSpeed) % 720,
                    (rZ + rotateSpeed) % 720
                );
                object.rotation.z = rZ + rotateSpeed;
            });
        }
    });
}

function getObjectOutOfRangeInfo(position) {
    const { x, y, z } = position;
    const { maxX, maxY, maxZ } = config;
    const { abs } = Math;
    const out = abs(x) >= maxX || abs(y) >= maxY || abs(z) >= maxZ;
    return {
        out,
        outX: abs(x) >= maxX,
        outY: abs(y) >= maxY,
        outZ: abs(z) >= maxZ
    };
}
function initStats() {
    var stats = new Stats();

    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";

    document.body.appendChild(stats.domElement);

    return stats;
}
function init() {
    initScene();
    // initLight();
    initContent();
    window.addEventListener("resize", onWindowResize, false);
}

function animate() {
    translate();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    update();
    THREE.TWEEN.update();
}

init();
animate();
