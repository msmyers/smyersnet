import Head from 'next/head'

import Link from 'next/link'
import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Typed from 'react-typed';

// import Home from '../styles/Home.module.scss';
import CSS from '../styles/FamilyMemberPage.module.scss';
import Masonry from "react-responsive-masonry";
import {useEffect, useState} from "react";
// import Gallery from "react-photo-gallery";

const strings = [
    'My name is Robin Smyers',
    'I love the beauty of the earth.',
    'I love empowering people.',
    'I love my family.',
    // TODO: how great would it be if it was a list of moms sayings...
    // 'Life never stays up and never stays down, so enjoy both.',
    // '',
]

// https://picsum.photos/200/300
const photos = [
    {
        src: '../robin/IMG_3823.jpeg',
        height: 1,
        width: 1,
    },
    {
        src: '../robin/IMG_8409.jpeg',
        height: 1,
        width: 1,
    },
];

export default function RobinSmyers() {
    const [classes, setClasses] = useState([])

    return (
        <Container>
            <Head>
                <title>Robin Smyers - rbs</title>

                <link rel="icon" href="/favicon.ico"/>

                {/* How do I make a global site wrapper? */}
                <meta name="color-scheme" content="dark"/>

                <meta
                    name="description"
                    content="Robin Smyers"/>

            </Head>

            <a className={CSS.back} href="/">&larr; Smyers</a>

            <Main>
                <h1 className={CSS.title}>
                    <Typed strings={['Robin', 'Robin B.']} typeSpeed={40} stopped={false} className={classes}
                           onComplete={(typed) => console.log(`complete`, typed.stop(true), setClasses(['typed-complete']))}/>
                    <a className="test" href="https://www.smyers.net">Smyers</a>
                </h1>

                <div className={CSS.values_wrap}>
                    <p className={CSS.values}>
                        <Typed strings={strings} typeSpeed={50} />
                    </p>
                </div>

                <Grid>
                    {/*import Masonry from "react-responsive-masonry"*/}
                    {/*...*/}
                    <Masonry columnsCount={3}>
                        {photos.map((image) => (
                            <img key={image.src} src={image.src}  alt={'asdf'}/>
                        ))}
                    </Masonry>
                    {/*<Gallery photos={photos} direction={'row'}/>*/}
                </Grid>

                {/*<p>*/}
                {/*    I help people study, text, join, choose.*/}
                {/*</p>*/}

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

                {/*    /!*<Link href="https://www.evoeco.com">*!/*/}
                {/*    /!*    <Card>*!/*/}
                {/*    /!*        <h2>Nikola Lamarr Smyers&rarr;</h2>*!/*/}
                {/*    /!*        <p>Father.</p>*!/*/}
                {/*    /!*    </Card>*!/*/}
                {/*    /!*</Link>*!/*/}

                {/*    /!*<Link href="//not-found">*!/*/}
                {/*    /!*    <Card>*!/*/}
                {/*    /!*        <h2>b-streed.build &rarr;</h2>*!/*/}
                {/*    /!*        <p>Builder.</p>*!/*/}
                {/*    /!*    </Card>*!/*/}
                {/*    /!*</Link>*!/*/}

                {/*    /!*<Link href="">*!/*/}
                {/*    /!*    <Card>*!/*/}
                {/*    /!*        <h2>DeFi &rarr;</h2>*!/*/}
                {/*    /!*        <p>Explorer.</p>*!/*/}
                {/*    /!*    </Card>*!/*/}
                {/*    /!*</Link>*!/*/}

                {/*    /!*<Link href="//smyers.net/cassandra">*!/*/}
                {/*    /!*    <Card>*!/*/}
                {/*    /!*        <h2>Crypto Brandons &rarr;</h2>*!/*/}
                {/*    /!*        <p>Educator.</p>*!/*/}
                {/*    /!*    </Card>*!/*/}
                {/*    /!*</Link>*!/*/}

                {/*    /!*<Link href="//smyers.net/cassandra">*!/*/}
                {/*    /!*    <Card>*!/*/}
                {/*    /!*        <h2>Hedgebox &rarr;</h2>*!/*/}
                {/*    /!*        <p>"Hedgefund in a box".</p>*!/*/}
                {/*    /!*    </Card>*!/*/}
                {/*    /!*</Link>*!/*/}

                {/*    /!*<Link href="//smyers.net/cassandra">*!/*/}
                {/*    /!*    <Card>*!/*/}
                {/*    /!*        <h2>Cit1 &rarr;</h2>*!/*/}
                {/*    /!*        <p>Universal Basic Income.</p>*!/*/}
                {/*    /!*    </Card>*!/*/}
                {/*    /!*</Link>*!/*/}

                {/*</Grid>*/}

            </Main>

            <Footer/>

        </Container>
    )
}
