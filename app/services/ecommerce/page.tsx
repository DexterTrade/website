import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	CheckCircle,
	ShoppingCart,
	CreditCard,
	Smartphone,
	BarChart3,
	Shield,
	Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata = {
	title: "E-commerce Solutions | TechMaster Solutions",
	description:
		"Custom e-commerce development, online store creation, payment integration, and digital commerce solutions to grow your business online.",
};

export default function EcommercePage() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero Section */}
			<section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
				<div className="absolute inset-0 bg-black/60 z-10" />
				<Image
					src="/modern-ecommerce-devices.png"
					alt="E-commerce solutions"
					fill
					className="object-cover"
					priority
					sizes="100vw"
				/>
				<div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
						E-commerce Solutions
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mb-6 md:mb-8">
						Transform your business with custom e-commerce platforms
						designed to maximize sales, enhance user experience, and
						drive growth.
					</p>
					<Link href="/contact">
						<Button
							size="lg"
							className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8"
						>
							Start Your Store
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-12 md:py-20 bg-background">
				{/* <div className="container mx-auto px-4"> */}
					{/* <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
						<div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
							Our E-commerce Services
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
							Complete E-commerce Solutions
						</h2>
						<p className="text-base md:text-lg text-muted-foreground">
							From custom online stores to enterprise e-commerce
							platforms, we deliver solutions that drive sales and
							enhance customer experience.
						</p>
					</div> */}

					{/* grid for our services */}
					{/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
						{ecommerceServices.map((service, index) => (
							<div
								key={index}
								className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group text-center border"
							>
								<div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
									<service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
								</div>
								<h3 className="text-xl font-bold mb-3 text-foreground">
									{service.title}
								</h3>
								<p className="text-muted-foreground text-sm sm:text-base">
									{service.description}
								</p>
							</div>
						))}
					</div> */}
				{/* </div> */}

				<div className="container mx-auto px-4">
					<div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
						<div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
							Our E-commerce Services
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
							Simplifying Modern E-commerce
						</h2>
						<p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify sm:text-center">
							We simplify the complexity of modern e-commerce
							through our comprehensive suite of services.
							Recognized for providing logical and realistic
							solutions for end-to-end e-commerce management, we
							offer complete operational support—from account
							handling and optimization to precise inventory
							management—for all major marketplaces, including{" "}
							<span className="font-medium text-foreground">
								Amazon
							</span>
							,{" "}
							<span className="font-medium text-foreground">
								TikTok Shop
							</span>
							,{" "}
							<span className="font-medium text-foreground">
								eBay
							</span>
							,{" "}
							<span className="font-medium text-foreground">
								Etsy
							</span>
							, and{" "}
							<span className="font-medium text-foreground">
								OnBuy
							</span>
							. Our team's deep, platform-specific expertise
							ensures a seamless, high-performance trade
							experience across every channel.
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-12 md:py-20 bg-muted/50">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
						<div>
							<div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
								Platform Features
							</div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
								Built for Success
							</h2>
							<p className="text-base md:text-lg text-muted-foreground mb-8">
								Our e-commerce platforms come with everything
								you need to succeed online, from inventory
								management to advanced analytics.
							</p>
							<div className="space-y-4">
								{platformFeatures.map((feature, index) => (
									<div
										key={index}
										className="flex items-start"
									>
										<CheckCircle className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
										<div>
											<h3 className="font-semibold text-base md:text-lg text-foreground">
												{feature.title}
											</h3>
											<p className="text-muted-foreground text-sm sm:text-base">
												{feature.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
							<Image
								src="/modern-ecommerce-dashboard.png"
								alt="E-commerce platform dashboard"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Technologies */}
			<section className="py-12 md:py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
						<div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
							Technologies We Use
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
							Cutting-Edge E-commerce Stack
						</h2>
						<p className="text-base md:text-lg text-muted-foreground">
							We leverage the latest technologies and platforms to
							build scalable, secure, and high-performing
							e-commerce solutions.
						</p>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
						{technologies.map((tech, index) => (
							<div
								key={index}
								className="bg-card rounded-xl p-4 text-center hover:shadow-md transition-shadow border"
							>
								<h3 className="font-semibold text-sm sm:text-base text-foreground">
									{tech}
								</h3>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 md:py-20 bg-gray-900 dark:bg-gray-950 text-white">
				<div className="container mx-auto px-4 text-center max-w-4xl">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
						Ready to Launch Your Online Store?
					</h2>
					<p className="text-gray-300 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
						Get started with a free consultation and discover how
						our e-commerce solutions can transform your business.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact">
							<Button
								size="lg"
								className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 w-full sm:w-auto"
							>
								Get Free Consultation
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
						<Link href="/projects">
							<Button
								size="lg"
								variant="outline"
								className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto bg-transparent"
							>
								View Our Work
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

const ecommerceServices = [
	{
		title: "Custom Online Stores",
		description:
			"Tailored e-commerce websites built from scratch to match your brand and business requirements.",
		icon: ShoppingCart,
	},
	{
		title: "Payment Integration",
		description:
			"Secure payment gateways supporting multiple payment methods including cards, digital wallets, and more.",
		icon: CreditCard,
	},
	{
		title: "Mobile Commerce",
		description:
			"Responsive designs and mobile apps that provide seamless shopping experiences across all devices.",
		icon: Smartphone,
	},
	{
		title: "Analytics & Reporting",
		description:
			"Comprehensive analytics dashboards to track sales, customer behavior, and business performance.",
		icon: BarChart3,
	},
	{
		title: "Security & Compliance",
		description:
			"Enterprise-grade security measures and compliance with industry standards like PCI DSS.",
		icon: Shield,
	},
	{
		title: "Performance Optimization",
		description:
			"Fast-loading stores optimized for search engines and conversion rate optimization.",
		icon: Zap,
	},
];

const platformFeatures = [
	{
		title: "Inventory Management",
		description:
			"Real-time inventory tracking, automated stock alerts, and multi-warehouse support.",
	},
	{
		title: "Order Processing",
		description:
			"Streamlined order management with automated workflows and shipping integration.",
	},
	{
		title: "Customer Management",
		description:
			"Comprehensive customer profiles, order history, and personalized shopping experiences.",
	},
	{
		title: "Marketing Tools",
		description:
			"Built-in SEO tools, email marketing integration, and promotional campaign management.",
	},
	{
		title: "Multi-channel Selling",
		description:
			"Sell across multiple platforms including social media, marketplaces, and your website.",
	},
];

const technologies = [
	"Shopify Plus",
	"WooCommerce",
	"Magento",
	"React.js",
	"Next.js",
	"Node.js",
	"Stripe",
	"PayPal",
	"AWS",
	"Google Cloud",
	"MongoDB",
	"PostgreSQL",
];
