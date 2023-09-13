export const WORDS = {
    0: { word: [[0]], color: '0, 0, 0' },
    WE: {
      word: [['W', 'E']],
      color: '80, 227, 230',
    },
    DESIGN: { word: [['D','E','S','I','G','N']], color: '36, 95, 223' },
    AND: {
      word: [['A','N','D']],
      color: '223, 173, 36',
    },
    DEVELOP: { word: [['D','E','V','E','L','O','P']], color: '223, 217, 36' },
    APPLICATIONS: { word: [['A','P','P','L','I','C','A','T','I','O','N','S']], color: '48, 211, 56' },
    THAT: {
      word: [['T','H','A','T']],
      color: '132, 61, 198',
    },
    RUN: { word: [['R', 'U', 'N']], color: '227, 78, 78' },
    THE: { word: [['T', 'H', 'E']], color: '227, 78, 78' },
    WORLD: { word: [['W', 'O', 'R','L','D']], color: '227, 78, 78' },
    SHOWCASE: { word: [['S', 'H', 'O','W','C','A','S','E']], color: '227, 78, 78' },
    FUTURE: { word: [['F', 'U', 'T','U','R','E']], color: '227, 78, 78' },
  };

  export const PHRASES = [
    'WEDEVELOPANDDESIGNAPPLICATIONS',
    'THATRUNTHEWORLDAND',
    'SHOWCASETHEFUTURE'
  ];
  
  // randomly generating next droping words
  export const randomWordGenerator = () => {
    const tetrominos = 'WE DESIGN AND DEVELOP APPLICATIONS THAT RUN THE WORLD AND SHOWCASE THE FUTURE'.split(' ');
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return WORDS[randTetromino];
  };