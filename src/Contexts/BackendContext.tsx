import { createContext } from "react"

export interface IArtwork {
    title: string;
    image: string;
  }

export type BackendContext = {
    artworks: IArtwork[];
}

const backendMock: IArtwork[] = [
  {
    title: 'Velvet',
    image: 'velvet'
  },
  {
    title: 'Misty lake',
    image: 'lake-of-fog'
  },
  {
    title: 'In the eye of',
    image: 'in-the-eye-of-the'
  },
  {
    title: 'Milky way',
    image: 'milky-way'
  },
  {
    title: 'Blue tit',
    image: 'blue-tit'
  },
  {
    title: 'Archipelago',
    image: 'archipelago'
  },
  {
    title: 'Messier 81 and 82',
    image: 'm81-m82'
  },
  {
    title: 'Creek',
    image: 'creek'
  },
  {
    title: 'Flower',
    image: 'flower'
  },

  {
    title: 'Highway',
    image: 'highway'
  },
  {
    title: 'Owl',
    image: 'owl'
  },
  {
    title: 'Stadshagen',
    image: 'stadshagen'
  },
  {
    title: 'Sunset in the forest',
    image: 'sunset'
  },
  {
    title: 'Surpriced',
    image: 'surpriced'
  },
  {
    title: 'Symmetry',
    image: 'symmetry'
  }
];

export default createContext<BackendContext>({
  artworks: backendMock
});
  
  