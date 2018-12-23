import React, { useState } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import classnames from "classnames";
import { setConfig } from "react-hot-loader";
import { Header } from "../components/header";
import { Tile } from "../components/tile";
import { CDataLoader } from "../components/cDataLoader";
import { NullState } from "../components/nullState";
import { CData } from "../interfaces";

// @ts-ignore: the typing for setConfig doesn't have this prop but it does work
setConfig({ pureSFC: true });

import "./global.css";
import styles from "./index.module.css";

function formatWithCommas(n: number): string {
    if ("toLocaleString" in new Number(n)) {
        return n.toLocaleString();
    } else {
        // if the browser doesn't support it, just fall back to no commas, no big deal
        return n.toString();
    }
}

function getTileIndices(cData: CData | null) {
    if (!cData) {
        return { tileIndices: null, numTiles: 0, totalTiles: 0 };
    }

    // one byte is 1/4th of 8 pixels, so essentially 2 pixels
    // c1 has half the tile data
    // so...
    /* const numTiles = process.env.NODE_ENV === "production" ? cData.c1Data.length / (256 / 2 / 2) : 300; */
    const totalTiles = cData.c1Data.length / (256 / 2 / 2);

    const numTiles = Math.min(totalTiles, 1024);

    const tileIndices = new Array(numTiles).fill(1, 0, numTiles).map((_, i) => i + 0);

    return { tileIndices, numTiles, totalTiles };
}

const query = graphql`
    query MetaDataQuery {
        site {
            siteMetadata {
                title
                keywords
                description
                twitterHandle
            }
        }
    }
`;

const titleImageUrl = "https://city41.github.io/neospriteviewer/fool.png";

export default () => {
    const [cData, setCData] = useState<CData | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    const { tileIndices, numTiles, totalTiles } = getTileIndices(cData);

    return (
        <StaticQuery
            query={query}
            render={data => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            {
                                name: "description",
                                content: data.site.siteMetadata.title
                            },
                            {
                                name: "keywords",
                                content: data.site.siteMetadata.keywords
                            },
                            {
                                name: "twitter:card",
                                content: "summary"
                            },
                            {
                                name: "twitter:site",
                                content: data.site.siteMetadata.twitterHandle
                            },
                            {
                                name: "twitter:title",
                                content: data.site.siteMetadata.title
                            },
                            {
                                name: "twitter:description",
                                content: data.site.siteMetadata.description
                            },
                            {
                                name: "twitter:image",
                                content: titleImageUrl
                            },
                            {
                                name: "og:title",
                                content: data.site.siteMetadata.title
                            },
                            {
                                name: "og:type",
                                content: "website"
                            },
                            {
                                name: "og:url",
                                content: "https://city41.github.io/neospriteviewer"
                            },
                            {
                                name: "og:description",
                                content: data.site.siteMetadata.description
                            },
                            {
                                name: "og:image",
                                content: titleImageUrl
                            },
                            {
                                name: "og:title",
                                content: data.site.siteMetadata.title
                            }
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
                    <div className={styles.root}>
                        <Header className={styles.header} loading={!!tileIndices && !loaded}>
                            <CDataLoader
                                onLoad={newCData => {
                                    setLoaded(false);
                                    setCData(newCData);
                                }}
                                cData={cData}
                                statusMessage={
                                    numTiles < totalTiles
                                        ? `there are ${formatWithCommas(
                                              totalTiles
                                          )} tiles in total, but only showing first ${formatWithCommas(numTiles)}`
                                        : null
                                }
                            />
                        </Header>

                        {!tileIndices && <NullState />}
                        {(tileIndices || []).map((t, i, a) => (
                            <Tile
                                key={((cData && cData.filename) || "X") + "-" + t}
                                className={styles.tile}
                                cData={cData}
                                index={t}
                                onLoad={i === a.length - 1 ? () => setLoaded(true) : undefined}
                            />
                        ))}
                        <div className={styles.fool} />
                    </div>
                </>
            )}
        />
    );
};
