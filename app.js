// ═══════════════════════════════════════════════════════════
// ARCHITECTURAL CORE DATA ENGINE
// ═══════════════════════════════════════════════════════════
const EDITIONS = [
  {
    id:'heritage', icon:'🔥', name:'Heritage', sub:'Classic Burnt Clay', eyebrow:'Est. Tradition — Reborn', tag:'Inspired by classic burnt clay bricks',
    desc:'Every BRÍK Heritage carries 4,000 years of ceramic memory in its iron-rich matrix. Fired in a single continuous reduction cycle, its deep terracotta hue is structural, not decorative — the result of controlled oxidation at the molecular level.',
    accent:'#C04E2A', bg:'#FDF9F6', mat:{ hex:0x9E3F1F, rough:.75, metal:.05 }, atmo:0x9E3F1F, units:150,
    vitals:[{l:'Origin Element',v:'Iron oxide clay matrix'},{l:'Firing Cycle',v:'1180°C Continual'},{l:'Dry Mass',v:'3.4 KG Nominal'},{l:'Surface Finish',v:'Matte reduction raw'}],
    bars:[{l:'Mineral Density',v:94},{l:'Tactile Texture',v:98},{l:'Thermal Retention',v:91},{l:'Rarity Coefficient',v:72}],
    stats:[{l:'Dimension Size',v:'215×102.5×65mm'},{l:'Raw Material',v:'Red clay / Iron oxide'},{l:'Kiln Duration',v:'72hr reduction'},{l:'Current Status',v:'Phase I — 150 units'}]
  },
  {
    id:'titan', icon:'⚙️', name:'Titan', sub:'Engineering Grade Silicate', eyebrow:'Precision Over Ornament', tag:'Based on engineering bricks — the strongest edition',
    desc:'BRÍK Titan is rated to 140N/mm² compressive strength — the highest in the collection. Engineered for those who understand that true luxury is not fragile. The blue-grey manganese surface resists acid, salt, and time with equal indifference.',
    accent:'#2D5D96', bg:'#F4F7FC', mat:{ hex:0x22446B, rough:.40, metal:.55 }, atmo:0x2D5D96, units:100,
    vitals:[{l:'Origin Element',v:'Manganese heavy clay'},{l:'Firing Cycle',v:'1260°C High Flux'},{l:'Dry Mass',v:'3.8 KG Heavy'},{l:'Surface Finish',v:'Semi-vitrified satin'}],
    bars:[{l:'Mineral Density',v:99},{l:'Tactile Texture',v:45},{l:'Thermal Retention',v:98},{l:'Rarity Coefficient',v:81}],
    stats:[{l:'Dimension Size',v:'215×102.5×65mm'},{l:'Raw Material',v:'Manganese / Silicate'},{l:'Kiln Duration',v:'96hr High Pressure'},{l:'Current Status',v:'Phase I — 100 units'}]
  },
  {
    id:'inferno', icon:'🌋', name:'Inferno', sub:'Refractory Crystalline', eyebrow:'Forged to Withstand the Impossible', tag:'Forged to withstand extreme environments',
    desc:'BRÍK Inferno is composed of 38% alumina refractory clay — the same compounds used in blast furnaces and rocket nozzle linings. It tolerates continuous exposure to 1650°C. The volcanic surface carries natural crystalline inclusions that glow amber in direct light.',
    accent:'#D34100', bg:'#FFF5F2', mat:{ hex:0x852400, rough:.65, metal:.15 }, atmo:0xD34100, units:80,
    vitals:[{l:'Origin Element',v:'38% Alumina Refractory'},{l:'Firing Cycle',v:'1480°C Hyper Kiln'},{l:'Dry Mass',v:'4.1 KG Ultra'},{l:'Surface Finish',v:'Volcanic crystalline coarse'}],
    bars:[{l:'Mineral Density',v:97},{l:'Tactile Texture',v:100},{l:'Thermal Retention',v:100},{l:'Rarity Coefficient',v:88}],
    stats:[{l:'Dimension Size',v:'228×114×76mm'},{l:'Raw Material',v:'Alumina / Silica fusion'},{l:'Kiln Duration',v:'Shuttle kiln 1480°C'},{l:'Current Status',v:'Phase I — 80 units'}]
  },
  {
    id:'terra', icon:'🌿', name:'Terra', sub:'Eco Reclaimed Mineral', eyebrow:'Reclaimed From Industry', tag:'Eco-inspired, drawn from fly ash minerals',
    desc:'BRÍK Terra repurposes coal combustion fly ash — converting industrial residue into structural art. Its sage-grey surface is embedded with micro-crystalline silica structures invisible to the eye but present in every cross-section. Zero virgin clay. Full structural integrity.',
    accent:'#3B6B4C', bg:'#F5FAF6', mat:{ hex:0x264731, rough:.85, metal:.02 }, atmo:0x3B6B4C, units:200,
    vitals:[{l:'Origin Element',v:'Reclaimed bio fly ash'},{l:'Firing Cycle',v:'1050°C Eco Wave'},{l:'Dry Mass',v:'2.9 KG Light'},{l:'Surface Finish',v:'Matte sage mineral pore'}],
    bars:[{l:'Mineral Density',v:92},{l:'Tactile Texture',v:88},{l:'Thermal Retention',v:82},{l:'Rarity Coefficient',v:65}],
    stats:[{l:'Dimension Size',v:'215×102.5×65mm'},{l:'Raw Material',v:'Fly ash / Portland Core'},{l:'Kiln Duration',v:'Low-temp 48hr cycle'},{l:'Current Status',v:'Phase I — 200 units'}]
  },
  {
    id:'monolith', icon:'💎', name:'Monolith', sub:'Golden Core™ Flagship', eyebrow:'The Apex of the Collection', tag:'The flagship luxury edition — Golden Core™',
    desc:'At the center of every BRÍK Monolith is a 4mm vein of our proprietary Golden Core™ compound — a silicate-gold alloy fused under controlled pressure at 1400°C. Visible only in cross-section. Each unit is individually numbered and arrives in a hand-stitched obsidian case.',
    accent:'#B59424', bg:'#FCFAF2', mat:{ hex:0x806714, rough:.20, metal:.92 }, atmo:0xB59424, units:50,
    vitals:[{l:'Origin Element',v:'Golden Core™ Element alloy'},{l:'Firing Cycle',v:'1400°C Induction'},{l:'Dry Mass',v:'3.6 KG Dense'},{l:'Surface Finish',v:'Aurum mirror matrix'}],
    bars:[{l:'Mineral Density',v:98},{l:'Tactile Texture',v:15},{l:'Thermal Retention',v:95},{l:'Rarity Coefficient',v:100}],
    stats:[{l:'Dimension Size',v:'215×102.5×65mm'},{l:'Raw Material',v:'Golden Core™ Specie'},{l:'Kiln Duration',v:'Precision Induction'},{l:'Current Status',v:'Phase I — 50 units only'}]
  }
];

let currentEdition = 0;
const root = document.documentElement;

function applyGlobalColors(ed) {
  root.style.setProperty('--accent', ed.accent);
  document.body.style.backgroundColor = ed.bg;
  document.getElementById('cursor-dot').style.backgroundColor = ed.accent;
  document.getElementById('cursor-ring').style.borderColor = ed.accent;
}

// ═══════════════════════════════════════════════════════════
// ADVANCED MOUSE CURSOR DETECTOR & PARTICLE STREAM
// ═══════════════════════════════════════════════════════════
const cDot = document.getElementById('cursor-dot');
const cRing = document.getElementById('cursor-ring');
const curCanvas = document.getElementById('cursor-canvas');
const cx = curCanvas ? curCanvas.getContext('2d') : null;
let mx = 0, my = 0, rx = 0, ry = 0;
let cursorParticles = [];

