import assert from "node:assert/strict";

import { NOTE_OPTIONS } from "../js/constants.js";
import { AudioStateController } from "../js/audio-state-controller.js";
import { state } from "../js/state.js";

const frequencyByNoteId = new Map(NOTE_OPTIONS.map(({ id, frequency }) => [id, frequency]));

const controller = new AudioStateController();
const stateChanges = [];

controller.addEventListener("statechange", (event) => {
  stateChanges.push(event.detail);
});

controller.initialize();
controller.selectInstrument("warm");

state.instrumentArpeggioOctavesByPresetId.warm = [4, 5];
state.instrumentArpeggioPitchClassesByPresetId.warm = ["c", "e", "g"];
state.instrumentNoteIdsByPresetId.warm = ["note-c4", "note-e4", "note-g4"];

const instrumentParams = state.instrumentParamsByPresetId.warm;
instrumentParams.pauseNoteEnabled = 0;
instrumentParams.deadNoteAtEnd = 0;
instrumentParams.endPauseCount = 1;

const originalMathRandom = Math.random;
try {
  Math.random = () => 0.6;
  assert.equal(controller.toggleArpeggioPauseNote("warm"), true, "pause-note toggle should enable cleanly");
} finally {
  Math.random = originalMathRandom;
}

const patternWithPause = state.instrumentPatternsByPresetId.warm;
assert.deepEqual(
  patternWithPause,
  [
    frequencyByNoteId.get("note-c4"),
    frequencyByNoteId.get("note-e4"),
    frequencyByNoteId.get("note-g4"),
    null,
    frequencyByNoteId.get("note-e4"),
  ],
  "enabled pause-note mode should inject one silent step at the random insertion index",
);

assert.equal(controller.toggleArpeggioPauseNote("warm"), true, "pause-note toggle should disable cleanly");
const patternWithoutPause = state.instrumentPatternsByPresetId.warm;
assert.ok(
  !patternWithoutPause.includes(null),
  "disabled pause-note mode should remove the silent step from the generated pattern",
);

const pauseToggleStateChange = stateChanges.findLast(({ type }) => type === "arpeggio-pause-note-updated");
assert.ok(pauseToggleStateChange, "pause-note toggle should emit a dedicated statechange event");
assert.equal(pauseToggleStateChange.value, 0, "latest statechange should report the disabled pause-note value");

console.log("arpeggio pause-note checks passed");

