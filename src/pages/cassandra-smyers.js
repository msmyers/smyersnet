import Head from 'next/head'

import Link from 'next/link'
import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Typed from 'react-typed';

import Home from '../styles/Home.module.scss';
import CSS from '../styles/FamilyMemberPage.module.scss';

import SmyersFamily from '../lib/SmyersFamily'

// SmyersFamily.findByName('Cassandra')

export default function CassandraSmyers() {
    return (
        <Container>
            <Head>
                <title>Cassandra Smyers - cmsmyers</title>

                <link rel="icon" href="/favicon.ico"/>

                {/* How do I make a global site wrapper? */}
                <meta name="color-scheme" content="dark"/>

                <meta
                    name="description"
                    content="Cassandra Smyers"/>

            </Head>
            
            <a className={CSS.back} href="/">&larr; Smyers</a>

            <Main>
                <h1 className={CSS.title}>
                    <Typed strings={[ 'Cassandra']} typeSpeed={40}></Typed>
                    <a className="test" href="https://www.smyers.net">Smyers</a>
                </h1>

                <div className={CSS.values_wrap}>
                    <p className={CSS.values} >
                        <span className="nowrap">I enjoy helping kids learn.</span>
                    </p>
                </div>

                {/*    I help people study, text, join, choose.*/}

                {/*<Grid className={"cards"}>*/}
                {/*    <Link href="//smyers.net/mike">*/}
                {/*        <Card className={"card"}>*/}
                {/*            <h2>CourseScheduler &rarr;</h2>*/}
                {/*            <p>Founder.</p>*/}
                {/*        </Card>*/}
                {/*    </Link>*/}

                {/*    <Link href="https://www.zipwhip.com">*/}
                {/*        <Card>*/}
                {/*            <h2>Zipwhip &rarr;</h2>*/}
                {/*            <p>Co-Founder.</p>*/}
                {/*        </Card>*/}
                {/*    </Link>*/}

                {/*    <Link href="https://www.coinme.com">*/}
                {/*        <Card>*/}
                {/*            <h2>Coinme &rarr;</h2>*/}
                {/*            <p>Entrepreneur.</p>*/}
                {/*        </Card>*/}
                {/*    </Link>*/}

                {/*    <Link href="https://www.evoeco.com">*/}
                {/*        <Card>*/}
                {/*            <h2>EvoEco &rarr;</h2>*/}
                {/*            <p>Partner.</p>*/}
                {/*        </Card>*/}
                {/*    </Link>*/}
                {/*</Grid>*/}

            </Main>

            <Footer/>

        </Container>
    )
}
