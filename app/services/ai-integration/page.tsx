import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Brain, Bot, BarChart3, Shield, Zap, Cpu } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "AI Integration Services | TechMaster Solutions",
  description:
    "Transform your business with AI integration services including machine learning, automation, and intelligent analytics solutions.",
}

export default function AIIntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/ai-artificial-intelligence-technology-futuristic-d.jpg"
          alt="AI Integration services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            AI Integration Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mb-6 md:mb-8">
            Transform your business with cutting-edge AI solutions, machine learning models, and intelligent automation
            to drive innovation and efficiency.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8">
              Start AI Transformation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              AI Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Comprehensive AI Integration
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              From intelligent automation to predictive analytics, we implement AI solutions that enhance your business
              operations and decision-making processes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group text-center border"
              >
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                  <service.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              AI Implementation Methodology
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We follow a structured approach to ensure successful AI integration with measurable results and seamless
              adoption.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {implementationProcess.map((step, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-sm text-center border">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-purple-700 dark:text-purple-300 font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              Technology Stack
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Advanced AI Technologies
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We leverage cutting-edge AI frameworks, machine learning libraries, and cloud platforms to deliver
              powerful AI solutions.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(aiTechStack).map(([category, techs]) => (
                <div key={category} className="text-center">
                  <h3 className="text-lg font-bold mb-4 text-purple-600 dark:text-purple-400">{category}</h3>
                  <div className="space-y-2">
                    {techs.map((tech, index) => (
                      <div key={index} className="bg-card rounded-lg p-3 text-sm font-medium border text-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/ai-analytics-dashboard-with-charts-and-data-visual.jpg"
                alt="AI analytics dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                AI Benefits
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Transform Your Business with AI
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Our AI integration services help businesses automate processes, gain insights from data, and make
                intelligent decisions that drive growth and efficiency.
              </p>
              <div className="space-y-4">
                {aiBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Embrace AI Innovation?</h2>
          <p className="text-gray-300 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Let's explore how AI can transform your business operations and unlock new opportunities for growth and
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 w-full sm:w-auto"
              >
                Get AI Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto bg-transparent"
              >
                View AI Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const aiServices = [
  {
    title: "Machine Learning Models",
    description: "Custom ML models for prediction, classification, and pattern recognition tailored to your data.",
    icon: Brain,
  },
  {
    title: "Intelligent Automation",
    description: "Automate complex business processes with AI-powered workflows and decision-making systems.",
    icon: Bot,
  },
  {
    title: "Predictive Analytics",
    description: "Advanced analytics to forecast trends, customer behavior, and business outcomes.",
    icon: BarChart3,
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis, sentiment analysis, and chatbot development for enhanced communication.",
    icon: Zap,
  },
  {
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual analysis for automated quality control.",
    icon: Cpu,
  },
  {
    title: "AI Security Solutions",
    description: "Secure AI implementations with privacy protection and ethical AI practices.",
    icon: Shield,
  },
]

const implementationProcess = [
  {
    title: "AI Assessment",
    description: "Evaluate your business needs and identify AI opportunities for maximum impact.",
  },
  {
    title: "Data Preparation",
    description: "Clean, organize, and prepare your data for AI model training and deployment.",
  },
  {
    title: "Model Development",
    description: "Build and train custom AI models using advanced machine learning techniques.",
  },
  {
    title: "Integration & Deployment",
    description: "Seamlessly integrate AI solutions into your existing systems and workflows.",
  },
]

const aiTechStack = {
  "ML Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
  "Cloud AI": ["AWS AI", "Google AI", "Azure AI", "OpenAI", "Anthropic"],
  Languages: ["Python", "R", "Julia", "Scala", "JavaScript"],
  Tools: ["Jupyter", "MLflow", "Docker", "Kubernetes", "Apache Spark"],
}

const aiBenefits = [
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and optimize workflows to boost productivity by up to 40%.",
  },
  {
    title: "Data-Driven Insights",
    description: "Extract valuable insights from your data to make informed business decisions.",
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs through intelligent automation and process optimization.",
  },
  {
    title: "Enhanced Customer Experience",
    description: "Personalize customer interactions and improve service quality with AI-powered solutions.",
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of the competition with innovative AI solutions and intelligent capabilities.",
  },
]
