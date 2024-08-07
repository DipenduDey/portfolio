import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts() {

    return (

        <section id="core-concepts">

            <h2>Time to get started!</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptData) => (<CoreConcept key={conceptData.title} {...conceptData} />))}
            </ul>
        </section>
    )
}