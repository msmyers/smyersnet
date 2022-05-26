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
import SmyersFamily from "../lib/SmyersFamily";

function FamilyMetaData({person}) {
    return <Head>
        <title>{person.fullName} - mks4fun</title>

        <link rel="icon" href="/favicon.ico"/>

        {/* How do I make a global site wrapper? */}
        <meta name="color-scheme" content="dark"/>

        <meta
            name="description"
            content="Mike Smyers"/>
    </Head>
}

const person = SmyersFamily.findByFullName('Mike Smyers');

function BackToFamily() {
    return <a className={CSS.back} href="/">&larr; Smyers</a>;
}

function FamilyValues() {
    return <div className={CSS.values_wrap}>
        <p className={CSS.values}>
            <span className="nowrap">I know everything (<em>worthwhile</em>) knowing...</span>
        </p>
    </div>
}

export default function MikeSmyers() {
    return (
        <Container>
            <FamilyMetaData person={{person}}/>

            <BackToFamily />

            <Main>
                <h1 className={CSS.title}>
                    <Typed strings={['Michael', 'Michael K.', 'Mike']} typeSpeed={40}/>
                    <a className="test" href="https://www.smyers.net">Smyers</a>
                </h1>


                <FamilyValues />

            </Main>

            <Footer/>

        </Container>
    )
}
