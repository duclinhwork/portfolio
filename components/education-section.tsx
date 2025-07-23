import { GraduationCap } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-montserrat font-bold text-navy dark:text-white mb-10 text-center flex items-center justify-center">
          <GraduationCap className="mr-3 h-9 w-9 text-green-600" /> Education
        </h2>
        <div className="relative pl-8 md:pl-16">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-300 dark:bg-teal-600 rounded-full" />
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -left-2.5 md:-left-4 top-0 w-5 h-5 md:w-8 md:h-8 bg-teal rounded-full border-4 border-white dark:border-gray-800 z-10" />
              <Card className="ml-4 md:ml-8 p-6 bg-softGray dark:bg-navy shadow-lg">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-2xl font-montserrat text-navy dark:text-white">
                    Master of Information Systems
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 font-inter">
                    University of Information Technology - VNU HCMC, Ho Chi Minh City
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 dark:text-gray-400 font-inter">December 2024 – Present</p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -left-2.5 md:-left-4 top-0 w-5 h-5 md:w-8 md:h-8 bg-teal rounded-full border-4 border-white dark:border-gray-800 z-10" />
              <Card className="ml-4 md:ml-8 p-6 bg-softGray dark:bg-navy shadow-lg">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-2xl font-montserrat text-navy dark:text-white">
                    Bachelor of Data Engineering
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 font-inter">
                    HCMC University of Technology and Education (UTE), Ho Chi Minh City
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 dark:text-gray-400 mb-2 font-inter">
                    September 2020 – October 2024 | GPA: 8.01 (Distinction)
                  </p>
                  <p className="font-medium text-navy dark:text-white mb-1 font-inter">Relevant Coursework:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 font-inter">
                    <li>Big Data Analysis, Data Visualization, Data Warehousing, Data Mining</li>
                    <li>
                      Machine Learning (Linear Regression, Logistic Regression, Decision Tree, Random Forest, XGBoost,
                      K-Means, KNN, DBSCAN)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
