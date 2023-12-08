import Image from 'next/image';
import styles from '../styles/Card.module.scss';
import { DataProject } from './DataProject';

interface CardProps {
    data: DataProject[]; 
}

export default function Card({ data }: CardProps) {
    return (
        <ul className={styles.container}>
            {data.map((project, index) => (
                <li key={index} className={styles.box}>
                    <a href={project.link}>
                        <Image src={project.image} alt={project.nome} width={150} height={250} />
                        <h3>{project.nome}</h3>
                    </a>
                </li>
            ))}
        </ul>
    );
}
