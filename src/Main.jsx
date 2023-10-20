import Heading from "./Heading";
import Item from "./Item";

export default function Main({data}){
    const word = data.word;
    let phonetic, audio;
    for (let d in data.phonetics){
        phonetic = data.phonetics[d].text;
        audio = data.phonetics[d].audio;
        if (phonetic && audio){
            break;
        }
    }
    const meanings = data.meanings;
    return (
        <section>
            <Heading word = {word} phonetic={phonetic} audio={audio}/>{
                meanings.map((m, i) => {
                    return <Item key = {i}  {...m}/>
                })
            }
        </section>
    )
}