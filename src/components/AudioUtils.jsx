

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
export function playFrequency(frequency) {
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();

  oscillator.stop(audioContext.currentTime + 0.1);
}
