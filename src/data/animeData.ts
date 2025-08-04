import attackOnTitanImg from '@/assets/attack-on-titan.jpg';
import demonSlayerImg from '@/assets/demon-slayer.jpg';
import yourNameImg from '@/assets/your-name.jpg';
import spiritedAwayImg from '@/assets/spirited-away.jpg';
import jujutsuKaisenImg from '@/assets/jujutsu-kaisen.jpg';
import onePieceImg from '@/assets/one-piece.jpg';
import myHeroAcademiaImg from '@/assets/my-hero-academia.jpg';
import narutoImg from '@/assets/naruto.jpg';
import deathNoteImg from '@/assets/death-note.jpg';
import onePunchManImg from '@/assets/one-punch-man.jpg';
import fullmetalAlchemistImg from '@/assets/fullmetal-alchemist.jpg';
import dragonBallZImg from '@/assets/dragon-ball-z.jpg';

export interface Anime {
  id: string;
  title: string;
  genres: string[];
  rating: string;
  synopsis: string;
  image: string;
  banner?: string;
  episodes: number;
  releaseDate: string;
  score: number;
  status: string;
}

export const animeGenres = [
  'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 
  'Mecha', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 
  'Sports', 'Supernatural', 'Thriller', 'Isekai', 'School'
];

export const animeData: Anime[] = [
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    genres: ['Action', 'Drama', 'Fantasy'],
    rating: 'TV-MA',
    synopsis: 'Humanity fights for survival against giant humanoid Titans that threaten their existence behind massive walls.',
    image: attackOnTitanImg,
    episodes: 87,
    releaseDate: '2013',
    score: 9.0,
    status: 'Completed'
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    genres: ['Action', 'Supernatural', 'Adventure'],
    rating: 'TV-14',
    synopsis: 'A young boy becomes a demon slayer to avenge his family and cure his sister who has been turned into a demon.',
    image: demonSlayerImg,
    episodes: 44,
    releaseDate: '2019',
    score: 8.7,
    status: 'Ongoing'
  },
  {
    id: 'your-name',
    title: 'Your Name',
    genres: ['Romance', 'Drama', 'Supernatural'],
    rating: 'PG',
    synopsis: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies.',
    image: yourNameImg,
    episodes: 1,
    releaseDate: '2016',
    score: 8.4,
    status: 'Completed'
  },
  {
    id: 'spirited-away',
    title: 'Spirited Away',
    genres: ['Adventure', 'Family', 'Fantasy'],
    rating: 'PG',
    synopsis: 'A young girl enters a world ruled by gods and witches where humans are changed into beasts.',
    image: spiritedAwayImg,
    episodes: 1,
    releaseDate: '2001',
    score: 9.3,
    status: 'Completed'
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    genres: ['Action', 'School', 'Supernatural'],
    rating: 'TV-14',
    synopsis: 'A student joins a secret organization of sorcerers to kill a powerful curse and save his friends.',
    image: jujutsuKaisenImg,
    episodes: 24,
    releaseDate: '2020',
    score: 8.5,
    status: 'Ongoing'
  },
  {
    id: 'one-piece',
    title: 'One Piece',
    genres: ['Action', 'Adventure', 'Comedy'],
    rating: 'TV-14',
    synopsis: 'A young pirate searches for the ultimate treasure known as One Piece to become the Pirate King.',
    image: onePieceImg,
    episodes: 1000,
    releaseDate: '1999',
    score: 9.0,
    status: 'Ongoing'
  },
  {
    id: 'my-hero-academia',
    title: 'My Hero Academia',
    genres: ['Action', 'School', 'Adventure'],
    rating: 'TV-14',
    synopsis: 'In a world where people have superpowers, a powerless boy enrolls in a prestigious hero academy.',
    image: myHeroAcademiaImg,
    episodes: 158,
    releaseDate: '2016',
    score: 8.4,
    status: 'Ongoing'
  },
  {
    id: 'naruto',
    title: 'Naruto',
    genres: ['Action', 'Adventure', 'Comedy'],
    rating: 'TV-PG',
    synopsis: 'A young ninja seeks recognition and dreams of becoming the leader of his village.',
    image: narutoImg,
    episodes: 720,
    releaseDate: '2002',
    score: 8.3,
    status: 'Completed'
  },
  {
    id: 'death-note',
    title: 'Death Note',
    genres: ['Thriller', 'Mystery', 'Supernatural'],
    rating: 'TV-14',
    synopsis: 'A high school student discovers a supernatural notebook that kills anyone whose name is written in it.',
    image: deathNoteImg,
    episodes: 37,
    releaseDate: '2006',
    score: 9.0,
    status: 'Completed'
  },
  {
    id: 'one-punch-man',
    title: 'One Punch Man',
    genres: ['Action', 'Comedy', 'Supernatural'],
    rating: 'TV-14',
    synopsis: 'A superhero can defeat any enemy with a single punch, but struggles with the mundane problems this causes.',
    image: onePunchManImg,
    episodes: 24,
    releaseDate: '2015',
    score: 8.7,
    status: 'Ongoing'
  },
  {
    id: 'fullmetal-alchemist',
    title: 'Fullmetal Alchemist: Brotherhood',
    genres: ['Action', 'Adventure', 'Drama'],
    rating: 'TV-14',
    synopsis: 'Two brothers use alchemy to try to resurrect their mother, but the consequences are severe.',
    image: fullmetalAlchemistImg,
    episodes: 64,
    releaseDate: '2009',
    score: 9.5,
    status: 'Completed'
  },
  {
    id: 'dragon-ball-z',
    title: 'Dragon Ball Z',
    genres: ['Action', 'Adventure', 'Comedy'],
    rating: 'TV-PG',
    synopsis: 'Goku and his friends defend Earth against powerful aliens and androids.',
    image: dragonBallZImg,
    episodes: 291,
    releaseDate: '1989',
    score: 8.8,
    status: 'Completed'
  }
];