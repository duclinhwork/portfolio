import { Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CertificationsAwardsSection() {
  const certifications = [
    { name: "1st Place, MIAI Contest (AI Application Competition)", icon: "🏆" },
    { name: "2nd Place, MoMo’s Internal Master Challenge (GenAI Innovation)", icon: "🥈" },
    { name: "HackerRank: SQL (Advanced), Problem Solving (Intermediate)", icon: "💻" },
    { name: "Coursera: Marketing Analytics Foundation, Data Science Math Skills", icon: "🎓" },
    { name: "English: VSTEP B1 (Level 3/6)", icon: "🗣️" },
  ]

  return (
    <section id="certifications" className="py-16 bg-softGray dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-montserrat font-bold text-navy dark:text-white mb-10 text-center flex items-center justify-center">
          <Award className="mr-3 h-9 w-9 text-red-600" /> Certifications & Awards
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 flex items-start space-x-4 dark:bg-navy hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl">{cert.icon}</div>
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 dark:text-gray-300 font-inter">{cert.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
