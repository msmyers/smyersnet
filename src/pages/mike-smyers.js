import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Typed from 'react-typed';

// import Home from '../styles/Home.module.scss';
import CSS from '../styles/FamilyMemberPage.module.scss';
import SmyersFamily from "../lib/SmyersFamily";
import BackToFamily from "../components/BackToFamily";
import FamilyMetaData from "../components/FamilyMetaData";
import FamilyValues from "../components/FamilyValues";
import FamilyStrings from "../components/FamilyStrings";

const MIKE = SmyersFamily.findByFullName('Mike Smyers');

export default function MikeSmyers() {
    const person = MIKE;

    return (
        <Container>
            <FamilyMetaData person={person}/>

            <BackToFamily/>

            <Main>
                {/*<h1 className={CSS.title}>*/}
                {/*    <Typed strings={person.strings} typeSpeed={40}/>*/}
                {/*    <a className="test" href="https://www.smyers.net">Smyers</a>*/}
                {/*</h1>*/}

                <FamilyStrings person={person}/>

                <FamilyValues person={person}/>

            </Main>

            <Footer/>

        </Container>
    )
}
