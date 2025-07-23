import { Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-softGray dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-montserrat font-bold text-navy dark:text-white mb-10 text-center flex items-center justify-center">
          <Sparkles className="mr-3 h-9 w-9 text-purple-600" /> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-inter">
            <p className="mb-4">
              Highly motivated and results-driven Data Analyst and Data Engineer with a strong background in ETL
              development, data warehousing, and applying AI/ML models to solve complex business problems.
            </p>
            <p className="mb-4">
              Proven ability to transform raw data into actionable insights, optimize data pipelines, and enhance system
              capabilities through innovative solutions. Eager to leverage expertise in data analysis, machine learning,
              and cloud platforms to drive strategic decision-making and improve operational efficiency.
            </p>
            <p>
              Currently pursuing a Master’s in Information Systems, I am passionate about driving impact through
              data-driven strategies.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-white dark:bg-navy shadow-lg border-l-4 border-teal">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-navy dark:text-white mb-2 font-montserrat">2+ Years</h3>
                <p className="text-gray-600 dark:text-gray-400 font-inter">Experience in Data & Analytics</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white dark:bg-navy shadow-lg border-l-4 border-teal">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-navy dark:text-white mb-2 font-montserrat">GPA 8.01</h3>
                <p className="text-gray-600 dark:text-gray-400 font-inter">Bachelor of Data Engineering</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white dark:bg-navy shadow-lg border-l-4 border-teal">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-navy dark:text-white mb-2 font-montserrat">2nd Place</h3>
                <p className="text-gray-600 dark:text-gray-400 font-inter">MoMo GenAI Innovation Award</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