function resizeCursorCanvas() { if (curCanvas) { curCanvas.width = window.innerWidth; curCanvas.height = window.innerHeight; } }
window.addEventListener('resize', resizeCursorCanvas); resizeCursorCanvas();

class CursorSpark {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.vx = (Math.random() - 0.5) * 35;
    this.vy = (Math.random() - 0.5) * 35;
    this.size = Math.random() * 3 + 1;
    this.alpha = 1;
    this.decay = 0.02 + Math.random() * 0.03;
  }
  update() {
    this.x += this.vx * 0.05; this.y += this.vy * 0.05;
    this.alpha -= this.decay;
  }
  draw() {
    if (!cx) return;
    cx.save(); cx.globalAlpha = this.alpha;
    cx.fillStyle = EDITIONS[currentEdition].accent;
    cx.beginPath(); cx.arc(this.x, this.y, this.size, 0, Math.PI * 2); cx.fill(); cx.restore();
  }
}

window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cDot.style.left = mx + 'px'; cDot.style.top = my + 'px';
  
  if (Math.random() < 0.28) {
    cursorParticles.push(new CursorSpark(mx, my));
  }
});

(function loopCursor() {
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  cRing.style.left = rx + 'px'; cRing.style.top = ry + 'px';
  
  if(cx) {
    cx.clearRect(0, 0, curCanvas.width, curCanvas.height);
    for(let i = cursorParticles.length - 1; i >= 0; i--) {
      cursorParticles[i].update();
      if(cursorParticles[i].alpha <= 0) {
        cursorParticles.splice(i, 1);
      } else {
        cursorParticles[i].draw();
      }
    }
  }
  requestAnimationFrame(loopCursor);
})();

function hookInteractiveElements() {
  document.querySelectorAll('button, a, .ed-card, .dot, .arr, .ptab, canvas').forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('is-hovering');
      for(let i=0; i<8; i++) cursorParticles.push(new CursorSpark(mx, my));
    });
    el.addEventListener('mouseleave', () => document.body.classList.remove('is-hovering'));
  });
}

// ═══════════════════════════════════════════════════════════
// HIGH FIDELITY THREE.JS VIEWPORT SCENE MATRIX (3D MODEL)
// ═══════════════════════════════════════════════════════════
let scene, cam, ren, brickMesh, particleSystem;
let heroScrollRotTween = null;
let targetRotX = 0, targetRotY = 0, currentRotX = 0, currentRotY = 0;
let trackingHero = true;
let heroInView = true;
const wrap = document.getElementById('three-wrap');

function createProceduralTexture() {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#eeeeee'; ctx.fillRect(0, 0, 1024, 1024);
  
  for (let i = 0; i < 120000; i++) {
    const opacity = Math.random() * 0.15;
    ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 1.5, 1.5);
  }
  
  for(let j=0; j<25; j++) {
    ctx.strokeStyle = 'rgba(0,0,0,0.06)'; ctx.lineWidth = Math.random() * 3 + 0.5;
    ctx.beginPath(); ctx.moveTo(Math.random()*1024, 0);
    ctx.bezierCurveTo(Math.random()*1024, Math.random()*1024, Math.random()*1024, Math.random()*1024, Math.random()*1024, 1024);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 1);
  return texture;
}

function initThreeEngine() {
  if (!wrap) return;
  scene = new THREE.Scene();
  cam = new THREE.PerspectiveCamera(36, wrap.clientWidth / wrap.clientHeight, 0.1, 100);
  cam.position.set(0, 0, 6.2);
  
  ren = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  ren.setSize(wrap.clientWidth, wrap.clientHeight);
  ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  wrap.appendChild(ren.domElement);

  const bumpTex = createProceduralTexture();
  const brickGeo = new THREE.BoxGeometry(2.3, 1.1, 0.72);
  const initialMat = EDITIONS[0].mat;
  
  const brickMaterial = new THREE.MeshStandardMaterial({
    color: initialMat.hex,
    roughness: initialMat.rough,
    metalness: initialMat.metal,
    bumpMap: bumpTex,
    bumpScale: 0.012,
    roughnessMap: bumpTex
  });

  brickMesh = new THREE.Mesh(brickGeo, brickMaterial);
  scene.add(brickMesh);

  scene.add(new THREE.AmbientLight(0xffffff, 0.65));
  const mainLight = new THREE.DirectionalLight(0xffffff, 1.5); mainLight.position.set(5, 5, 4); scene.add(mainLight);
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.8); rimLight.position.set(-5, 3, -2); scene.add(rimLight);

  const pCount = 60;
  const pGeo = new THREE.BufferGeometry();
  const pPositions = new Float32Array(pCount * 3);
  for(let i=0; i<pCount*3; i+=3) {
    pPositions[i] = (Math.random() - 0.5) * 8;
    pPositions[i+1] = (Math.random() - 0.5) * 6;
    pPositions[i+2] = (Math.random() - 0.5) * 4;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.035, color: EDITIONS[0].accent, transparent: true, opacity: 0.4 });
  particleSystem = new THREE.Points(pGeo, pMat);
  scene.add(particleSystem);

  (function frameRender() {
    requestAnimationFrame(frameRender);
    if (!heroInView) return;
    if (trackingHero && brickMesh) {
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;
      brickMesh.rotation.x = currentRotX;
      brickMesh.rotation.y = currentRotY;
      brickMesh.rotation.z = currentRotY * 0.15;
    }
    
    if(particleSystem) {
      const arr = particleSystem.geometry.attributes.position.array;
      for(let i=1; i<arr.length; i+=3) {
        arr[i] += 0.003;
        if(arr[i] > 3) arr[i] = -3;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.rotation.y += 0.001;
    }

    ren.render(scene, cam);
  })();
}

window.addEventListener('mousemove', e => {
  if (!trackingHero) return;
  targetRotY = ((e.clientX / window.innerWidth) - 0.5) * 1.1;
  targetRotX = ((e.clientY / window.innerHeight) - 0.5) * 0.65;
});

function transition3DBrick(ed) {
  if (!brickMesh) return;
  const m = ed.mat;
  gsap.to(brickMesh.material.color, { r: ((m.hex >> 16) & 0xff) / 255, g: ((m.hex >> 8) & 0xff) / 255, b: (m.hex & 0xff) / 255, duration: 0.8 });
  gsap.to(brickMesh.material, { roughness: m.rough, metalness: m.metal, duration: 0.8 });
  gsap.to(particleSystem.material.color, { r: ((ed.atmo >> 16) & 0xff) / 255, g: ((ed.atmo >> 8) & 0xff) / 255, b: (ed.atmo & 0xff) / 255, duration: 0.8 });
  gsap.to(brickMesh.rotation, { y: brickMesh.rotation.y + Math.PI * 0.5, duration: 0.6, ease: 'power2.out' });
}

// ═══════════════════════════════════════════════════════════
// LIGHT ACCENT CANVAS PARTICLES
// ═══════════════════════════════════════════════════════════
const aCanvas = document.getElementById('atmo-canvas');
const ax = aCanvas ? aCanvas.getContext('2d') : null;
let atmoParticles = [];
let atmoInView = true;

function resizeAtmoCanvas() { if (aCanvas) { aCanvas.width = aCanvas.offsetWidth; aCanvas.height = aCanvas.offsetHeight; } }
window.addEventListener('resize', resizeAtmoCanvas); resizeAtmoCanvas();

