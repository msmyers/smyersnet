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
import SmyersFamily from "../lib/SmyersFamily";
import FamilyMetaData from "../components/FamilyMetaData";
import BackToFamily from "../components/BackToFamily";
import FamilyStrings from "../components/FamilyStrings";
import FamilyValues from "../components/FamilyValues";
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

export default function RobinSmyers() {
    const person = SmyersFamily.findByFullName('Robin Smyers');

    return (
        <Container>
            <FamilyMetaData person={person} />

            <BackToFamily />

            <Main>
                <FamilyStrings person={person} strings={person.strings} />

                <FamilyValues person={person} />
                {/*<div className={CSS.values_wrap}>*/}
                {/*    <p className={CSS.values}>*/}
                {/*        <Typed strings={strings} typeSpeed={50}/>*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/*<Grid>*/}
                {/*    /!*import Masonry from "react-responsive-masonry"*!/*/}
                {/*    /!*...*!/*/}
                {/*    <Masonry columnsCount={3}>*/}
                {/*        {photos.map((image) => (*/}
                {/*            <img key={image.src} src={image.src}  alt={'asdf'}/>*/}
                {/*        ))}*/}
                {/*    </Masonry>*/}
                {/*    /!*<Gallery photos={photos} direction={'row'}/>*!/*/}
                {/*</Grid>*/}

            </Main>

            <Footer/>

        </Container>
    )
}
