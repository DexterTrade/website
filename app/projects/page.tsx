import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
	id: string;
	title: string;
	category: string;
	description: string;
	image: string;
}

export const metadata = {
	title: "Our Projects | TechSolutions",
	description:
		"Explore TechSolutions' portfolio of completed technology projects across e-commerce, software development, media marketing, and cloud services.",
};

export default function ProjectsPage() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero Section */}
			<section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
				<div className="absolute inset-0 bg-black/60 z-10" />
				<Image
					src="/modern-tech-office-developers.png"
					alt="Technology projects"
					fill
					className="object-cover"
					priority
					sizes="100vw"
				/>
				<div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
						Our Projects
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl">
						Explore our portfolio of successful technology projects
						that showcase our expertise in digital innovation and
						cutting-edge solutions.
					</p>
				</div>
			</section>

			{/* Projects Gallery */}
			<section className="py-12 md:py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
						<div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3 md:mb-4">
							Our Portfolio
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
							Featured Projects
						</h2>
						<p className="text-base md:text-lg text-gray-700">
							Browse through our diverse portfolio of completed
							technology projects across various digital sectors.
						</p>
					</div>

					<div className="max-w-6xl mx-auto">
						<Tabs
							defaultValue="all"
							className="mb-8 md:mb-12"
						>
							<div className="flex justify-center overflow-x-auto pb-2 -mx-4 px-4">
								<TabsList className="flex space-x-2 p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
									<TabsTrigger
										value="all"
										className="px-4 py-2 text-sm rounded-md"
									>
										All
									</TabsTrigger>
									<TabsTrigger
										value="ecommerce"
										className="px-4 py-2 text-sm rounded-md"
									>
										E-commerce
									</TabsTrigger>
									<TabsTrigger
										value="software"
										className="px-4 py-2 text-sm rounded-md"
									>
										Software
									</TabsTrigger>
									<TabsTrigger
										value="marketing"
										className="px-4 py-2 text-sm rounded-md"
									>
										Marketing
									</TabsTrigger>
									<TabsTrigger
										value="cloud"
										className="px-4 py-2 text-sm rounded-md"
									>
										Cloud
									</TabsTrigger>
								</TabsList>
							</div>

							<TabsContent
								value="all"
								className="mt-6 md:mt-8"
							>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
									{projects.map((project, index) => (
										<ProjectCard
											key={index}
											project={project}
										/>
									))}
								</div>
							</TabsContent>

							<TabsContent
								value="ecommerce"
								className="mt-6 md:mt-8"
							>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
									{projects
										.filter(
											(project) =>
												project.category ===
												"E-commerce"
										)
										.map((project, index) => (
											<ProjectCard
												key={index}
												project={project}
											/>
										))}
								</div>
							</TabsContent>

							<TabsContent
								value="software"
								className="mt-6 md:mt-8"
							>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
									{projects
										.filter(
											(project) =>
												project.category ===
												"Software Development"
										)
										.map((project, index) => (
											<ProjectCard
												key={index}
												project={project}
											/>
										))}
								</div>
							</TabsContent>

							<TabsContent
								value="marketing"
								className="mt-6 md:mt-8"
							>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
									{projects
										.filter(
											(project) =>
												project.category ===
												"Media Marketing"
										)
										.map((project, index) => (
											<ProjectCard
												key={index}
												project={project}
											/>
										))}
								</div>
							</TabsContent>

							<TabsContent
								value="cloud"
								className="mt-6 md:mt-8"
							>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
									{projects
										.filter(
											(project) =>
												project.category ===
												"Cloud Services"
										)
										.map((project, index) => (
											<ProjectCard
												key={index}
												project={project}
											/>
										))}
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-12 md:py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
						<div>
							<div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3 md:mb-4">
								Our Approach
							</div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
								How We Deliver Excellence
							</h2>
							<p className="text-base md:text-lg text-gray-700 mb-6">
								Every technology project we undertake follows a
								rigorous development process to ensure quality,
								scalability, and client satisfaction.
							</p>
							<div className="space-y-4 md:space-y-6">
								<div className="flex items-start">
									<div className="bg-blue-100 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
										<span className="text-blue-700 font-bold text-sm md:text-base">
											1
										</span>
									</div>
									<div>
										<h3 className="font-semibold text-base md:text-lg">
											Strategic Planning
										</h3>
										<p className="text-gray-700 text-sm md:text-base">
											We begin with comprehensive analysis
											to establish clear objectives,
											technical requirements, and project
											roadmaps.
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="bg-blue-100 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
										<span className="text-blue-700 font-bold text-sm md:text-base">
											2
										</span>
									</div>
									<div>
										<h3 className="font-semibold text-base md:text-lg">
											Modern Technologies
										</h3>
										<p className="text-gray-700 text-sm md:text-base">
											We leverage cutting-edge
											technologies and frameworks to
											ensure scalability and future-proof
											solutions.
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="bg-blue-100 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
										<span className="text-blue-700 font-bold text-sm md:text-base">
											3
										</span>
									</div>
									<div>
										<h3 className="font-semibold text-base md:text-lg">
											Agile Development
										</h3>
										<p className="text-gray-700 text-sm md:text-base">
											Our experienced development team
											follows agile methodologies with
											continuous integration and testing.
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="bg-blue-100 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
										<span className="text-blue-700 font-bold text-sm md:text-base">
											4
										</span>
									</div>
									<div>
										<h3 className="font-semibold text-base md:text-lg">
											Quality Assurance
										</h3>
										<p className="text-gray-700 text-sm md:text-base">
											We conduct thorough testing and
											optimization at every stage to
											maintain our high performance
											standards.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl mt-8 md:mt-0">
							<Image
								src="/developers-modern-tech.png"
								alt="Development process"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 md:py-20 bg-gray-900 text-white">
				<div className="container mx-auto px-4 text-center max-w-4xl">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
						Ready to Start Your Project?
					</h2>
					<p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10">
						Contact us today to discuss how we can bring your
						digital vision to life with the same excellence
						showcased in our technology portfolio.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<Link href="/contact">
							<Button
								size="lg"
								className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
							>
								Get in Touch
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="overflow-hidden group h-full">
			<div className="relative h-48 sm:h-56 md:h-64 w-full">
				<Image
					src={project.image || "/placeholder.svg"}
					alt={project.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-110"
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
					<div className="p-4 md:p-6 w-full">
						<h3 className="text-lg md:text-xl font-bold text-white">
							{project.title}
						</h3>
						<p className="text-blue-300 mb-4">{project.category}</p>
						<Link href={`/projects/${project.id}`}>
							<Button
								variant="outline"
								className="text-white border-white hover:bg-white/20 bg-transparent"
							>
								View Details
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<CardHeader className="p-4 md:p-6">
				<CardTitle className="text-lg md:text-xl">
					{project.title}
				</CardTitle>
				<CardDescription className="text-blue-600">
					{project.category}
				</CardDescription>
			</CardHeader>
			<CardContent className="p-4 pt-0 md:p-6 md:pt-0">
				<p className="text-gray-700 text-sm sm:text-base">
					{project.description}
				</p>
			</CardContent>
			<CardFooter className="p-4 md:p-6 pt-0">
				<Link href={`/projects/${project.id}`}>
					<Button
						variant="outline"
						className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-sm sm:text-base bg-transparent"
					>
						View Details
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}