class AtmoParticle {
  constructor() { this.reset(); }
  reset() {
    if (!aCanvas) return;
    this.x = Math.random() * aCanvas.width;
    this.y = aCanvas.height + 20;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -(0.4 + Math.random() * 0.8);
    this.size = 1 + Math.random() * 3;
    this.life = 1;
    this.decay = 0.002 + Math.random() * 0.004;
  }
  update() { this.x += this.vx; this.y += this.vy; this.life -= this.decay; if (this.life <= 0) this.reset(); }
  draw() {
    if (!ax) return;
    ax.save(); ax.globalAlpha = this.life * 0.25;
    ax.fillStyle = EDITIONS[currentEdition].accent;
    ax.beginPath(); ax.arc(this.x, this.y, this.size, 0, Math.PI * 2); ax.fill(); ax.restore();
  }
}
if (aCanvas) { for (let i = 0; i < 40; i++) { const p = new AtmoParticle(); p.life = Math.random(); atmoParticles.push(p); } }
(function renderAtmo() {
  requestAnimationFrame(renderAtmo);
  if (!atmoInView) return;
  ax?.clearRect(0,0,aCanvas.width,aCanvas.height);
  atmoParticles.forEach(p=>{p.update(); p.draw();});
})();

// ═══════════════════════════════════════════════════════════
// NAVIGATION THEME UPDATE CONFIGURATION
// ═══════════════════════════════════════════════════════════
let activeSwitchSequence = false;
function switchEdition(idx) {
  if (activeSwitchSequence || idx === currentEdition) return;
  activeSwitchSequence = true;
  currentEdition = idx;
  const ed = EDITIONS[idx];

  applyGlobalColors(ed);
  transition3DBrick(ed);

  gsap.to('.edition-name, .edition-tag, .edition-eyebrow', { opacity: 0, y: 12, duration: 0.2, onComplete: () => {
    document.getElementById('stage-eyebrow').textContent = ed.eyebrow;
    document.getElementById('stage-name').textContent = ed.name;
    document.getElementById('stage-tag').textContent = ed.tag;
    gsap.to('.edition-name, .edition-tag, .edition-eyebrow', { opacity: 1, y: 0, duration: 0.4 });
  }});

  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  document.querySelectorAll('.ed-card').forEach((c, i) => c.classList.toggle('active-card', i === idx));

  updateSpotlightDOM(ed);
  resetLabWorkstationEngine();
  setTimeout(() => activeSwitchSequence = false, 600);
}

function updateSpotlightDOM(ed) {
  document.getElementById('sp-eyebrow').textContent = ed.eyebrow;
  document.getElementById('sp-eyebrow').style.color = ed.accent;
  document.getElementById('sp-name').textContent = 'BRÍK ' + ed.name;
  document.getElementById('sp-body').textContent = ed.desc;
  document.getElementById('badge-num').textContent = ed.units;
  document.getElementById('badge-num').style.color = ed.accent;

  const vitalsContainer = document.getElementById('sp-vitals');
  if (vitalsContainer) vitalsContainer.innerHTML = ed.vitals.map(v => `<div class="vital"><div class="vital-l">${v.l}</div><div class="vital-v">${v.v}</div></div>`).join('');

  const barsContainer = document.getElementById('sp-bars');
  if (barsContainer) {
    barsContainer.innerHTML = ed.bars.map(b => `
      <div class="sp-bar-row">
        <span class="sp-bar-label">${b.l}</span>
        <div class="sp-bar-track"><div class="sp-bar-fill" style="background:${ed.accent}" data-v="${b.v}"></div></div>
        <span class="sp-bar-val">${b.v}%</span>
      </div>`).join('');
  }
  setTimeout(() => { document.querySelectorAll('.sp-bar-fill').forEach(f => { f.style.width = f.dataset.v + '%'; }); }, 50);
}

// ═══════════════════════════════════════════════════════════
// ENHANCED LAB WORKSTATION ENGINE (3D INTERACTIVE MINIGAME)
// ═══════════════════════════════════════════════════════════
let lScene, lCam, lRen, lBrickMesh, lCoreMesh, debrSystem;
let labInView = false;
let gameStagePhase = 0, stageProgressArray = [0, 0, 0], absoluteScore = 0, dynamicCombo = 1, gameCompleteState = false;
let lastToastedCombo = 0;
let comboResetTimer = null;
const labCanvasElement = document.getElementById('lab-canvas-3d');

const GAME_INSTRUCTIONS = [
  'Click directly on the 3D brick to chisel mineral layers.',
  'Drag horizontally back and forth across the brick surface to micro polish.',
  'Hold down and rotate the brick to infuse the silicate fusion glaze.'
];

function initLab3DStage() {
  if(!labCanvasElement) return;
  const container = document.getElementById('lab-container-3d');
  
  lScene = new THREE.Scene();
  lScene.background = null; 
  
  lCam = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
  lCam.position.z = 4.5;

  lRen = new THREE.WebGLRenderer({ canvas: labCanvasElement, antialias: true, alpha: true });
  lRen.setSize(container.clientWidth, container.clientHeight);
  lRen.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geo = new THREE.BoxGeometry(1.8, 0.85, 0.55);
  const initialEd = EDITIONS[currentEdition];
  const mat = new THREE.MeshStandardMaterial({
    color: initialEd.mat.hex,
    roughness: 0.9,
    metalness: 0.05
  });
  lBrickMesh = new THREE.Mesh(geo, mat);

  const innerCoreGeo = new THREE.BoxGeometry(1.78, 0.04, 0.53);
  const innerCoreMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0 });
  lCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
  lBrickMesh.add(lCoreMesh);
  lScene.add(lBrickMesh);

  lScene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const lightA = new THREE.DirectionalLight(0xffffff, 1.2); lightA.position.set(3, 4, 3); lScene.add(lightA);

  const maxDebr = 40;
  const debrGeo = new THREE.BufferGeometry();
  const debrPos = new Float32Array(maxDebr * 3);
  const debrVelo = [];
  for(let i=0; i<maxDebr*3; i+=3) {
    debrPos[i] = 0; debrPos[i+1] = 0; debrPos[i+2] = 0;
    debrVelo.push(new THREE.Vector3(0,0,0));
  }
  debrGeo.setAttribute('position', new THREE.BufferAttribute(debrPos, 3));
  const debrMat = new THREE.PointsMaterial({ size: 0.06, color: 0x999999, transparent: true, opacity: 0 });
  debrSystem = new THREE.Points(debrGeo, debrMat);
  debrSystem.userData = { velo: debrVelo, activeCount: 0 };
  lScene.add(debrSystem);

  let pointerPressed = false;
  let prevX = 0;

  labCanvasElement.addEventListener('pointerdown', (e) => {
    if(gameCompleteState) return;
    pointerPressed = true;
    document.body.classList.add('is-dragging');
    prevX = e.clientX;
    if (labCanvasElement.setPointerCapture) labCanvasElement.setPointerCapture(e.pointerId);
    executeLabImpact(e.clientX, e.clientY);
  });

  labCanvasElement.addEventListener('pointermove', (e) => {
    if(!pointerPressed || gameCompleteState) {
      if(!pointerPressed && lBrickMesh) {
        const r = labCanvasElement.getBoundingClientRect();
        lBrickMesh.rotation.y = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
        lBrickMesh.rotation.x = ((e.clientY - r.top) / r.height - 0.5) * 0.3;
      }
      return;
    }

    if(gameStagePhase === 1) {
      const deltaX = Math.abs(e.clientX - prevX);
      if(deltaX > 4) {
        triggerGameProgress(deltaX * 0.18);
        emitImpactDebris(new THREE.Vector3((Math.random()-0.5)*1.2, (Math.random()-0.5)*0.6, 0.3), 2);
      }
    } else if(gameStagePhase === 2) {
      lBrickMesh.rotation.y += 0.03;
      triggerGameProgress(0.25);
      lCoreMesh.material.emissiveIntensity = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
    }
    prevX = e.clientX;
  });

  window.addEventListener('pointerup', () => {
    pointerPressed = false;
    document.body.classList.remove('is-dragging');
    if(lCoreMesh && gameStagePhase !== 2) lCoreMesh.material.emissiveIntensity = 0;
  });

  (function frameLab() {
    requestAnimationFrame(frameLab);
    if (!labInView) return;
    if(debrSystem && debrSystem.userData.activeCount > 0) {
      const arr = debrSystem.geometry.attributes.position.array;
      const vel = debrSystem.userData.velo;
      for(let i=0; i<maxDebr; i++) {
        const idx = i * 3;
        arr[idx] += vel[i].x;
        arr[idx+1] += vel[i].y;
        arr[idx+2] += vel[i].z;
        vel[i].y -= 0.0015;
      }
      debrSystem.geometry.attributes.position.needsUpdate = true;
    }
    lRen.render(lScene, lCam);
  })();
}

