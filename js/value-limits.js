export const MAX_SIMULTANEOUS_PRESETS = 8;

// ---------------------------------------------------------------------------
// Slider range definitions — single source of truth for every <input type="range">
// Keys match the HTML element id.  `step` is always specified explicitly.
// ---------------------------------------------------------------------------
export const SLIDER_DEFINITIONS = {
  // ── Global / Timing ──────────────────────────────────────────────────────
  "tempo-bpm":               { min: 60,    max: 220,   step: 1      },
  // ── Global / Output ──────────────────────────────────────────────────────
  "global-timbre":           { min: -1,    max: 1,     step: 0.01   },
  "reverb-mix":              { min: 0,     max: 1,     step: 0.01   },
  "delay-mix":               { min: 0,     max: 1,     step: 0.01   },
  "tremolo-depth":           { min: 0,     max: 1,     step: 0.01   },
  "tape-delay-mix":          { min: 0,     max: 1,     step: 0.01   },
  "master-volume":           { min: 0,     max: 1,     step: 0.01   },
  // ── Tape Delay ───────────────────────────────────────────────────────────
  "delay-time":              { min: 0,     max: 7,     step: 1      },
  "delay-feedback":          { min: 0,     max: 1,     step: 0.001  },
  // ── Clean Delay ──────────────────────────────────────────────────────────
  "clean-delay-time":        { min: 0,     max: 7,     step: 1      },
  "clean-delay-repetitions": { min: 1,     max: 12,    step: 1      },
  // ── Oscillator ───────────────────────────────────────────────────────────
  "pitch-shift":             { min: -24,   max: 24,    step: 1      },
  "detune-spread":           { min: 0,     max: 20,    step: 0.5    },
  "sub-level":               { min: 0,     max: 1,     step: 0.01   },
  "noise-level":             { min: 0,     max: 1,     step: 0.01   },
  "noise-filter-cutoff":     { min: 100,   max: 12000, step: 10     },
  // ── Envelope ─────────────────────────────────────────────────────────────
  "attack":                  { min: 0.001, max: 0.8,   step: 0.001  },
  "decay":                   { min: 0.005, max: 1.2,   step: 0.001  },
  "release":                 { min: 0.01,  max: 0.8,   step: 0.001  },
  // ── Filter ───────────────────────────────────────────────────────────────
  "filter-cutoff":           { min: 300,   max: 5000,  step: 10     },
  "filter-q":                { min: 0.2,   max: 8,     step: 0.1    },
  // ── Post Filter ──────────────────────────────────────────────────────────
  "post-filter-cutoff":      { min: 0,     max: 1,     step: 0.001  },
  "post-filter-q":           { min: 0.1,   max: 18,    step: 0.1    },
  "post-filter-mix":         { min: 0,     max: 1,     step: 0.01   },
  // ── Distortion ───────────────────────────────────────────────────────────
  "distortion-drive":        { min: 0,     max: 1,     step: 0.01   },
  "distortion-mix":          { min: 0,     max: 1,     step: 0.01   },
  "distortion-tone":         { min: 500,   max: 12000, step: 10     },
  "distortion-feedback":     { min: 0,     max: 0.35,  step: 0.01   },
  // ── Gate ─────────────────────────────────────────────────────────────────
  "gate-rate":               { min: 0.1,   max: 20,    step: 0.1    },
  "gate-threshold":          { min: 0,     max: 0.9,   step: 0.01   },
  "gate-attack":             { min: 0.001, max: 0.5,   step: 0.001  },
  "gate-hold":               { min: 0,     max: 1,     step: 0.001  },
  "gate-decay":              { min: 0.001, max: 0.5,   step: 0.001  },
  // ── Send & Pan ───────────────────────────────────────────────────────────
  "delay-send":              { min: 0,     max: 0.10,  step: 0.01   },
  "clean-delay-send":        { min: 0,     max: 1,     step: 0.01   },
  "reverb-send":             { min: 0,     max: 0.8,   step: 0.01   },
  "stereo-pan":              { min: -1,    max: 1,     step: 0.01   },
  // ── LFO 1–4 ──────────────────────────────────────────────────────────────
  "lfo-rate":                { min: 0,     max: 1,     step: 0.001  },
  "lfo-depth":               { min: 0,     max: 1,     step: 0.01   },
  "lfo-2-rate":              { min: 0,     max: 1,     step: 0.001  },
  "lfo-2-depth":             { min: 0,     max: 1,     step: 0.01   },
  "lfo-3-rate":              { min: 0,     max: 1,     step: 0.001  },
  "lfo-3-depth":             { min: 0,     max: 1,     step: 0.01   },
  "lfo-4-rate":              { min: 0,     max: 1,     step: 0.001  },
  "lfo-4-depth":             { min: 0,     max: 1,     step: 0.01   },
};

export const MIDI_CHANNEL_MIN = 1;
export const MIDI_CHANNEL_MAX = 16;
export const MIDI_VELOCITY_MIN = 0;
export const MIDI_VELOCITY_MAX = 127;

export const DEAD_NOTE_PAUSE_COUNT_MIN = 1;
export const DEAD_NOTE_PAUSE_COUNT_MAX = 16;

export const DELAY_FEEDBACK_MAX = 1;
export const STARTUP_DELAY_FEEDBACK_MAX = 0.05;
export const DELAY_FEEDBACK_LOG_MIN = 0.001;
export const TAPE_DELAY_SEND_MAX = 0.1;
export const CLEAN_DELAY_REPETITIONS_MIN = 1;
export const CLEAN_DELAY_REPETITIONS_MAX = 12;
export const CLEAN_DELAY_REPEAT_GAIN_CAP = 0.92;

export const DISTORTION_FEEDBACK_MAX = 0.9;
export const DISTORTION_FEEDBACK_DELAY_MIN_SECONDS = 0.075;
export const DISTORTION_FEEDBACK_DELAY_MAX_SECONDS = 0.22;
export const DISTORTION_FEEDBACK_SEND_MAX = 0.24;
export const DISTORTION_FEEDBACK_LOOP_MAX = 0.29;
export const DISTORTION_FEEDBACK_RETURN_MAX = 0.2;

export const PITCH_SHIFT_MIN_SEMITONES = -24;
export const PITCH_SHIFT_MAX_SEMITONES = 24;
export const LFO_PITCH_SHIFT_MAX_SEMITONES = 4;

export const LFO_RATE_MIN_HZ = 0.05;
export const LFO_RATE_MAX_HZ = 12;

export const GATE_RATE_MIN_HZ = 0.1;
export const GATE_RATE_MAX_HZ = 20;
export const GATE_THRESHOLD_MIN = 0;
export const GATE_THRESHOLD_MAX = 0.9;
export const GATE_ATTACK_MIN_S = 0.001;
export const GATE_ATTACK_MAX_S = 0.5;
export const GATE_HOLD_MIN_S = 0;
export const GATE_HOLD_MAX_S = 1.0;
export const GATE_DECAY_MIN_S = 0.001;
export const GATE_DECAY_MAX_S = 0.5;

export const ENVELOPE_ATTACK_MIN_SECONDS   = 0.001;
export const ENVELOPE_ATTACK_MAX_SECONDS = 2;
export const ENVELOPE_DECAY_MIN_SECONDS = 0.005;
export const ENVELOPE_DECAY_MAX_SECONDS = 2;
export const ENVELOPE_RELEASE_MIN_SECONDS = 0.01;
export const ENVELOPE_RELEASE_MAX_SECONDS = 2;

