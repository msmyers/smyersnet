import Head from 'next/head'

import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"
        ></meta>
      </Head>

      <Main>
        <h1 className={styles.title}>
          <a className="test" href="https://www.smyers.net">Smyers</a> Family
        </h1>

        <p className={styles.description}>
          We help people <code>smyers/index.js</code>
        </p>

        <Grid>
          <Card>
            <a href="//smyers.net/mike">
              <h2>Mike &rarr;</h2>
              <p>Engineer.</p>
            </a>
          </Card>

          <Card>
            <a href="//smyers.net/robin">
              <h2>Robin &rarr;</h2>
              <p>Pastor.</p>
            </a>
          </Card>

          <Card>
            <a href="//smyers.net/michael">
              <h2>Michael &rarr;</h2>
              <p>Entrepreneur.</p>
            </a>
          </Card>

          <Card>
            <a
              href="//smyers.net/cassandra"
            >
              <h2>Cassandra &rarr;</h2>
              <p>Educator.</p>
            </a>
          </Card>
        </Grid>
      </Main>

      <Footer />
    </Container>
  )
}
