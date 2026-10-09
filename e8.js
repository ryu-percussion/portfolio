// E8 Simulation / Sonification (p5.js)
// index.html では #e8-sketch の中に直接描画。e8.html 単体ではページ全体に描画。
let roots = [], edges = [], sliders = [], valDisplays = [], planePairs = [];
let P_current = [[], []], P_init = [[], []];
let pointSizeSlider, lineOpacitySlider, radarSpeedSlider;
let isAnimating = false, targetAngles = [];
let radarAngle = 0, prevRadarAngle = 0, audioCtx = null, masterCompressor = null, activeHits = [];
let e8Host = null;

function hostWidth() {
  return e8Host === document.body ? windowWidth : Math.max(300, e8Host.clientWidth);
}

function setup() {
  e8Host = document.getElementById('e8-sketch') || document.body;
  let canvas = createCanvas(hostWidth(), 500);
  canvas.parent(e8Host);
  generateE8System();
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 8; j++) { planePairs.push([i, j]); targetAngles.push(0); }
  }
  initProjectionMatrices();
  setupUI();
  // 画面外では描画を止めて負荷を下げる
  if (e8Host !== document.body && 'IntersectionObserver' in window) {
    new IntersectionObserver(es => { es[0].isIntersecting ? loop() : noLoop(); }, { rootMargin: '150px' }).observe(e8Host);
  }
}

function draw() {
  background(0);

  if (isAnimating) {
    for (let i = 0; i < 28; i++) {
      let targetVal = targetAngles[i];
      let nextVal = lerp(sliders[i].value(), targetVal, 0.002);
      sliders[i].value(nextVal);
      valDisplays[i].html(`${nextVal.toFixed(1)}°`);
      if (abs(nextVal - targetVal) < 1.0) targetAngles[i] = random(0, 360);
    }
  }

  translate(width / 2, height / 2);

  let radarDelta = 0;
  if (audioCtx && audioCtx.state === 'running') {
    prevRadarAngle = radarAngle;
    radarDelta = radarSpeedSlider.value();
    radarAngle = (radarAngle + radarDelta) % TWO_PI;
    stroke('rgba(0, 255, 255, 0.6)');
    strokeWeight(1.5);
    line(0, 0, cos(radarAngle) * 300, sin(radarAngle) * 300);
  }

  let angles = sliders.map(s => radians(s.value()));
  let projectedPoints = [];
  for (let i = 0; i < roots.length; i++) {
    let rv = [...roots[i]];
    for (let p = 0; p < planePairs.length; p++) {
      if (angles[p] !== 0) rv = rotate8D(rv, planePairs[p][0], planePairs[p][1], angles[p]);
    }
    let x = dotProduct(P_current[0], rv) * 100;
    let y = dotProduct(P_current[1], rv) * 100;
    let r = sqrt(x * x + y * y);
    let theta = (atan2(y, x) + TWO_PI) % TWO_PI;
    projectedPoints.push({ x, y, r, theta, vector: rv });
  }

  stroke(0, 240, 255, lineOpacitySlider.value() * 255);
  strokeWeight(0.25);
  beginShape(LINES);
  for (let i = 0; i < edges.length; i++) {
    let p1 = projectedPoints[edges[i].v1], p2 = projectedPoints[edges[i].v2];
    vertex(p1.x, p1.y);
    vertex(p2.x, p2.y);
  }
  endShape();

  if (audioCtx && audioCtx.state === 'running') {
    for (let pt of projectedPoints) {
      if (pt.r < 10) continue;
      let diff = (radarAngle - pt.theta + TWO_PI) % TWO_PI;
      if (diff <= radarDelta) {
        triggerSound(pt.r, pt.vector);
        activeHits.push({ x: pt.x, y: pt.y, size: pointSizeSlider.value() * 2, alpha: 255 });
      }
    }
  }

  stroke(255);
  strokeWeight(pointSizeSlider.value());
  beginShape(POINTS);
  for (let pt of projectedPoints) vertex(pt.x, pt.y);
  endShape();

  noFill();
  for (let i = activeHits.length - 1; i >= 0; i--) {
    let h = activeHits[i];
    stroke(0, 255, 255, h.alpha);
    strokeWeight(1.5);
    ellipse(h.x, h.y, h.size, h.size);
    h.size += 2.0;
    h.alpha -= 10;
    if (h.alpha <= 0) activeHits.splice(i, 1);
  }
}

function generateE8System() {
  roots = [];
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 8; j++) {
      for (let s1 of [-1, 1]) {
        for (let s2 of [-1, 1]) {
          let v = new Array(8).fill(0);
          v[i] = s1; v[j] = s2;
          roots.push(v);
        }
      }
    }
  }
  for (let i = 0; i < 256; i++) {
    let v = [], minusCount = 0;
    for (let bit = 0; bit < 8; bit++) {
      let val = (i & (1 << bit)) ? -0.5 : 0.5;
      if (val < 0) minusCount++;
      v.push(val);
    }
    if (minusCount % 2 === 0) roots.push(v);
  }
  for (let i = 0; i < roots.length; i++) {
    for (let j = i + 1; j < roots.length; j++) {
      let d2 = 0;
      for (let k = 0; k < 8; k++) { let diff = roots[i][k] - roots[j][k]; d2 += diff * diff; }
      if (abs(d2 - 2.0) < 0.01) edges.push({ v1: i, v2: j });
    }
  }
}

function initProjectionMatrices() {
  for (let n = 0; n < 8; n++) {
    P_init[0][n] = cos(n * Math.PI / 8);
    P_init[1][n] = sin(n * Math.PI / 8);
  }
  P_current = JSON.parse(JSON.stringify(P_init));
}

