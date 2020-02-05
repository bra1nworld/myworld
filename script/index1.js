const str =
    "天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩一体率宾归王鸣凤在竹白驹食场化被草木赖及万方盖此身发四大五常恭惟鞠养岂敢毁伤女慕贞洁男效才良知过必改得能莫忘罔谈彼短靡恃己长信使可覆器欲难量墨悲丝染诗赞羔羊景行维贤克念作圣德建名立形端表正空谷传声虚堂习听祸因恶积福缘善庆尺璧非宝寸阴是竞资父事君曰严与敬孝当竭力忠则尽命临深履薄夙兴温凊似兰斯馨如松之盛川流不息渊澄取映容止若思言辞安定笃初诚美慎终宜令荣业所基籍甚无竟学优登仕摄职从政存以甘棠去而益咏乐殊贵贱礼别尊卑上和下睦夫唱妇随外受傅训入奉母仪诸姑伯叔犹子比儿孔怀兄弟同气连枝交友投分切磨箴规仁慈隐恻造次弗离节义廉退颠沛匪亏性静情逸心动神疲守真志满逐物意移坚持雅操好爵自縻都邑华夏东西二京背邙面洛浮渭据泾宫殿盘郁楼观飞惊图写禽兽画彩仙灵丙舍旁启甲帐对楹肆筵设席鼓瑟吹笙升阶纳陛弁转疑星右通广内左达承明既集坟典亦聚群英杜稿钟隶漆书壁经府罗将相路侠槐卿户封八县家给千兵高冠陪辇驱毂振缨世禄侈富车驾肥轻策功茂实勒碑刻铭盘溪伊尹佐时阿衡奄宅曲阜微旦孰营桓公匡合济弱扶倾绮回汉惠说感武丁俊义密勿多士实宁晋楚更霸赵魏困横假途灭虢践土会盟何遵约法韩弊烦刑起翦颇牧用军最精宣威沙漠驰誉丹青九州禹迹百郡秦并岳宗泰岱禅主云亭雁门紫塞鸡田赤诚昆池碣石钜野洞庭旷远绵邈岩岫杳冥治本于农务兹稼穑俶载南亩我艺黍稷税熟贡新劝赏黜陟孟轲敦素史鱼秉直庶几中庸劳谦谨敕聆音察理鉴貌辨色贻厥嘉猷勉其祗植省躬讥诫宠增抗极殆辱近耻林皋幸即两疏见机解组谁逼索居闲处沉默寂寥求古寻论散虑逍遥欣奏累遣戚谢欢招渠荷的历园莽抽条枇杷晚翠梧桐蚤凋陈根委翳落叶飘摇游鹍独运凌摩绛霄耽读玩市寓目囊箱易輶攸畏属耳垣墙具膳餐饭适口充肠饱饫烹宰饥厌糟糠亲戚故旧老少异粮妾御绩纺侍巾帷房纨扇圆洁银烛炜煌昼眠夕寐蓝笋象床弦歌酒宴接杯举殇矫手顿足悦豫且康嫡后嗣续祭祀烝尝稽颡再拜悚惧恐惶笺牒简要顾答审详骸垢想浴执热愿凉驴骡犊特骇跃超骧诛斩贼盗捕获叛亡布射僚丸嵇琴阮箫恬笔伦纸钧巧任钓释纷利俗并皆佳妙毛施淑姿工颦妍笑年矢每催曦晖朗曜璇玑悬斡晦魄环照指薪修祜永绥吉劭矩步引领俯仰廊庙束带矜庄徘徊瞻眺孤陋寡闻愚蒙等诮谓语助者焉哉乎也";
const strLen = str.length;
/**
 * 天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩一体率宾归王鸣凤在竹白驹食场化被草木赖及万方盖此身发四大五常恭惟鞠养岂敢毁伤女慕贞洁男效才良知过必改得能莫忘罔谈彼短靡恃己长信使可覆器欲难量墨悲丝染诗赞羔羊景行维贤克念作圣德建名立形端表正空谷传声虚堂习听祸因恶积福缘善庆尺璧非宝寸阴是竞资父事君曰严与敬孝当竭力忠则尽命临深履薄夙兴温凊似兰斯馨如松之盛川流不息渊澄取映容止若思言辞安定笃初诚美慎终宜令荣业所基籍甚无竟学优登仕摄职从政存以甘棠去而益咏乐殊贵贱礼别尊卑上和下睦夫唱妇随外受傅训入奉母仪诸姑伯叔犹子比儿孔怀兄弟同气连枝交友投分切磨箴规仁慈隐恻造次弗离节义廉退颠沛匪亏性静情逸心动神疲守真志满逐物意移坚持雅操好爵自縻都邑华夏东西二京背邙面洛浮渭据泾宫殿盘郁楼观飞惊图写禽兽画彩仙灵丙舍旁启甲帐对楹肆筵设席鼓瑟吹笙升阶纳陛弁转疑星右通广内左达承明既集坟典亦聚群英杜稿钟隶漆书壁经府罗将相路侠槐卿户封八县家给千兵高冠陪辇驱毂振缨世禄侈富车驾肥轻策功茂实勒碑刻铭盘溪伊尹佐时阿衡奄宅曲阜微旦孰营桓公匡合济弱扶倾绮回汉惠说感武丁俊义密勿多士实宁晋楚更霸赵魏困横假途灭虢践土会盟何遵约法韩弊烦刑起翦颇牧用军最精宣威沙漠驰誉丹青九州禹迹百郡秦并岳宗泰岱禅主云亭雁门紫塞鸡田赤诚昆池碣石钜野洞庭旷远绵邈岩岫杳冥治本于农务兹稼穑俶载南亩我艺黍稷税熟贡新劝赏黜陟孟轲敦素史鱼秉直庶几中庸劳谦谨敕聆音察理鉴貌辨色贻厥嘉猷勉其祗植省躬讥诫宠增抗极殆辱近耻林皋幸即两疏见机解组谁逼索居闲处沉默寂寥求古寻论散虑逍遥欣奏累遣戚谢欢招渠荷的历园莽抽条枇杷晚翠梧桐蚤凋陈根委翳落叶飘摇游鹍独运凌摩绛霄耽读玩市寓目囊箱易輶攸畏属耳垣墙具膳餐饭适口充肠饱饫烹宰饥厌糟糠亲戚故旧老少异粮妾御绩纺侍巾帷房纨扇圆洁银烛炜煌昼眠夕寐蓝笋象床弦歌酒宴接杯举殇矫手顿足悦豫且康嫡后嗣续祭祀烝尝稽颡再拜悚惧恐惶笺牒简要顾答审详骸垢想浴执热愿凉驴骡犊特骇跃超骧诛斩贼盗捕获叛亡布射僚丸嵇琴阮箫恬笔伦纸钧巧任钓释纷利俗并皆佳妙毛施淑姿工颦妍笑年矢每催曦晖朗曜璇玑悬斡晦魄环照指薪修祜永绥吉劭矩步引领俯仰廊庙束带矜庄徘徊瞻眺孤陋寡闻愚蒙等诮谓语助者焉哉乎也
 */

