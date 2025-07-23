import { Briefcase } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-softGray dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-montserrat font-bold text-navy dark:text-white mb-10 text-center flex items-center justify-center">
          <Briefcase className="mr-3 h-9 w-9 text-orange-600" /> Experience
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-6">
          <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-navy">
            <AccordionItem value="item-1" className="border-none">
              <CardHeader className="p-6 pb-0">
                <AccordionTrigger className="flex justify-between items-center text-left hover:no-underline">
                  <div>
                    <CardTitle className="text-2xl font-montserrat text-navy dark:text-white">Data Analyst</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 font-inter">
                      MoMo (M_Service) | July 2024 – Present
                    </CardDescription>
                  </div>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent className="pt-0">
                <CardContent className="p-6 pt-0">
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 font-inter">
                    <li>
                      Analyzed chatbot response errors to identify root causes (data issues, NLP logic, process flaws)
                      and proposed systematic improvements and process optimizations, boosting CSAT in the first month
                      and meeting the year’s CSAT goal early.
                    </li>
                    <li>
                      Built real-time chatbot performance monitoring dashboards and implemented automated alert systems
                      for data anomalies and customer issue detection.
                    </li>
                    <li>
                      Applied AI models for sentiment analysis, customer issue categorization, and content
                      summarization.
                    </li>
                    <li>
                      Researched and implemented advanced techniques including Prompt Engineering, RAG
                      (Retrieval-Augmented Generation), LLM, and Knowledge Base integration to enhance chatbot
                      capabilities.
                    </li>
                    <li>Automated query scheduling and task distribution using n8n workflow automation.</li>
                    <li>
                      Collaborated with NLP and Customer Service teams on project delivery and participated in defining
                      key performance metrics and KPIs for chatbot effectiveness.
                    </li>
                    <li>
                      Designed, developed, and maintained 3 end-to-end ETL pipelines using Airflow and BigQuery,
                      aggregating data from multiple sources with optimized partitioning and schema design, reducing
                      data processing latency by 20%.
                    </li>
                    <li>
                      Maintained Airflow tasks, performed data backfills, resolved pipeline incidents, and updated
                      business logic for changing requirements (logic changes, new tracking implementations).
                    </li>
                    <li>
                      Built a comprehensive Data Catalog for ETL tables by combining GenAI with code-based linear
                      relationship mapping to generate accurate and contextual metadata.
                    </li>
                    <li>
                      Reviewed and consolidated tables by identifying unused or redundant ones and merging them into
                      shared sources to reduce resource waste.
                    </li>
                    <li>
                      Revamped existing dashboards for optimal monitoring and performance tracking, created new
                      dashboards for feature launches and marketing campaign tracking, and owned the weekly and monthly
                      performance reporting process.
                    </li>
                    <li>
                      Analyzed event tracking data to identify user behavior trends and actionable patterns, performed
                      deep-dive analysis on key business metrics to drive actionable insights and strategic
                      recommendations.
                    </li>
                    <li>
                      Investigated metric declines and calculated technical incident impacts on business performance.
                    </li>
                    <li>
                      Partnered with product, engineering, and business teams to investigate root-cause data anomalies,
                      refine data tracking logic, define and validate new events, and ensure data accuracy.
                    </li>
                    <li>
                      Participated in internal MiMir Contest, building QA chatbot using LLM, and achieved 2nd place in
                      MoMo&apos;s internal GenAI innovation competition.
                    </li>
                  </ul>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-navy">
            <AccordionItem value="item-2" className="border-none">
              <CardHeader className="p-6 pb-0">
                <AccordionTrigger className="flex justify-between items-center text-left hover:no-underline">
                  <div>
                    <CardTitle className="text-2xl font-montserrat text-navy dark:text-white">
                      MIS Analyst Intern
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 font-inter">
                      Collectius, Ho Chi Minh City | July 2023 – October 2023
                    </CardDescription>
                  </div>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent className="pt-0">
                <CardContent className="p-6 pt-0">
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 font-inter">
                    <li>
                      Developed API for automated customer list allocation to Call Center teams, reducing processing
                      time from 1 hour to near real-time and increasing customer outreach efficiency by 20%.
                    </li>
                    <li>
                      Built SSIS pipeline for daily data updates and automated email reporting, shortening reporting
                      cycle from overnight to same-day and reducing processing time by 50%.
                    </li>
                    <li>
                      Created Python automation tools for document retrieval, reducing daily execution time from 3 hours
                      to 30 minutes.
                    </li>
                    <li>Developed data preprocessing tools for bank statement filtering and extraction.</li>
                    <li>
                      Built various operational support tools: fee calculation, document processing, allocation
                      management.
                    </li>
                    <li>
                      Designed and deployed Power BI dashboards for 5 departments (60+ employees), enhanced existing
                      dashboards with MoM comparisons, and optimized visualizations.
                    </li>
                    <li>Developed comprehensive reports for sales performance, employee bonuses, and KPI tracking.</li>
                    <li>
                      Created automated Excel templates for weekly target calculations and annual leave management.
                    </li>
                    <li>Wrote complex SQL queries for database exploration and report preparation.</li>
                    <li>
                      Performed daily chart monitoring and anomaly detection with cross-departmental coordination.
                    </li>
                    <li>
                      Provided ad-hoc data, reports, and customer lists for Call Center, Finance, and Risk Management
                      teams.
                    </li>
                    <li>Documented business processes, variable definitions, and workflow procedures.</li>
                    <li>Mastered data warehouse connections, SSIS setup, and database structure exploration.</li>
                    <li>Researched advanced Power BI visualization tools (Deneb, Charticulator).</li>
                  </ul>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
      </div>
    </section>
  )
}