function executeLabImpact(clientX, clientY) {
  if(gameStagePhase !== 0) return;
  gsap.fromTo(lBrickMesh.scale, {x:0.95, y:0.95}, {x:1, y:1, duration:0.15, ease:'back.out(3)'});
  
  const clickVector = new THREE.Vector3(
    ((clientX - labCanvasElement.getBoundingClientRect().left) / labCanvasElement.clientWidth) * 2 - 1,
    -((clientY - labCanvasElement.getBoundingClientRect().top) / labCanvasElement.clientHeight) * 2 + 1,
    0.5
  );
  emitImpactDebris(clickVector, 6);
  triggerGameProgress(4.5);
}

function emitImpactDebris(originVec, count) {
  if(!debrSystem) return;
  const arr = debrSystem.geometry.attributes.position.array;
  const vel = debrSystem.userData.velo;
  
  debrSystem.material.color.setHex(EDITIONS[currentEdition].mat.hex);
  debrSystem.material.opacity = 0.8;
  
  for(let i=0; i<count; i++) {
    const pIdx = (Math.floor(Math.random() * 35)) * 3;
    arr[pIdx] = originVec.x * 1.5;
    arr[pIdx+1] = originVec.y * 0.8;
    arr[pIdx+2] = 0.3;
    
    vel[pIdx/3].set(
      (Math.random() - 0.5) * 0.04,
      (Math.random() * 0.04) + 0.01,
      (Math.random() - 0.5) * 0.04
    );
  }
  debrSystem.userData.activeCount = 40;
  debrSystem.geometry.attributes.position.needsUpdate = true;
}

function triggerGameProgress(amt) {
  stageProgressArray[gameStagePhase] = Math.min(stageProgressArray[gameStagePhase] + amt, 100);
  updateComboMultiplier();
  
  absoluteScore += Math.round(amt * dynamicCombo * 8);
  document.getElementById('h-score').textContent = absoluteScore.toLocaleString();
  setCircularArcProgress(stageProgressArray[gameStagePhase]);

  if(stageProgressArray[gameStagePhase] >= 100) advanceLabPhase();
}

function updateComboMultiplier() {
  dynamicCombo = Math.min(dynamicCombo + 1, 12);
  const comboContainer = document.getElementById('h-combo');
  const multiplierVal = Math.floor(dynamicCombo / 2 + 1);
  comboContainer.textContent = '×' + multiplierVal;
  comboContainer.style.color = EDITIONS[currentEdition].accent;

  if ([3, 5, 7].includes(multiplierVal) && multiplierVal !== lastToastedCombo) {
    lastToastedCombo = multiplierVal;
    spawnToast('✦ ×' + multiplierVal + ' Streak!');
  }

  clearTimeout(comboResetTimer);
  comboResetTimer = setTimeout(() => {
    dynamicCombo = 1;
    lastToastedCombo = 0;
    comboContainer.textContent = '×1';
    comboContainer.style.color = 'inherit';
  }, 1200);
}

function setCircularArcProgress(pct) {
  const circumference = 282.7;
  const strokeOffset = circumference - (pct / 100) * circumference;
  const arcFillElement = document.getElementById('arc-c');
  if (arcFillElement) {
    arcFillElement.style.strokeDashoffset = strokeOffset;
    arcFillElement.setAttribute('stroke', EDITIONS[currentEdition].accent);
  }
  document.getElementById('arc-p').textContent = Math.round(pct) + '%';
}

function advanceLabPhase() {
  if (gameStagePhase >= 2) {
    finishLabWorkflow();
    return;
  }
  gameStagePhase++;
  
  if(gameStagePhase === 1) {
    lBrickMesh.material.roughness = 0.45;
    lBrickMesh.material.needsUpdate = true;
    gsap.to(lBrickMesh.rotation, {x:0, y:Math.PI * 2, duration:0.6});
  } else if(gameStagePhase === 2) {
    lBrickMesh.material.metalness = 0.85;
    lBrickMesh.material.needsUpdate = true;
    lCoreMesh.material.color.setHex(EDITIONS[currentEdition].mat.hex);
    lCoreMesh.material.emissive.setHex(EDITIONS[currentEdition].mat.hex);
    lCoreMesh.material.needsUpdate = true;
  }

  document.querySelectorAll('.ptab').forEach((t, i) => {
    t.classList.toggle('active', i === gameStagePhase);
    t.classList.toggle('done', i < gameStagePhase);
  });
  
  document.getElementById('h-phase').textContent = ['I', 'II', 'III'][gameStagePhase];
  document.getElementById('lab-instr').textContent = GAME_INSTRUCTIONS[gameStagePhase];
  setCircularArcProgress(0);
}

function jumpToLabPhase(targetPhase) {
  gameStagePhase = targetPhase;
  document.querySelectorAll('.ptab').forEach((t, i) => {
    t.classList.toggle('active', i === gameStagePhase);
    t.classList.toggle('done', i < gameStagePhase);
  });
  document.getElementById('h-phase').textContent = ['I', 'II', 'III'][gameStagePhase];
  document.getElementById('lab-instr').textContent = GAME_INSTRUCTIONS[gameStagePhase];
  setCircularArcProgress(stageProgressArray[gameStagePhase]);
}

function resetLabWorkstationEngine() {
  gameStagePhase = 0;
  stageProgressArray = [0, 0, 0];
  gameCompleteState = false;
  document.getElementById('lab-payoff').classList.remove('open');
  document.querySelectorAll('.ptab').forEach((t, i) => {
    t.classList.toggle('active', i === 0);
    t.classList.remove('done');
  });
  document.getElementById('h-phase').textContent = 'I';
  document.getElementById('lab-instr').textContent = GAME_INSTRUCTIONS[0];
  setCircularArcProgress(0);

  const heatLabel = document.getElementById('h-heat');
  if (heatLabel) { heatLabel.textContent = 'STABLE'; heatLabel.style.color = ''; }

  if(lBrickMesh) {
    lBrickMesh.material.color.setHex(EDITIONS[currentEdition].mat.hex);
    lBrickMesh.material.roughness = 0.9;
    lBrickMesh.material.metalness = 0.05;
    lBrickMesh.material.needsUpdate = true;
    lCoreMesh.material.emissiveIntensity = 0;
    lBrickMesh.scale.set(1,1,1);
    lBrickMesh.rotation.set(0,0,0);
  }
}

function finishLabWorkflow() {
  gameCompleteState = true;
  document.querySelectorAll('.ptab').forEach(t => {
    t.classList.remove('active');
    t.classList.add('done');
  });
  document.getElementById('lab-payoff').classList.add('open');
  document.getElementById('lab-instr').textContent = '✦ Matrix Synthesis Complete. Structural token unlocked.';
  document.getElementById('h-heat').textContent = 'OPTIMAL';
  document.getElementById('h-heat').style.color = EDITIONS[currentEdition].accent;
  spawnToast('✦ Forging Complete');
  fireConfetti();
}

