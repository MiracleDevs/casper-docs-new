import React from "react";
import { ITagProps, Tag } from "@site/src/components";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import icons from "../../../../icons";
import styles from "./UseCaseTile.module.scss";

export interface IUseCaseTileProps {
    image: string;
    category: string;
    title: string;
    span: number;
    isFavourite: boolean;
    url?: string;
    linkText?: string;
    paragraph: string;
    tags: Array<ITagProps>;
}

export function UseCaseTile({ image, category, title, span, isFavourite, url, linkText, paragraph, tags }: IUseCaseTileProps) {
    const desktop = useWindowWidth(1024);

    const shareLink = () => {
        if (navigator && url) {
            navigator.clipboard.writeText(url);
        }
    };

    return (
        <div className={`${styles.card} ${desktop ? `span-${span}` : ""}`}>
            <div className={`${styles.card_img}`}>
                <img src={image} alt={`UseCaseTile-${title}`} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <p className="halfTitleEyebrow">{category}</p>
                        </div>
                        <div className={styles.buttons}>
                            {isFavourite && (
                                <div className={styles.iconButton} onClick={shareLink}>
                                    {icons.heart}
                                </div>
                            )}
                            {/* {url && (
                                <button className={styles.iconButton} onClick={shareLink}>
                                    {icons.share}
                                </button>
                            )} */}
                            {url && linkText && (
                                <a target="_blank" rel="noreferrer" href={url} className={`${styles.sourceButton} secondaryParagraph`}>
                                    {linkText}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className={styles.paragraph}>
                        <h4>{title}</h4>
                        <p className={`secondaryParagraph`}>{paragraph}</p>
                    </div>
                </div>
                <div className={`${styles.tags}`}>
                    {tags.map((element: ITagProps, index: number) => (
                        <Tag text={element.text} color={element.color} url={element.url} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
