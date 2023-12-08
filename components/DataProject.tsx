import { StaticImageData } from "next/image";
import image1 from '../public/assests/tigrinho.png'
import image2 from '../public/assests/pokemon.png'
import image3 from '../public/assests/megasena.png'
import image4 from '../public/assests/clima.png'

export interface DataProject {
    id: string;
    image: StaticImageData;
    nome: string;
    link: string;
}

export const DataProject: DataProject[] = [
    {
        id: '1',
        image: image1,
        nome: 'JOGO DA MEMÓRIA',
        link: 'https://jogo-da-memoria-tigrinho.vercel.app/',
    },
    {
        id: '2',
        image: image2,
        nome: 'POKEDEX',
        link: 'https://pokemon-api-two-rouge.vercel.app/',
    },
    {
        id: '3',
        image: image3,
        nome: 'GERADOR DA SORTE ',
        link: 'https://projeto-numeros-loteria.vercel.app/',
    },
    {
        id: '4',
        image: image4,
        nome: 'CLIMA TEMPO',
        link: 'https://clima-tempo-kappa.vercel.app/',
    }
]