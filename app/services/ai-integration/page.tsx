import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	CheckCircle,
	Brain,
	Bot,
	BarChart3,
	Shield,
	Zap,
	Cpu,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata = {
	title: "AI Integration Services | TechMaster Solutions",
	description:
		"Transform your business with AI integration services including machine learning, automation, and intelligent analytics solutions.",
};

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
						Transform your business with cutting-edge AI solutions,
						machine learning models, and intelligent automation to
						drive innovation and efficiency.
					</p>
					<Link href="/contact">
						<Button
							size="lg"
							className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8"
						>
							Start AI Transformation
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</section>

			{/* About AI Integration */}
			<section className="py-12 md:py-20 bg-background">
				<div className="container mx-auto px-4 max-w-5xl">
					<div className="text-center mb-10 md:mb-14">
						<div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
							About Dexter Trade Ltd
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
							AI-Driven Digital Growth Solutions
						</h2>
						<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
							Dexter Trade Ltd offers comprehensive digital growth
							solutions, combining expert media marketing with
							universal AI integration to future-proof your
							business. We elevate your brand by strategically
							running highly effective Meta and Google Ads,
							designing compelling graphics, and providing
							professional social presence management.
							<br />
							<br />
							Crucially, we specialize in seamless AI integrations
							that transition your operations—from manual to
							intelligent automation—across any platform. Whether
							it’s optimizing your internal workflows,
							streamlining your existing CRM, enhancing your
							website functionality, or upgrading specific
							operational systems, we handle the complex, hectic
							task of infusing AI into your current setup.
							<br />
							<br />
							Partner with us to gain maximum efficiency, a
							competitive marketing edge, and a successful leap
							into the future.
						</p>
					</div>
				</div>
			</section>

			{/* AI Integration Capabilities */}
			<section className="py-12 md:py-20 bg-muted/50">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="text-center mb-10 md:mb-14">
						<div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
							AI Integration Capabilities
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
							How We Bring AI Into Your Business
						</h2>
						<p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
							We help businesses harness the power of Artificial
							Intelligence by integrating intelligent systems into
							their existing workflows or building new AI-driven
							solutions from the ground up.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 gap-8 md:gap-10">
						{aiCapabilities.map((item, index) => (
							<div
								key={index}
								className="flex items-start"
							>
								<CheckCircle className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
								<div>
									<h3 className="font-semibold text-lg text-foreground mb-1">
										{item.title}
									</h3>
									<p className="text-muted-foreground text-sm sm:text-base">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Implementation Process */}
			<section className="py-12 md:py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
						<div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
							Our Process
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
							AI Implementation Methodology
						</h2>
						<p className="text-base md:text-lg text-muted-foreground">
							We follow a structured approach to ensure successful
							AI integration with measurable results and seamless
							adoption.
						</p>
					</div>
					<div className="max-w-5xl mx-auto">
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
							{implementationProcess.map((step, index) => (
								<div
									key={index}
									className="bg-card rounded-2xl p-6 shadow-sm text-center border"
								>
									<div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
										<span className="text-blue-700 dark:text-blue-300 font-bold text-lg">
											{index + 1}
										</span>
									</div>
									<h3 className="text-lg font-bold mb-3 text-foreground">
										{step.title}
									</h3>
									<p className="text-muted-foreground text-sm">
										{step.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* AI Technologies */}
			{/* <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
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
                  <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
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
      </section> */}

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
							<div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
								AI Benefits
							</div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
								Transform Your Business with AI
							</h2>
							<p className="text-base md:text-lg text-muted-foreground mb-8">
								Our AI integration services help businesses
								automate processes, gain insights from data, and
								make intelligent decisions that drive growth and
								efficiency.
							</p>
							<div className="space-y-4">
								{aiBenefits.map((benefit, index) => (
									<div
										key={index}
										className="flex items-start"
									>
										<CheckCircle className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
										<div>
											<h3 className="font-semibold text-base md:text-lg text-foreground">
												{benefit.title}
											</h3>
											<p className="text-muted-foreground text-sm sm:text-base">
												{benefit.description}
											</p>
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
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
						Ready to Embrace AI Innovation?
					</h2>
					<p className="text-gray-300 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
						Let's explore how AI can transform your business
						operations and unlock new opportunities for growth and
						efficiency.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact">
							<Button
								size="lg"
								className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 w-full sm:w-auto"
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
	);
}

const aiServices = [
	{
		title: "Machine Learning Models",
		description:
			"Custom ML models for prediction, classification, and pattern recognition tailored to your data.",
		icon: Brain,
	},
	{
		title: "Intelligent Automation",
		description:
			"Automate complex business processes with AI-powered workflows and decision-making systems.",
		icon: Bot,
	},
	{
		title: "Predictive Analytics",
		description:
			"Advanced analytics to forecast trends, customer behavior, and business outcomes.",
		icon: BarChart3,
	},
	{
		title: "Natural Language Processing",
		description:
			"Text analysis, sentiment analysis, and chatbot development for enhanced communication.",
		icon: Zap,
	},
	{
		title: "Computer Vision",
		description:
			"Image recognition, object detection, and visual analysis for automated quality control.",
		icon: Cpu,
	},
	{
		title: "AI Security Solutions",
		description:
			"Secure AI implementations with privacy protection and ethical AI practices.",
		icon: Shield,
	},
];

const implementationProcess = [
	{
		title: "AI Assessment",
		description:
			"Evaluate your business needs and identify AI opportunities for maximum impact.",
	},
	{
		title: "Data Preparation",
		description:
			"Clean, organize, and prepare your data for AI model training and deployment.",
	},
	{
		title: "Model Development",
		description:
			"Build and train custom AI models using advanced machine learning techniques.",
	},
	{
		title: "Integration & Deployment",
		description:
			"Seamlessly integrate AI solutions into your existing systems and workflows.",
	},
];

const aiTechStack = {
	"ML Frameworks": [
		"TensorFlow",
		"PyTorch",
		"Scikit-learn",
		"Keras",
		"XGBoost",
	],
	"Cloud AI": ["AWS AI", "Google AI", "Azure AI", "OpenAI", "Anthropic"],
	Languages: ["Python", "R", "Julia", "Scala", "JavaScript"],
	Tools: ["Jupyter", "MLflow", "Docker", "Kubernetes", "Apache Spark"],
};

const aiBenefits = [
	{
		title: "Increased Efficiency",
		description:
			"Automate repetitive tasks and optimize workflows to boost productivity by up to 40%.",
	},
	{
		title: "Data-Driven Insights",
		description:
			"Extract valuable insights from your data to make informed business decisions.",
	},
	{
		title: "Cost Reduction",
		description:
			"Reduce operational costs through intelligent automation and process optimization.",
	},
	{
		title: "Enhanced Customer Experience",
		description:
			"Personalize customer interactions and improve service quality with AI-powered solutions.",
	},
	{
		title: "Competitive Advantage",
		description:
			"Stay ahead of the competition with innovative AI solutions and intelligent capabilities.",
	},
];

const aiCapabilities = [
  {
    title: "Integrate AI into Existing Systems",
    description:
      "Enhance your current CRM, ERP, or management tools by embedding AI-driven automation, analytics, and decision support.",
  },
  {
    title: "Custom AI Model Development",
    description:
      "We design and train machine learning models tailored to your business needs, enabling predictive insights and automation.",
  },
  {
    title: "Third-Party AI API Integration",
    description:
      "Connect and leverage APIs from OpenAI, Google AI, Anthropic, or AWS to add intelligence to your applications.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive and time-consuming tasks using AI agents and intelligent process orchestration.",
  },
  {
    title: "Data-Driven Optimization",
    description:
      "Use data analytics and machine learning to optimize operations, reduce costs, and improve business outcomes.",
  },
  {
    title: "AI-Powered Chatbots & Assistants",
    description:
      "Deploy conversational AI systems to enhance customer experience and internal productivity.",
  },
  {
    title: "AI Integration for Websites & Apps",
    description:
      "Add smart search, recommendations, content generation, and other AI enhancements directly into your web or mobile apps.",
  },
  {
    title: "AI Maintenance & Continuous Improvement",
    description:
      "We monitor, retrain, and improve your AI systems to ensure long-term accuracy, reliability, and efficiency.",
  },
]
