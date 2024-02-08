import ResultsAccordion from "../components/results-accordion";
import { semesters_results } from '@/lib/dummy-data'
import Nav from '../components/nav';
import StudentQuickTabs from "../components/student-quick-tabs";
export default function Results(){
    // const [results, setResults] = useState();
    // useEffect(() => {
    //     getResults();
    //     async function getResults(){
    //       await fetch('http://localhost:8000/api/resource/Assessment Result?fields=["grading_scale", "maximum_score", "total_score", "course", "academic_term"]', {
    //       headers: {
    //           'Authorization': `token ${process.env.NEXT_PUBLIC_FRAPPE_API_KEY}:${process.env.NEXT_PUBLIC_FRAPPE_API_SECRET}`
    //       }
    //       })
    //       .then(res => res.json())
    //       .then(r => setResults(r.data));
    //     }
    //   }, [])
    return(
        <>
            <Nav/>
            <StudentQuickTabs/>
            <div className="p-5 lg:px-20">
            <h2 className="text-lg lg:text-2xl py-5 text-center lg:text-left">Results</h2>
            {semesters_results.map((semester, index) => (
                <ResultsAccordion key={index} semester={semester.semester} results={semester.results} />
            ))}
            </div>
        </>
    )
}