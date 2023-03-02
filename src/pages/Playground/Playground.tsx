import React from "react";
import Layout from "@theme/Layout";
import { PlaygroundData } from "@site/src/mocks";
import {
    SiteButton,
    ISiteButtonProps,
    DocsSection,
    FeatureSection,
    Images,
    PullQuotes,
    SocialSection,
    ITagProps,
    Tag,
    BlogSection,
} from "@site/src/components";
import styles from "./Playground.module.scss";

export default function Playground() {
    return (
        <Layout title="Playground" description="Playground Page">
            <div className={styles.buttonSection}>
                {PlaygroundData.playground.buttons.map((x: ISiteButtonProps) => {
                    return <SiteButton key={x.text + x.url} {...x} />;
                })}
            </div>
            <div className={styles.docsSections}>
                <DocsSection {...PlaygroundData.playground.docs} />
            </div>
            <div>
                <FeatureSection {...PlaygroundData.playground.features} />
            </div>
            <div>
                <Images images={PlaygroundData.playground.images} />
            </div>
            <div>
                <PullQuotes {...PlaygroundData.playground.pullQuotes} />
            </div>
            <div>
                <SocialSection {...PlaygroundData.playground.social} />
            </div>
            <div>
                <BlogSection {...PlaygroundData.playground.blog} />
            </div>
            <div className={styles.buttonSection}>
                {PlaygroundData.playground.tags.map((x: ITagProps) => {
                    return <Tag key={x.text + x.url} {...x} />;
                })}
            </div>
        </Layout>
    );
}
