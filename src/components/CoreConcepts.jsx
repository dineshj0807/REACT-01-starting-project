import { CORE_CONCEPTS } from '../data';
import CoreConcept from '../components/CoreConcept/CoreConcept.jsx';

export default function CoreConcepts() {
    return(
        <section id="core-concepts">
            <ul>
                {/* <CoreConcept {...CORE_CONCEPTS[0]} />
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} /> */}

                {CORE_CONCEPTS.map((item) => (<CoreConcept key={item.title} {...item} />))}
            </ul>
        </section>
    );
}