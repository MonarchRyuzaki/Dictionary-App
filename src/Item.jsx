import "./Item.css";
import SynAnt from "./SynAnt";

export default function Item({ partOfSpeech, definitions }) {
  const syn = [], ant = [];
  definitions.map((def) => {
    if (def.synonyms.length > 0){
      def.synonyms.map((s) => {
        syn.push(s);
      })
    }
    if (def.antonyms.length > 0){
      def.antonyms.map((s) => {
        ant.push(s);
      })
    }
  })
  return (
    <section className="speechwise-meaning">
      <div className="section-heading">
        <h3>{partOfSpeech}</h3>
        <div className="line"></div>
      </div>
      <div className="section-meaning">
        <h4>Meaning</h4>
        <ul>
          {definitions.map((def, i) => {
            return (
              <li key={i}>
                <div className="def">{def.definition}</div>
                <div className="example">{def.example}</div>
              </li>
            );
          })}
        </ul>
        {syn.length > 0 && <SynAnt type = "Synonymns" data = {syn}/>}
        {ant.length > 0 && <SynAnt type = "Antonymns" data = {ant}/>}
      </div>
    </section>
  );
}