// ═══════════════════════════════════════════════════════════
// CORE LAYOUT LIFECYCLE INITIALIZER
// ═══════════════════════════════════════════════════════════
function buildLayoutNodes() {
  const dotsWrapper = document.getElementById('edition-dots');
  const standardGrid = document.getElementById('editions-grid');
  if (!dotsWrapper || !standardGrid) return;

  EDITIONS.forEach((ed, i) => {
    const dotNode = document.createElement('div'); 
    dotNode.className = 'dot' + (i === 0 ? ' active' : ''); 
    dotNode.addEventListener('click', () => switchEdition(i)); 
    dotsWrapper.appendChild(dotNode);

    const floatingDuration = 5 + (i * 0.6);
    const floatingDelay = i * 0.4;

    const cardNode = document.createElement('div'); 
    cardNode.className = 'ed-card' + (i === 0 ? ' active-card' : ''); 
    cardNode.style.cssText = `--c:${ed.accent}; --float-dur:${floatingDuration}s; --float-delay:${floatingDelay}s;`;
    cardNode.innerHTML = `
      <span class="ed-icon">${ed.icon}</span> 
      <div class="ed-name">BRÍK ${ed.name}</div> 
      <div class="ed-sub">${ed.sub}</div>
      <p class="ed-desc">${ed.desc.substring(0, 130)}…</p>
      ${ed.stats.map(s => `<div class="ed-stat"><span class="st-l">${s.l}</span><span class="st-r">${s.v}</span></div>`).join('')}
      <a class="ed-cta" href="#reserve">Secure Your BRÍK</a>`;
      
    cardNode.addEventListener('click', (e) => { 
      if(e.target.tagName !== 'A') {
        switchEdition(i); 
        document.getElementById('stage').scrollIntoView({ behavior: 'smooth' }); 
      }
    });
    standardGrid.appendChild(cardNode);
  });

  document.getElementById('arr-l').addEventListener('click', () => switchEdition((currentEdition - 1 + EDITIONS.length) % EDITIONS.length));
  document.getElementById('arr-r').addEventListener('click', () => switchEdition((currentEdition + 1) % EDITIONS.length));

  document.querySelectorAll('.ptab').forEach(tab => {
    tab.addEventListener('click', function() {
      const targetedPhase = parseInt(this.dataset.ph);
      if(targetedPhase < gameStagePhase) {
        jumpToLabPhase(targetedPhase);
      }
    });
  });
}

function handleReserve() {
  const nameVal = document.getElementById('f-name').value.trim();
  const emailVal = document.getElementById('f-email').value.trim();
  if (!nameVal || !emailVal) return;
  const sButton = document.getElementById('f-submit');
  sButton.textContent = '✦ Reservation Confirmed'; 
  sButton.style.background = 'transparent'; 
  sButton.style.border = '1px solid ' + EDITIONS[currentEdition].accent; 
  sButton.style.color = EDITIONS[currentEdition].accent;
  sButton.onclick = null;
  lastReservedName = nameVal;
  spawnToast('✦ BRÍK Secured');
  fireConfetti();
  unlockAchievement('reserve');
  setTimeout(() => showUnboxOverlay(EDITIONS[currentEdition], nameVal), 900);
}

const revealObserver = new IntersectionObserver(entries => { 
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }); 
}, { threshold: 0.1 });

// Throttles a handler to run at most once per animation frame, coalescing
// rapid-fire native events (scroll/resize) without changing the final result.
function rafThrottle(fn) {
  let ticking = false;
  return function (...args) {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { fn.apply(this, args); ticking = false; });
  };
}

// Pause the hero/lab/atmo render loops while their canvases are scrolled
// out of view — they're already visually hidden in those states (covered
// by later opaque sections, or off-screen), so this only skips wasted
// per-frame GPU/CPU work and never changes what's rendered when visible.
function initRenderVisibilityGates() {
  const stageEl = document.getElementById('stage');
  if (stageEl) {
    new IntersectionObserver(([entry]) => { atmoInView = entry.isIntersecting; }, { threshold: 0 }).observe(stageEl);
  }
  const collectionEl = document.getElementById('collection');
  if (collectionEl) {
    new IntersectionObserver(([entry]) => { heroInView = !entry.isIntersecting; }, { threshold: 0 }).observe(collectionEl);
  }
  const labEl = document.getElementById('lab');
  if (labEl) {
    new IntersectionObserver(([entry]) => { labInView = entry.isIntersecting; }, { threshold: 0 }).observe(labEl);
  }
}

function initScrollRig() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({ 
    trigger: '#spotlight', 
    start: 'top 60%', 
    onEnter: () => trackingHero = false, 
    onLeaveBack: () => trackingHero = true 
  });
  
  if (brickMesh) {
    heroScrollRotTween = gsap.to(brickMesh.rotation, { 
      y: Math.PI * 2, 
      x: 0.4, 
      ease: 'none', 
      scrollTrigger: { trigger: '#stage', start: 'top top', endTrigger: '#collection', end: 'top top', scrub: 1.2 } 
    });
  }

  document.querySelectorAll('.nav-lnk').forEach(lnk => {
    lnk.addEventListener('click', function(e) {
      e.preventDefault();
      const element = document.querySelector(this.getAttribute('href'));
      if(element) element.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  buildLayoutNodes();
  initThreeEngine();
  initLab3DStage();
  initUnboxScene();
  initRenderVisibilityGates();
  setTimeout(initScrollRig, 150);
  switchEdition(0);
  hookInteractiveElements();
  document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));
  initPreloader();
  initScrollProgressAndSpy();
  initMagneticElements();
  initCardTilt();
  initKeyboardNav();
  initScrollCue();
  initInspectMode();
  initForgeTempPreview();
  initFounderEasterEgg();
  initUnboxAndCertificate();

  window.addEventListener('resize', rafThrottle(() => {
    if (cam && ren && wrap) {
      cam.aspect = wrap.clientWidth / wrap.clientHeight; cam.updateProjectionMatrix();
      ren.setSize(wrap.clientWidth, wrap.clientHeight);
      const labContainer = document.getElementById('lab-container-3d');
      lCam.aspect = labContainer.clientWidth / labContainer.clientHeight; lCam.updateProjectionMatrix();
      lRen.setSize(labContainer.clientWidth, labContainer.clientHeight);
    }
    const confettiCanvas = document.getElementById('confetti-canvas');
    if (confettiCanvas) { confettiCanvas.width = window.innerWidth; confettiCanvas.height = window.innerHeight; }
    resizeUnboxRenderer();
  }));
});

window.addEventListener('pagehide', () => {
  [brickMesh, particleSystem, debrSystem, lBrickMesh, lCoreMesh, xrayCoreMesh, unboxBrickMesh].forEach(obj => {
    if (!obj) return;
    obj.geometry?.dispose();
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    mats.forEach(m => {
      if (!m) return;
      m.map?.dispose();
      m.bumpMap?.dispose();
      m.roughnessMap?.dispose();
      m.dispose();
    });
  });
  ren?.dispose();
  lRen?.dispose();
  unboxRen?.dispose();
});
// ═══════════════════════════════════════════════════════════
// UNBOXING 3D BRICK PREVIEW (mirrors the hero/lab brick, scaled down)
// ═══════════════════════════════════════════════════════════
let unboxScene, unboxCam, unboxRen, unboxBrickMesh;
let unboxInView = false;

function initUnboxScene() {
  const canvas = document.getElementById('unbox-canvas-3d');
  if (!canvas || typeof THREE === 'undefined') return;

  unboxScene = new THREE.Scene();
  unboxCam = new THREE.PerspectiveCamera(35, 1, 0.1, 20);
  unboxCam.position.set(0, 0, 4.2);

  unboxRen = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  unboxRen.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geo = new THREE.BoxGeometry(1.7, 0.8, 0.52);
  const initialMat = EDITIONS[currentEdition].mat;
  const mat = new THREE.MeshStandardMaterial({
    color: initialMat.hex,
    roughness: initialMat.rough,
    metalness: initialMat.metal
  });
  unboxBrickMesh = new THREE.Mesh(geo, mat);
  unboxBrickMesh.rotation.set(-0.3, 0.6, 0);
  unboxScene.add(unboxBrickMesh);

  unboxScene.add(new THREE.AmbientLight(0xffffff, 0.75));
  const unboxKeyLight = new THREE.DirectionalLight(0xffffff, 1.3); unboxKeyLight.position.set(3, 4, 3); unboxScene.add(unboxKeyLight);
  const unboxRimLight = new THREE.DirectionalLight(0xffffff, 0.6); unboxRimLight.position.set(-3, 2, -2); unboxScene.add(unboxRimLight);

  (function frameUnbox(t) {
    requestAnimationFrame(frameUnbox);
    if (!unboxInView || !unboxBrickMesh) return;
    const time = (t || 0) * 0.001;
    unboxBrickMesh.position.y = Math.sin(time * 1.4) * 0.06;
    unboxBrickMesh.rotation.y += 0.006;
    unboxRen.render(unboxScene, unboxCam);
  })();
}

