import ResultsAccordion from "../components/results-accordion";
import { semesters_results } from '@/lib/dummy-data'

export default function Results(){

    return(
        <div className="p-5 lg:px-20">
        <h2 className="text-lg lg:text-2xl py-5 text-center lg:text-left">Results</h2>
        {semesters_results.map((semester, index) => (
            <ResultsAccordion key={index} semester={semester.semester} results={semester.results} />
        ))}
        </div>
    )
}