import "./SynAnt.css"

export default function SynAnt({type, data}){
    return (
        <div className="extra">
            <h4 className="extra-heading">{type}</h4>
            <div className="display">
                {data.map((d, i) => {
                    return <span className="val" key={i}>{d}&nbsp;</span>
                })}
            </div>
        </div>
    )
}