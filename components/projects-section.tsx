import { Code } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-montserrat font-bold text-navy dark:text-white mb-10 text-center flex items-center justify-center">
          <Code className="mr-3 h-9 w-9 text-blue-600" /> Key Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-navy">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-navy dark:text-white">
                Machine Learning for Product Sales Prediction
              </CardTitle>
              <CardDescription className="font-inter">
                <Link
                  href="https://github.com/duclinhwork/ShopeeSalesForecasting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  github.com/duclinhwork/ShopeeSalesForecasting
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 font-inter">
                <li>
                  Built comprehensive ML models (XGBoost, Random Forest, LSTM) to predict daily sales of Shopee
                  products.
                </li>
                <li>
                  Collected e-commerce sales data through web scraping and Selenium, and performed feature engineering.
                </li>
                <li>Integrated customer review sentiment analysis using PhoBERT to enhance prediction accuracy.</li>
                <li>Achieved significant accuracy improvements compared to baseline models.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-teal/20 text-teal dark:bg-teal/30 dark:text-white">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-teal/20 text-teal dark:bg-teal/30 dark:text-white">
                  XGBoost
                </Badge>
                <Badge variant="secondary" className="bg-teal/20 text-teal dark:bg-teal/30 dark:text-white">
                  LSTM
                </Badge>
                <Badge variant="secondary" className="bg-teal/20 text-teal dark:bg-teal/30 dark:text-white">
                  NLP
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-navy">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-navy dark:text-white">
                Cloud ETL for Ad Data Processing
              </CardTitle>
              <CardDescription className="font-inter">
                <Link
                  href="https://github.com/duclinhwork/Cloud-ETL-for-Ad-Data-Processing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  github.com/duclinhwork/Cloud-ETL-for-Ad-Data-Processing
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 font-inter">
                <li>Built Google Cloud Function for automated ETL workflows processing ad performance data.</li>
                <li>
                  Processed data files from Google Cloud Storage (GCS), transformed with Pandas, and loaded into
                  BigQuery.
                </li>
                <li>Implemented partitioning, schema updates, and data deduplication for query optimization.</li>
                <li>Developed Flask-based API for reporting with external cost and currency data integration.</li>
                <li>
                  Handled CSV and JSON files from GCS, implemented column mapping, data cleansing, and aggregations.
                </li>
                <li>Used GCS Event-Driven Architecture to trigger data processing automatically.</li>
                <li>Deleted old data within a specified date range before inserting new records.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-teal/20 text-teal dark:bg-teal/30 dark:text-white">
                  Google Cloud
                </Badge>
                <Badge variant="secondary" className="bg-teal/20 text-teal dark:bg-teal/30 dark:text-white">
                  BigQuery
                </Badge>
                <Badge variant="secondary" className="bg-teal/20 text-teal dark:bg-teal/30 dark:text-white">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-teal/20 text-teal dark:bg-teal/30 dark:text-white">
                  ETL
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
