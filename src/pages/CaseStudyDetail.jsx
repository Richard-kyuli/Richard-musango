import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { caseStudies } from '../data/caseStudies'

// Modular Components
import HeroSection from '../components/casestudy/HeroSection'
import ProblemSection from '../components/casestudy/ProblemSection'
import SolutionSection from '../components/casestudy/SolutionSection'
import ResearchSection from '../components/casestudy/ResearchSection'
import ResultsSection from '../components/casestudy/ResultsSection'
import FinalDesignSection from '../components/casestudy/FinalDesignSection'
import KeyDesignDecisions from '../components/casestudy/KeyDesignDecisions'
import LessonsLearned from '../components/casestudy/LessonsLearned'
import KeyAchievements from '../components/casestudy/KeyAchievements'

function CaseStudyDetail() {
  const { id } = useParams()
  const study = caseStudies.find(s => s.id === id)

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <SEO title="Case Study Not Found" description="The requested case study could not be found." />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link 
            to="/case-studies" 
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="case-study-page">
      <SEO 
        title={study.title}
        description={study.overview}
      />

      <HeroSection study={study} />
      <ProblemSection study={study} />
      <SolutionSection study={study} />
      <ResearchSection study={study} />
      <KeyDesignDecisions study={study} />
      <FinalDesignSection study={study} />
      <ResultsSection study={study} />
      <LessonsLearned study={study} />
      <KeyAchievements study={study} />
    </div>
  )
}

export default CaseStudyDetail