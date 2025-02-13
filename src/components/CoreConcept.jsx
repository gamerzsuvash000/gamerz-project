import CoreConcept from './CoreConcept.js'
import { CORE_CONCEPTS } from '../data.js';


export default function YouTuberList () {
    return (
        <section id="core-concepts">
            <h2>YouTuber</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                  <CoreConcept key={conceptItem.title} {...conceptItem} />
                ))}
            </ul>
        </section>
    );
}