const notes = [1, 5, 6, 10, 10, 9, 4, 4, 4]
const sumNote = notes.reduce(
    (sum, currentNote) => {
        return sum += currentNote
    }
)