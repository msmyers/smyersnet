import Head from 'next/head'

import Link from 'next/link'
import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Typed from 'react-typed';

import Home from '../styles/Home.module.scss';
import Michael from '../styles/FamilyMemberPage.module.scss';

export default function MichaelSmyers() {
    return (
        <Container>
            <Head>
                <title>Michael Smyers - msmyers</title>

                <link rel="icon" href="/favicon.ico"/>

                {/* How do I make a global site wrapper? */}
                <meta name="color-scheme" content="dark"/>

                <meta
                    name="description"
                    content="Michael Smyers"/>

            </Head>

            <a className={Michael.back} href="/">&larr; Smyers</a>

            <Main>
                <h1 className={Michael.title}>
                    <Typed backDelay={1000}
                        strings={[ 'M', 'Michael', 'Michael A.', 'Michael', 'M']} typeSpeed={40}
                        smartBackspace={true}
                    />
                    <a className="test" href="/">Smyers</a>
                    {/*<a className="test" href="https://www.smyers.net">Smyers</a>*/}
                </h1>

                {/*<br/>*/}

                {/*<Typed*/}
                {/*    strings={[*/}
                {/*        'Search for products',*/}
                {/*        'Search for categories',*/}
                {/*        'Search for brands']}*/}
                {/*    typeSpeed={40}*/}
                {/*    backSpeed={50}*/}
                {/*    attr="placeholder"*/}
                {/*    loop >*/}
                {/*    <input type="text"/>*/}
                {/*</Typed>*/}

                <div className={Michael.values_wrap}>
                    <p className={Michael.values} >
                        <span className="nowrap">Eternity, Humanity, Legacy, </span>
                        <span className="nowrap">Mission, Family, Self, Woman, </span>
                        <span className="nowrap">Team, Tribe, World.</span>
                    </p>
                </div>

                {/*<p>*/}
                {/*    I help people study, text, join, choose.*/}
                {/*</p>*/}

                <Grid className={"cards"}>
                    <Link href="https://web.archive.org/web/20081201042835/http://coursescheduler.com/">
                        <Card className={"card"}>
                            <h2>CourseScheduler &rarr;</h2>
                            <p>Founder.</p>
                        </Card>
                    </Link>

                    <Link href="https://www.crunchbase.com/organization/zipwhip">
                        <Card>
                            <h2>Zipwhip &rarr;</h2>
                            <p>Co-Founder.</p>
                        </Card>
                    </Link>

                    <Link href="https://www.crunchbase.com/organization/coinme">
                        <Card>
                            <h2>Coinme &rarr;</h2>
                            <p>Entrepreneur.</p>
                        </Card>
                    </Link>

                    <Link href="https://www.evoeco.com">
                        <Card>
                            <h2>EvoEco &rarr;</h2>
                            <p>Partner.</p>
                        </Card>
                    </Link>

                    {/*<Link href="https://www.evoeco.com">*/}
                    {/*    <Card>*/}
                    {/*        <h2>Nikola Lamarr Smyers&rarr;</h2>*/}
                    {/*        <p>Father.</p>*/}
                    {/*    </Card>*/}
                    {/*</Link>*/}

                    {/*<Link href="//not-found">*/}
                    {/*    <Card>*/}
                    {/*        <h2>b-streed.build &rarr;</h2>*/}
                    {/*        <p>Builder.</p>*/}
                    {/*    </Card>*/}
                    {/*</Link>*/}

                    {/*<Link href="">*/}
                    {/*    <Card>*/}
                    {/*        <h2>DeFi &rarr;</h2>*/}
                    {/*        <p>Explorer.</p>*/}
                    {/*    </Card>*/}
                    {/*</Link>*/}

                    {/*<Link href="//smyers.net/cassandra">*/}
                    {/*    <Card>*/}
                    {/*        <h2>Crypto Brandons &rarr;</h2>*/}
                    {/*        <p>Educator.</p>*/}
                    {/*    </Card>*/}
                    {/*</Link>*/}

                    {/*<Link href="//smyers.net/cassandra">*/}
                    {/*    <Card>*/}
                    {/*        <h2>Hedgebox &rarr;</h2>*/}
                    {/*        <p>"Hedgefund in a box".</p>*/}
                    {/*    </Card>*/}
                    {/*</Link>*/}

                    {/*<Link href="//smyers.net/cassandra">*/}
                    {/*    <Card>*/}
                    {/*        <h2>Cit1 &rarr;</h2>*/}
                    {/*        <p>Universal Basic Income.</p>*/}
                    {/*    </Card>*/}
                    {/*</Link>*/}

                </Grid>

            </Main>

            <Footer/>

        </Container>
    )
}
