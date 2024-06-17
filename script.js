const NOTE_VALUES = {
  CRASH_LEFT_STOP: 28,
  CRASH_RIGHT_STOP: 29,
  HI_HAT_FOOT_SPLASH: 31,
  RIMSHOT_EDGE: 32,
  HI_HAT_FOOT_CLOSE: 33,
  SNARE_EDGE: 34,
  KICK: 36,
  SIDE_STICK: 37,
  SNARE_CENTER: 38,
  CLAP: 39,
  RIMSHOT: 40,
  LOW_FLOOR_TOM: 41,
  CLOSED_TIP: 42,
  HI_HAT_SHANK: 44,
  LOW_MID_TOM: 45,
  HI_HAT_OPEN_EDGE: 46,
  HIGH_MID_TOM: 47,
  HIGH_TOM: 48,
  CRASH_LEFT: 49,
  RIDE_OUT: 51,
  RIDE_EDGE: 52,
  RIDE_BELL: 53,
  TAMBOURINE: 54,
  CRASH_RIGHT: 57,
  RIDE_IN: 59,
  SHAKER: 70,
  STICK: 75,
}

const CONTROLLER_VALUES = {
  HI_HAT: 1,
}

/** Scripter callback to handle MIDI events */
function HandleMIDI(event) {
  if (event instanceof NoteOn) {
    const note = MIDI.noteName(event.pitch)
    const name = Object.entries(NOTE_VALUES).find(([key, value]) => value === event.pitch)[0]
    Trace(`Note on: ${event.pitch}, ${note}, ${name}, ${event.velocity}`)
    event.send()
  } else {
    event.send()
  }
}

/** Scripter callback to handle changes to UI parameters */
function ParameterChanged(param, value) {}

/** Scripter UI parameters */
const PluginParameters = []
