/**
 * Web Audio API Sound Synthesizer for Stage Pageant Randomizer
 * Generates suspenseful rolling clicks, dramatic riser, and triumphant winner fanfare.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Quick mechanical/crystal tick sound during text shuffle
  playTick(frequency = 800, duration = 0.03) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, this.ctx.currentTime + duration);

    filter.type = 'highpass';
    filter.frequency.value = 400;

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Dramatic rising tension whoosh sound
  playRiser(durationSec = 3.5) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + durationSec);

    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + durationSec * 0.85);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + durationSec);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + durationSec);
  }

  // Grand celebratory chime / winner fanfare sound
  playWinnerFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [
      { freq: 523.25, time: 0, dur: 0.4 },     // C5
      { freq: 659.25, time: 0.12, dur: 0.4 },  // E5
      { freq: 783.99, time: 0.24, dur: 0.6 },  // G5
      { freq: 1046.50, time: 0.38, dur: 1.8 }  // C6 (Grand bell)
    ];

    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.value = n.freq;

      const startTime = this.ctx.currentTime + n.time;
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.25, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + n.dur);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + n.dur);
    });

    // Add deep bass impact
    const bassOsc = this.ctx.createOscillator();
    const bassGain = this.ctx.createGain();
    bassOsc.type = 'sine';
    bassOsc.frequency.setValueAtTime(150, this.ctx.currentTime + 0.38);
    bassOsc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 1.2);

    bassGain.gain.setValueAtTime(0.3, this.ctx.currentTime + 0.38);
    bassGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.4);

    bassOsc.connect(bassGain);
    bassGain.connect(this.ctx.destination);

    bassOsc.start(this.ctx.currentTime + 0.38);
    bassOsc.stop(this.ctx.currentTime + 1.4);
  }
}

window.soundEngine = new SoundEngine();