function resizeUnboxRenderer() {
  const canvas = document.getElementById('unbox-canvas-3d');
  if (!canvas || !unboxRen || !unboxCam) return;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (w <= 0 || h <= 0) return;
  unboxCam.aspect = w / h;
  unboxCam.updateProjectionMatrix();
  unboxRen.setSize(w, h);
}

// ═══════════════════════════════════════════════════════════
// PRELOADER
// ═══════════════════════════════════════════════════════════
function initPreloader() {
  const pre = document.getElementById('preloader');
  if (!pre) return;
  const fill = pre.querySelector('.pre-fill');
  const pct = pre.querySelector('.pre-pct');
  let p = 0;
  let pageLoaded = false;
  let finished = false;

  function setProgress(val) {
    p = val;
    fill.style.width = p + '%';
    pct.textContent = Math.round(p) + '%';
  }

  function finish() {
    if (finished) return;
    finished = true;
    clearInterval(tick);
    setProgress(100);
    setTimeout(() => { pre.classList.add('done'); playHeroCinematic(); }, 300);
  }

  // Single source of truth: the bar eases toward 90% as a visual placeholder
  // while real assets load, then only jumps to 100% and completes once the
  // window 'load' event confirms the app is actually ready. The tick rate
  // (260ms) is kept slower than the fill's own CSS transition (250ms) so the
  // bar doesn't restart its transition mid-animation and stutter.
  const tick = setInterval(() => {
    const ceiling = pageLoaded ? 100 : 90;
    setProgress(Math.min(p + Math.random() * 14, ceiling));
    if (pageLoaded && p >= 100) finish();
  }, 260);

  window.addEventListener('load', () => { pageLoaded = true; });

  // Safety net: if 'load' is unusually slow or never fires, don't trap the
  // user behind the preloader forever.
  setTimeout(() => { pageLoaded = true; }, 4000);
}

// ═══════════════════════════════════════════════════════════
// SCROLL PROGRESS BAR + SCROLLSPY NAVIGATION
// ═══════════════════════════════════════════════════════════
function initScrollProgressAndSpy() {
  const fillBar = document.getElementById('scroll-progress-fill');
  const sections = ['stage', 'spotlight', 'lab', 'collection', 'reserve'].map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll('.nav-lnk'));

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (fillBar) {
      fillBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
      fillBar.style.backgroundColor = EDITIONS[currentEdition].accent;
    }

    let activeId = sections[0]?.id;
    for (const sec of sections) {
      if (scrollTop + window.innerHeight * 0.4 >= sec.offsetTop) activeId = sec.id;
    }
    navLinks.forEach(l => l.classList.toggle('active-link', l.getAttribute('href') === '#' + activeId));
  }
  window.addEventListener('scroll', rafThrottle(onScroll), { passive: true });
  onScroll();
}

// ═══════════════════════════════════════════════════════════
// SCROLL CUE FADE
// ═══════════════════════════════════════════════════════════
function initScrollCue() {
  const cue = document.getElementById('scroll-cue');
  if (!cue) return;
  window.addEventListener('scroll', rafThrottle(() => {
    cue.classList.toggle('hide', window.scrollY > 80);
  }), { passive: true });
  cue.addEventListener('click', () => document.getElementById('spotlight').scrollIntoView({ behavior: 'smooth' }));
}

// ═══════════════════════════════════════════════════════════
// MAGNETIC BUTTON ATTRACTION
// ═══════════════════════════════════════════════════════════
function initMagneticElements() {
  const targets = document.querySelectorAll('.arr, .claim-cta, .submit-btn, .logo, .ed-cta');
  targets.forEach(el => {
    el.classList.add('magnetic');
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const relX = (e.clientX - r.left - r.width / 2) * 0.35;
      const relY = (e.clientY - r.top - r.height / 2) * 0.35;
      gsap.to(el, { x: relX, y: relY, duration: 0.3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

// ═══════════════════════════════════════════════════════════
// 3D TILT ON COLLECTION CARDS
// ═══════════════════════════════════════════════════════════
function initCardTilt() {
  document.querySelectorAll('.ed-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, { rotateY: px * 10, rotateX: -py * 10, y: -12, scale: 1.02, duration: 0.4, ease: 'power2.out', overwrite: true });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' });
    });
  });
}

// ═══════════════════════════════════════════════════════════
// KEYBOARD NAVIGATION FOR EDITIONS
// ═══════════════════════════════════════════════════════════
function initKeyboardNav() {
  window.addEventListener('keydown', (e) => {
    if (window.scrollY > window.innerHeight * 1.2) return;
    if (e.key === 'ArrowRight') switchEdition((currentEdition + 1) % EDITIONS.length);
    if (e.key === 'ArrowLeft') switchEdition((currentEdition - 1 + EDITIONS.length) % EDITIONS.length);
  });
}

// ═══════════════════════════════════════════════════════════
// ACHIEVEMENT TOAST SYSTEM
// ═══════════════════════════════════════════════════════════
function spawnToast(msg) {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;
  const chip = document.createElement('div');
  chip.className = 'toast-chip';
  chip.textContent = msg;
  chip.style.color = EDITIONS[currentEdition].accent;
  stack.appendChild(chip);
  gsap.to(chip, { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: 'back.out(2)' });
  gsap.to(chip, { opacity: 0, x: 30, duration: 0.4, delay: 2.2, onComplete: () => chip.remove() });
}

