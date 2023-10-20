import "./Item.css";

export default function Item({ partOfSpeech, definitions }) {
  console.log(partOfSpeech, definitions);
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
                {def.synonyms.length > 0 && (
                  <div className="synonyms">
                    <span className="syn">Synonyms: </span>
                    {def.synonyms.map((s, i) => {
                      return (
                        <span key={i} className="synonym">
                          {s}
                        </span>
                      );
                    })}
                  </div>
                )}
                {def.antonyms.length > 0 && (
                  <div className="antonyms">
                    <span className="ant">Antonyms:  </span>
                    {def.antonyms.map((s, i) => {
                      return (
                        <span key={i} className="antonym">
                          {s}
                        </span>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
