import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from 'components/Layout';
import { InitialScreen } from 'sections/InitialScreen';
import { About } from 'sections/About';
import { Projects } from 'sections/Projects';
import { Contact } from 'sections/Contact';
import { Footer } from 'sections/Footer';
import { Skills } from 'sections/Skills';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Tiến - Portfolio NextJS</title>
      <meta
        name="description"
        content="Xin Chào, Tôi là Huỳnh Vĩnh Tiến"
      />
      <link rel="icon" href="https://www.openxcell.com/wp-content/uploads/2021/11/dango-inner-2.png" />
    </Head>
    <Layout>
      <InitialScreen />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  </>
);

export default Home;