// ═══════════════════════════════════════════════════════════
// CONFETTI BURST (celebratory micro-interaction)
// ═══════════════════════════════════════════════════════════
function fireConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const accent = EDITIONS[currentEdition].accent;
  const colors = [accent, '#111115', '#ffffff'];
  const pieces = Array.from({ length: 70 }, () => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    vx: (Math.random() - 0.5) * 18,
    vy: (Math.random() - 1.4) * 18,
    size: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    life: 1
  }));

  (function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.vy += 0.4; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 0.012;
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    if (alive) requestAnimationFrame(animateConfetti);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })();
}
// ═══════════════════════════════════════════════════════════
// 1. CINEMATIC HERO REVEAL
// ═══════════════════════════════════════════════════════════
let heroCinematicPlayed = false;
function playHeroCinematic() {
  if (heroCinematicPlayed) return;
  heroCinematicPlayed = true;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (brickMesh) {
    brickMesh.scale.set(0.001, 0.001, 0.001);
    tl.to(brickMesh.scale, { x: 1, y: 1, z: 1, duration: 1.4, ease: 'back.out(1.4)' }, 0);
  }
  tl.fromTo('#stage-eyebrow', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.25)
    .fromTo('#stage-name', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, 0.4)
    .fromTo('#stage-tag', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
    .fromTo('.nav-ctrls', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
    .fromTo('header', { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
    .fromTo('#scroll-cue', { opacity: 0 }, { opacity: 0.5, duration: 0.6 }, 1.2);
}

// ═══════════════════════════════════════════════════════════
// 2. INSPECT MODE + X-RAY REVEAL
// ═══════════════════════════════════════════════════════════
let inspecting = false, xrayOn = false;
let xrayCoreMesh = null;
let inspectDragging = false, inspectLastX = 0, inspectLastY = 0;
let inspectRotY = 0, inspectRotX = 0;

function buildXrayCore() {
  if (xrayCoreMesh || !brickMesh) return;
  const geo = new THREE.BoxGeometry(1.7, 0.78, 0.5);
  const mat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, emissive: 0xD4AF37, emissiveIntensity: 0.4, metalness: 0.9, roughness: 0.15, transparent: true, opacity: 0 });
  xrayCoreMesh = new THREE.Mesh(geo, mat);
  brickMesh.add(xrayCoreMesh);
}

function initInspectMode() {
  const toggleBtn = document.getElementById('inspect-toggle');
  const exitBtn = document.getElementById('inspect-exit');
  const xrayBtn = document.getElementById('xray-toggle');
  if (!toggleBtn) return;
  buildXrayCore();

  function enterInspect() {
    inspecting = true; trackingHero = false;
    document.body.classList.add('inspecting');
    if (heroScrollRotTween && heroScrollRotTween.scrollTrigger) heroScrollRotTween.scrollTrigger.disable(false);
    inspectRotY = brickMesh.rotation.y; inspectRotX = brickMesh.rotation.x;
    gsap.to(cam.position, { z: 4.2, duration: 0.9, ease: 'power2.inOut' });
    unlockAchievement('inspect');
  }
  function exitInspect() {
    inspecting = false; trackingHero = true; xrayOn = false;
    document.body.classList.remove('inspecting');
    if (heroScrollRotTween && heroScrollRotTween.scrollTrigger) heroScrollRotTween.scrollTrigger.enable(false, false);
    xrayBtn.classList.remove('active');
    if (xrayCoreMesh) gsap.to(xrayCoreMesh.material, { opacity: 0, duration: 0.4 });
    if (brickMesh) gsap.to(brickMesh.material, { opacity: 1, duration: 0.4, onComplete: () => { brickMesh.material.depthWrite = true; } });
    gsap.to(cam.position, { z: 6.2, duration: 0.9, ease: 'power2.inOut' });
  }

  toggleBtn.addEventListener('click', enterInspect);
  exitBtn.addEventListener('click', exitInspect);

  xrayBtn.addEventListener('click', () => {
    xrayOn = !xrayOn;
    xrayBtn.classList.toggle('active', xrayOn);
    buildXrayCore();
    if (xrayOn) {
      brickMesh.material.transparent = true;
      brickMesh.material.depthWrite = false;
      brickMesh.renderOrder = 1;
      xrayCoreMesh.renderOrder = 0;
      gsap.to(brickMesh.material, { opacity: 0.25, duration: 0.6 });
      gsap.to(xrayCoreMesh.material, { opacity: 0.95, duration: 0.6 });
      unlockAchievement('xray');
    } else {
      gsap.to(brickMesh.material, { opacity: 1, duration: 0.6, onComplete: () => { brickMesh.material.depthWrite = true; } });
      gsap.to(xrayCoreMesh.material, { opacity: 0, duration: 0.6 });
    }
  });

  const wrapEl = document.getElementById('three-wrap');
  wrapEl.addEventListener('pointerdown', (e) => {
    if (!inspecting) return;
    inspectDragging = true; inspectLastX = e.clientX; inspectLastY = e.clientY;
    if (wrapEl.setPointerCapture) wrapEl.setPointerCapture(e.pointerId);
  });
  window.addEventListener('pointermove', (e) => {
    if (!inspecting || !inspectDragging || !brickMesh) return;
    inspectRotY += (e.clientX - inspectLastX) * 0.008;
    inspectRotX += (e.clientY - inspectLastY) * 0.008;
    inspectLastX = e.clientX; inspectLastY = e.clientY;
    brickMesh.rotation.y = inspectRotY;
    brickMesh.rotation.x = inspectRotX;
  });
  window.addEventListener('pointerup', () => inspectDragging = false);
}

// ═══════════════════════════════════════════════════════════
// 3. FORGE TEMPERATURE PREVIEW
// ═══════════════════════════════════════════════════════════
function initForgeTempPreview() {
  const slider = document.getElementById('forge-temp');
  const readout = document.getElementById('temp-readout');
  if (!slider) return;
  slider.addEventListener('input', () => {
    const val = parseInt(slider.value, 10);
    readout.textContent = val + '°C';
    const heatFrac = (val - 1000) / (1650 - 1000);
    if (lBrickMesh) {
      lBrickMesh.material.emissive.setRGB(heatFrac, heatFrac * 0.25, 0);
      lBrickMesh.material.emissiveIntensity = heatFrac * 0.7;
      lBrickMesh.material.needsUpdate = true;
    }
    const heatLabel = document.getElementById('h-heat');
    if (heatLabel && gameStagePhase === 0 && !gameCompleteState) {
      heatLabel.textContent = val > 1450 ? 'CRITICAL' : val > 1250 ? 'HIGH' : 'STABLE';
      heatLabel.style.color = val > 1450 ? '#D34100' : '';
    }
    if (val >= 1640) unlockAchievement('maxheat');
  });
}

// ═══════════════════════════════════════════════════════════
// 4. ACHIEVEMENT SYSTEM + FOUNDER MODE EASTER EGG
// ═══════════════════════════════════════════════════════════
const ACHIEVEMENTS = {
  inspect: '✦ Achievement: Inspector Unlocked',
  xray: '✦ Achievement: X-Ray Vision',
  maxheat: '✦ Achievement: Pushed The Kiln',
  forge: '✦ Achievement: Master Forger',
  reserve: '✦ Achievement: Founding Reserve',
  certificate: '✦ Achievement: Proof of Ownership',
  founder: '👑 FOUNDER MODE UNLOCKED'
};
function unlockAchievement(id) {
  const key = 'brik_ach_' + id;
  try { if (localStorage.getItem(key)) return; localStorage.setItem(key, '1'); } catch (e) {}
  spawnToast(ACHIEVEMENTS[id] || '✦ Achievement Unlocked');
}

function initFounderEasterEgg() {
  const logo = document.getElementById('logo-trigger');
  if (!logo) return;
  let clicks = 0, resetTimer = null;
  try { if (localStorage.getItem('brik_founder') === '1') document.body.classList.add('founder-mode'); } catch (e) {}

  logo.addEventListener('click', (e) => {
    e.preventDefault();
    clicks++;
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => clicks = 0, 1800);
    if (clicks >= 5) {
      clicks = 0;
      const enabling = !document.body.classList.contains('founder-mode');
      document.body.classList.toggle('founder-mode', enabling);
      applyGlobalColors(EDITIONS[currentEdition]);
      try { localStorage.setItem('brik_founder', enabling ? '1' : '0'); } catch (err) {}
      if (enabling) { unlockAchievement('founder'); fireConfetti(); }
    }
  });
}

// hook combo + lab completion into achievements (non-invasive wrap)
const _origFinishLabWorkflow = finishLabWorkflow;
finishLabWorkflow = function () { _origFinishLabWorkflow(); unlockAchievement('forge'); };

// ═══════════════════════════════════════════════════════════
// 5 & 6. LUXURY UNBOXING + OWNERSHIP CERTIFICATE
// ═══════════════════════════════════════════════════════════
let lastReservedName = '';

function initUnboxAndCertificate() {
  document.getElementById('unbox-trigger')?.addEventListener('click', runUnboxAnimation);
  document.getElementById('unbox-close')?.addEventListener('click', () => {
    document.getElementById('unbox-overlay').classList.remove('show');
    unboxInView = false;
  });
  document.getElementById('unbox-cert-btn')?.addEventListener('click', () => {
    document.getElementById('unbox-overlay').classList.remove('show');
    unboxInView = false;
    openCertificateModal();
  });
  document.getElementById('cert-close')?.addEventListener('click', () => {
    document.getElementById('cert-modal').classList.remove('show');
  });
  document.getElementById('cert-download')?.addEventListener('click', downloadCertificate);
}

function runUnboxAnimation() {
  const lid = document.querySelector('.unbox-lid');
  const product = document.querySelector('.unbox-product');
  const trigger = document.getElementById('unbox-trigger');
  const certBtn = document.getElementById('unbox-cert-btn');
  trigger.style.display = 'none';
  const tl = gsap.timeline();
  tl.to(lid, { rotateX: -110, y: -40, duration: 0.7, ease: 'power3.inOut' })
    .to(product, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.8)' }, '-=0.2')
    .call(() => { fireConfetti(); spawnToast('✦ BRÍK Unboxed'); certBtn.style.display = 'inline-block'; });
}

function showUnboxOverlay(ed, name) {
  document.getElementById('unbox-title').textContent = `Your BRÍK ${ed.name} Is Forged`;
  document.querySelector('.unbox-lid').removeAttribute('style');
  document.querySelector('.unbox-product').removeAttribute('style');
  document.getElementById('unbox-trigger').style.display = 'inline-block';
  document.getElementById('unbox-cert-btn').style.display = 'none';
  document.getElementById('unbox-overlay').classList.add('show');
  gsap.fromTo('.unbox-stage', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 });

  if (unboxBrickMesh) {
    unboxBrickMesh.material.color.setHex(ed.mat.hex);
    unboxBrickMesh.material.roughness = ed.mat.rough;
    unboxBrickMesh.material.metalness = ed.mat.metal;
    unboxBrickMesh.material.needsUpdate = true;
    unboxBrickMesh.rotation.set(-0.3, 0.6, 0);
    unboxBrickMesh.position.y = 0;
  }
  unboxInView = true;
  resizeUnboxRenderer();
}

