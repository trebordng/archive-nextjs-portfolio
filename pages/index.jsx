import React from "react";
import {
  Contact,
  EducationExperience,
  Footer,
  Landing,
  Mywork,
  Skill,
} from "../components";
import emailjs from "@emailjs/browser";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Robert Tran</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Landing />

      <Skill />

      <EducationExperience />
      <Mywork />
      <Contact />
      <Footer />
    </>
  );
};

export default index;
