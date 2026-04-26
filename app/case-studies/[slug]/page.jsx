import { caseStudies } from '../../../src/data/caseStudies'
import CaseStudyPage from '../../../src/components/CaseStudyPage'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default async function Page({ params }) {
  const { slug } = await params
  return <CaseStudyPage slug={slug} />
}