const winW = window.innerWidth;
const winH = window.innerHeight;
const config = {
    moveSpeed: 1,
    rotationSpeed: 0.02,
    maxX: winW / 2,
    maxY: winH / 2,
    maxZ: 300
};
let scene;
let camera;
let renderer;
let light;
let gui;
let stats = initStats();
const animInfoArr = [];
const objects = [];
function initScene() {
    scene = new THREE.Scene();
    // camera = new THREE.PerspectiveCamera(
    //     45,
    //     window.innerWidth / window.innerHeight,
    //     650,
    //     1350
    // );
    const { maxX, maxY } = config;
    camera = new THREE.OrthographicCamera(
        maxX * -1,
        maxX,
        maxY,
        maxY * -1,
        0.01,
        1500
    );
    camera.position.set(0, 0, 1000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function initLight() {
    light = new THREE.SpotLight(0xeedfcc);
    light.position.set(0, 0, 0);
    light.castShadow = true;

    scene.add(light);
    scene.add(new THREE.AmbientLight(0xd1d1d1));
}

function initContent() {
    for (let i = 0; i < strLen; i = i + 1) {
        const text = str[i];
        const fontMesh = get3DObject(text);
        const {
            x,
            y,
            z,
            xSpeed,
            ySpeed,
            zSpeed,
            rotateSpeed
        } = getRandomTranslationInfo();
        fontMesh.position.set(x, y, z);
        fontMesh.rotation.set(0, 0, 0);
        fontMesh.scale.x = fontMesh.scale.y = z / config.maxZ;
        animInfoArr.push({ xSpeed, ySpeed, zSpeed, rotateSpeed });
        scene.add(fontMesh);
    }
    // });
}
function get3DObject(text) {
    var ele = document.createElement("div");
    ele.className = "element";
    ele.innerHTML = text;
    var obj = new THREE.CSS3DObject(ele);
    console.log(obj);

    objects.push(obj);
    return obj;
}
function getFontMesh({ font, text }) {
    var fontCfg = {
        font: font,
        size: 30,
        height: 5,
        curveSegments: 2,
        bevelEnabled: false
    };
    var fontGeometry = new THREE.TextGeometry(text, fontCfg);
    fontGeometry.computeBoundingBox();

    var fontMaterial = new THREE.MeshBasicMaterial({
        color: 0xababab
    });
    const obj = new THREE.Mesh(fontGeometry, fontMaterial);
    objects.push(obj);

    return obj;
}

function getRandomTranslationInfo() {
    const { maxX, maxY, maxZ, moveSpeed, rotationSpeed } = config;
    const x = maxX * getRandom([-1, 1]);
    const y = maxY * getRandom([-1, 1]);
    const z = maxZ * getRandom([0.4, 1]);
    const rotateX = 180 * getRandom([-1, 1]);
    const rotateY = 180 * getRandom([-1, 1]);
    const rotateZ = 180 * getRandom([-1, 1]);
    const xSpeed = moveSpeed * getRandom([-1, 1]);
    const ySpeed = moveSpeed * getRandom([-1, -0.1]);
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

function initControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function update() {
    // controls.update();
    stats.update();
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function initStats() {
    var stats = new Stats();

    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";

    document.body.appendChild(stats.domElement);

    return stats;
}

function translate() {
    objects.forEach((object, index) => {
        const { position, element } = object;
        const info = animInfoArr[index];
        if (getObjectOutOfRangeInfo(position)) {
            // info.ySpeed = config.moveSpeed * getRandom([-1, -0.1]);
            // element.innerHTML = str[(Math.random() * strLen) | 0];
            object.position.y *= -1;
        }
        object.position.y += info.ySpeed;
    });
}

function getObjectOutOfRangeInfo(position) {
    return Math.abs(position.y) >= config.maxY + 50;
}

function init() {
    initScene();
    initLight();
    initContent();
    // initControls();
    window.addEventListener("resize", onWindowResize, false);
}

function animate() {
    translate();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    update();
}

init();
animate();