// Sample data
const projects: Project[] = [
	{
		id: "ecommerce-platform",
		title: "Global E-commerce Platform",
		category: "E-commerce",
		description:
			"A scalable multi-vendor marketplace with advanced analytics, payment integration, and mobile-first design serving 100K+ users.",
		image: "/modern-ecommerce-devices.png",
	},
	{
		id: "fintech-app",
		title: "FinTech Mobile Application",
		category: "Software Development",
		description:
			"Secure banking app with biometric authentication, real-time transactions, and AI-powered financial insights.",
		image: "/developers-modern-tech.png",
	},
	{
		id: "brand-campaign",
		title: "Digital Brand Campaign",
		category: "Media Marketing",
		description:
			"Comprehensive digital marketing strategy that increased brand awareness by 300% across social media platforms.",
		image: "/placeholder-pelw2.png",
	},
	{
		id: "cloud-infrastructure",
		title: "Enterprise Cloud Migration",
		category: "Cloud Services",
		description:
			"Complete cloud infrastructure setup with auto-scaling, monitoring, and 99.9% uptime guarantee.",
		image: "/cloud-computing-servers.png",
	},
	{
		id: "saas-platform",
		title: "SaaS Analytics Platform",
		category: "Software Development",
		description:
			"Real-time data analytics platform processing 1M+ events daily with custom dashboards and API integrations.",
		image: "/modern-tech-office-developers.png",
	},
	{
		id: "online-marketplace",
		title: "B2B Online Marketplace",
		category: "E-commerce",
		description:
			"Enterprise marketplace connecting suppliers and buyers with advanced search, negotiation tools, and logistics integration.",
		image: "/modern-ecommerce-devices.png",
	},
	{
		id: "cloud-security",
		title: "Cloud Security Solution",
		category: "Cloud Services",
		description:
			"Advanced cybersecurity framework with threat detection, automated responses, and compliance monitoring.",
		image: "/cloud-computing-servers.png",
	},
	{
		id: "social-media-suite",
		title: "Social Media Management Suite",
		category: "Media Marketing",
		description:
			"All-in-one social media management platform with scheduling, analytics, and AI-powered content suggestions.",
		image: "/placeholder-3zj9i.png",
	},
	{
		id: "ai-chatbot",
		title: "AI Customer Service Bot",
		category: "Software Development",
		description:
			"Intelligent chatbot with natural language processing, reducing customer service costs by 60% while improving satisfaction.",
		image: "/developers-modern-tech.png",
	},
];
