import CSS from "../styles/FamilyMemberPage.module.scss";

export default function FamilyValues({person, values}) {
    values = values || person.values || ['No Values']
    return <div className={CSS.values_wrap}>
        <p className={CSS.values}>
            {values.map((value) => <span className="nowrap">{value}</span>)}
        </p>
    </div>
}
