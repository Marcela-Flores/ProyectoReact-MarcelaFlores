export const transformNote = (originalNote, octave) => ({
    ...originalNote,
    octava: originalNote.octava + octave,
    frecuencia: originalNote.frecuencia * 2 ** octave,
  });
  