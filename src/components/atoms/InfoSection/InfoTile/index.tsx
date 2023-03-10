import React from "react";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import styles from "./InfoTile.module.scss";

export interface IInfoTile {
    title: string;
    content: string;
    image: string;
}

export interface IInfoTileProps {
    tile: IInfoTile;
    span: number;
}

export default function InfoTile({ tile, span }: IInfoTileProps) {
    const { title, content, image } = tile;
    const isDesktop = useWindowWidth(1024);

    return (
        <div className={`${styles.infoTileWrapper} ${isDesktop ? `span-${span}` : "span-6"}`}>
            {image && title && (
                <div className={styles.image}>
                    <img alt={title} src={image} />
                </div>
            )}
            <h4 className={styles.title}>{title}</h4>
            <p className={`primaryParagraph ${styles.paragraph}`}>{content}</p>
        </div>
    );
}