function openCertificateModal() {
  drawCertificate(EDITIONS[currentEdition], lastReservedName || 'Valued Collector');
  document.getElementById('cert-modal').classList.add('show');
  unlockAchievement('certificate');
}

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16), g = parseInt(h.substring(2, 4), 16), b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function drawCertificate(ed, name) {
  const canvas = document.getElementById('cert-canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const ink = '#17130f';
  const muted = (a) => `rgba(23,19,15,${a})`;

  // Premium ivory paper base
  ctx.fillStyle = '#FAF6EE';
  ctx.fillRect(0, 0, w, h);

  // Soft vignette for depth / lighting
  const vignette = ctx.createRadialGradient(w / 2, h / 2, h * 0.15, w / 2, h / 2, h * 0.75);
  vignette.addColorStop(0, 'rgba(0,0,0,0)');
  vignette.addColorStop(1, 'rgba(0,0,0,0.05)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, w, h);

  // Faint rotated brand watermark
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate(-12 * Math.PI / 180);
  ctx.textAlign = 'center';
  ctx.fillStyle = hexToRgba(ed.accent, 0.05);
  ctx.font = '900 220px Georgia, serif';
  ctx.fillText('BRÍK', 0, 70);
  ctx.restore();

  // Outer accent frame + inner hairline
  ctx.strokeStyle = ed.accent; ctx.lineWidth = 2; ctx.strokeRect(30, 30, w - 60, h - 60);
  ctx.strokeStyle = muted(0.12); ctx.lineWidth = 1; ctx.strokeRect(46, 46, w - 92, h - 92);

  // Corner ornament ticks
  ctx.strokeStyle = ed.accent; ctx.lineWidth = 1.5;
  const tick = 22, m = 46;
  [[m, m, 1, 1], [w - m, m, -1, 1], [m, h - m, 1, -1], [w - m, h - m, -1, -1]].forEach(([cx, cy, dx, dy]) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy + tick * dy); ctx.lineTo(cx, cy);
    ctx.lineTo(cx + tick * dx, cy);
    ctx.stroke();
  });

  ctx.textAlign = 'center';

  // Eyebrow label
  ctx.fillStyle = ed.accent;
  ctx.font = '700 13px Inter, sans-serif';
  if ('letterSpacing' in ctx) ctx.letterSpacing = '3px';
  ctx.fillText('CERTIFICATE OF OWNERSHIP', w / 2, 96);
  if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';

  // Edition emblem seal
  const sealY = 150;
  ctx.beginPath(); ctx.arc(w / 2, sealY, 36, 0, Math.PI * 2);
  ctx.fillStyle = hexToRgba(ed.accent, 0.08); ctx.fill();
  ctx.lineWidth = 1.5; ctx.strokeStyle = ed.accent; ctx.stroke();
  ctx.font = '34px serif';
  ctx.fillStyle = ink;
  ctx.fillText(ed.icon, w / 2, sealY + 12);

  // Title
  ctx.fillStyle = ink;
  ctx.font = '700 48px Georgia, serif';
  ctx.fillText('BRÍK ' + ed.name.toUpperCase(), w / 2, 244);

  ctx.font = '600 15px Inter, sans-serif';
  ctx.fillStyle = muted(0.45);
  ctx.fillText(ed.sub.toUpperCase(), w / 2, 274);

  // Ornamental divider
  const divY = 312;
  ctx.strokeStyle = ed.accent; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(150, divY); ctx.lineTo(430, divY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(570, divY); ctx.lineTo(850, divY); ctx.stroke();
  ctx.save(); ctx.translate(w / 2, divY); ctx.rotate(Math.PI / 4);
  ctx.fillStyle = ed.accent; ctx.fillRect(-5, -5, 10, 10); ctx.restore();

  ctx.font = 'italic 400 16px Georgia, serif';
  ctx.fillStyle = muted(0.5);
  ctx.fillText('This certifies that', w / 2, 358);

  ctx.font = '700 40px Georgia, serif';
  ctx.fillStyle = ink;
  ctx.fillText(name, w / 2, 412);

  ctx.font = 'italic 400 16px Georgia, serif';
  ctx.fillStyle = muted(0.5);
  ctx.fillText('holds a confirmed Phase I allocation of structural elemental architecture.', w / 2, 452);

  // Hairline above footer
  ctx.strokeStyle = muted(0.1); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(110, 488); ctx.lineTo(890, 488); ctx.stroke();

  const serial = 'BRK-' + ed.id.slice(0, 3).toUpperCase() + '-' + Math.floor(100000 + Math.random() * 899999);
  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Dashed ticket-stub divider
  ctx.save();
  ctx.strokeStyle = hexToRgba(ed.accent, 0.4); ctx.lineWidth = 1; ctx.setLineDash([4, 5]);
  ctx.beginPath(); ctx.moveTo(w / 2, 506); ctx.lineTo(w / 2, 572); ctx.stroke();
  ctx.restore();

  ctx.textAlign = 'left';
  ctx.font = '700 12px Inter, sans-serif';
  ctx.fillStyle = ed.accent;
  if ('letterSpacing' in ctx) ctx.letterSpacing = '2px';
  ctx.fillText('SERIAL', 150, 526);
  ctx.textAlign = 'right';
  ctx.fillText('ISSUED', w - 150, 526);
  if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';

  ctx.fillStyle = ink; ctx.font = '600 19px Georgia, serif';
  ctx.textAlign = 'left'; ctx.fillText(serial, 150, 554);
  ctx.textAlign = 'right'; ctx.fillText(dateStr, w - 150, 554);

  ctx.textAlign = 'center';
  ctx.font = '700 12px Inter, sans-serif';
  ctx.fillStyle = muted(0.4);
  if ('letterSpacing' in ctx) ctx.letterSpacing = '1.5px';
  ctx.fillText('BRÍK ARCHITECTURAL SYSTEMS ENGINE — PHASE I PRODUCTION', w / 2, h - 48);
  if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
}

function downloadCertificate() {
  const canvas = document.getElementById('cert-canvas');
  const link = document.createElement('a');
  link.download = 'BRIK-Certificate-of-Ownership.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
