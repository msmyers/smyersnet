import Head from "next/head";

/**
 * @param {Person} person
 */
export default function FamilyMetaData({person}) {
    return <Head>
        <title>{person.fullName} - {person.alias}</title>

        <link rel="icon" href="/favicon.ico"/>

        {/* How do I make a global site wrapper? */}
        <meta name="color-scheme" content="dark"/>

        <meta
            name="description"
            content={person.fullName}/>
    </Head>
}
