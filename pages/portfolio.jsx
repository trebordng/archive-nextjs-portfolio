import React, { useEffect } from "react";
import Reveal from "react-reveal/Reveal";
import { Footer } from "../components";
import WorkCard from "../components/WorkCard";
import { getPosts } from "../services";
import Link from "next/link";
import Head from "next/head";

const Portfolio = ({ posts }) => {
  useEffect(() => {}, []);
  return (
    <Reveal>
    <Head>
          <title>Portfolio| Robert Tran</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      <div id="portfolio">
      
        <h5 className="portfolio-title">Portfolio</h5>
        <div className="row portfolio-list">
          {posts.map((post, index) => {
            return (
              <Link href={`/portfolio/${post.node.slug}`} key={index}>
                <a className="col-lg-3 col-md-3 work-card-wrapper">
                  <img src={post.node.displayimage.url} />
                  <div>
                    <p>{post.node.title}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </Reveal>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
export default Portfolio;
