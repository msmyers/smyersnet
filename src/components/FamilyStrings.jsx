import CSS from "../styles/FamilyMemberPage.module.scss";
import Typed from "react-typed";
import {useState} from "react";

export default function FamilyStrings({person, strings}) {
    const [classes, setClasses] = useState([])

    strings = strings || person.strings

    // return <h1 className={CSS.title}>
    //     <Typed strings={person.strings} typeSpeed={40}/>
    //     <a className="test" href="/">Smyers</a>
    // </h1>
    return <h1 className={CSS.title}>
        <Typed strings={strings} typeSpeed={40} stopped={false} className={classes}
               onComplete={(typed) => console.log(`complete`, typed.stop(true), setClasses(['typed-complete']))}/>
        <a className="test" href="/">Smyers</a>
    </h1>
}