import Head from 'next/head'

import Link from 'next/link'
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
                <title>Smyers</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="color-scheme" content="dark"/>
                <meta
                    name="description"
                    content="Smyers" />
            </Head>

            <Main>
                <h1 className={styles.title}>
                    <a className="test" href="https://www.smyers.net">Smyers</a> Family
                </h1>

                <p className={styles.description}>
                    We help people
                    {/*<code>smyers/index.js</code>*/}
                </p>

            <Grid className={"cards"}>
                <Link href="/mike-smyers">
                        <Card>
                            <h2>Mike &rarr;</h2>
                            <p>Engineer.</p>
                        </Card>
                    </Link>

                    <Link href="/robin-smyers">
                        <Card>
                            <h2>Robin &rarr;</h2>
                            <p>Pastor.</p>
                        </Card>
                    </Link>

                    <Link href="/michael-smyers">
                        <Card>
                            <h2>Michael &rarr;</h2>
                            <p>Entrepreneur.</p>
                        </Card>
                    </Link>

                    <Link href="/cassandra-smyers">
                        <Card>
                            <h2>Cassandra &rarr;</h2>
                            <p>Educator.</p>
                        </Card>
                    </Link>
                </Grid>
            </Main>

            <Footer/>
        </Container>
    )
}