function rotate8D(v, p1, p2, angle) {
  let out = [...v], c = cos(angle), s = sin(angle);
  out[p1] = v[p1] * c - v[p2] * s;
  out[p2] = v[p1] * s + v[p2] * c;
  return out;
}

function dotProduct(v1, v2) { return v1.reduce((sum, val, i) => sum + val * v2[i], 0); }

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterCompressor = audioCtx.createDynamicsCompressor();
    masterCompressor.threshold.value = -12;
    masterCompressor.knee.value = 30;
    masterCompressor.ratio.value = 12;
    masterCompressor.attack.value = 0.003;
    masterCompressor.release.value = 0.25;
    masterCompressor.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function triggerSound(radius, vector) {
  if (!audioCtx) return;
  let pitchBase = map(radius, 0, 300, 150, 800);
  let osc = audioCtx.createOscillator(), gainNode = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(pitchBase, audioCtx.currentTime);
  let depth = abs(vector[6]) + abs(vector[7]);
  let decay = map(depth, 0, 1.5, 0.05, 0.4);
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.005);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + decay);
  osc.connect(gainNode);
  gainNode.connect(masterCompressor);
  osc.start();
  osc.stop(audioCtx.currentTime + decay + 0.1);
}

function pillBtn(label) {
  let b = createButton(label);
  b.style('padding', '8px 16px');
  b.style('background', '#ffffff');
  b.style('color', '#000000');
  b.style('border', 'none');
  b.style('border-radius', '20px');
  b.style('font-weight', '500');
  b.style('cursor', 'pointer');
  return b;
}

function setupUI() {
  let masterContainer = createDiv();
  masterContainer.style('padding', '15px');
  masterContainer.style('background', '#111');
  masterContainer.style('color', '#fff');
  masterContainer.style('font-family', 'sans-serif');
  masterContainer.parent(e8Host);

  let topPanel = createDiv();
  topPanel.style('display', 'flex');
  topPanel.style('flex-wrap', 'wrap');
  topPanel.style('gap', '20px');
  topPanel.style('margin-bottom', '20px');
  topPanel.style('align-items', 'center');
  topPanel.parent(masterContainer);

  let audioBtn = pillBtn('Audio Start');
  audioBtn.mousePressed(() => { initAudio(); audioBtn.html('Audio Active'); });
  audioBtn.parent(topPanel);

  let animateBtn = pillBtn('Random / Animate');
  animateBtn.mousePressed(() => {
    isAnimating = !isAnimating;
    if (isAnimating) for (let i = 0; i < 28; i++) targetAngles[i] = random(0, 360);
  });
  animateBtn.parent(topPanel);

  let audioStopBtn = pillBtn('Audio Stop');
  audioStopBtn.mousePressed(() => {
    if (audioCtx && audioCtx.state === 'running') {
      audioCtx.suspend();
      audioBtn.html('Audio Start');
    }
  });
  audioStopBtn.parent(topPanel);

  let resetBtn = pillBtn('Reset');
  resetBtn.mousePressed(() => {
    isAnimating = false;
    for (let i = 0; i < 28; i++) { sliders[i].value(0); valDisplays[i].html('0.0°'); targetAngles[i] = 0; }
  });
  resetBtn.parent(topPanel);

  let styleCtrl = createDiv();
  styleCtrl.style('display', 'flex');
  styleCtrl.style('flex-wrap', 'wrap');
  styleCtrl.style('gap', '15px');
  styleCtrl.parent(topPanel);

  let pointWrapper = createDiv();
  pointWrapper.html('<span style="font-size:12px; margin-right:5px;">Point Size</span>');
  pointSizeSlider = createSlider(1, 10, 3.5, 0.1);
  pointSizeSlider.parent(pointWrapper);
  pointWrapper.parent(styleCtrl);

  let lineWrapper = createDiv();
  lineWrapper.html('<span style="font-size:12px; margin-right:5px;">Line Opacity</span>');
  lineOpacitySlider = createSlider(0, 1, 1, 0.01);
  lineOpacitySlider.parent(lineWrapper);
  lineWrapper.parent(styleCtrl);

  let radarSpeedWrapper = createDiv();
  radarSpeedWrapper.html('<span style="font-size:12px; margin-right:5px;">Radar Speed</span>');
  radarSpeedSlider = createSlider(0.001, 0.1, 0.015, 0.001);
  radarSpeedSlider.parent(radarSpeedWrapper);
  radarSpeedWrapper.parent(styleCtrl);

  let sliderGrid = createDiv();
  sliderGrid.style('display', 'grid');
  sliderGrid.style('grid-template-columns', 'repeat(auto-fill, minmax(130px, 1fr))');
  sliderGrid.style('gap', '10px');
  sliderGrid.style('max-height', '260px');
  sliderGrid.style('overflow-y', 'auto');
  sliderGrid.parent(masterContainer);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 8; j++) {
      let wrapper = createDiv();
      wrapper.style('color', '#888');
      wrapper.style('font-size', '11px');
      wrapper.style('font-family', 'monospace');
      let label = createSpan(`x${i + 1}x${j + 1}: `);
      label.parent(wrapper);
      let valDisplay = createSpan('0.0°');
      valDisplay.parent(wrapper);
      valDisplays.push(valDisplay);
      let slider = createSlider(0, 360, 0, 0.5);
      slider.style('width', '100%');
      slider.style('margin-top', '4px');
      slider.parent(wrapper);
      slider.input(() => { valDisplay.html(`${slider.value().toFixed(1)}°`); });
      sliders.push(slider);
      wrapper.parent(sliderGrid);
    }
  }
}

function windowResized() { resizeCanvas(hostWidth(), 500); }
