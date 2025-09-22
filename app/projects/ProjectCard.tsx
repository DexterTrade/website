import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


// Project Card Component
const ProjectCard=({ project }:{project:{
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
}})=> {
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
            <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
            <p className="text-blue-300 mb-4">{project.category}</p>
            <Link href={`/projects/${project.id}`}>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
        <CardDescription className="text-primary">{project.category}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
        <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-0">
        <Link href={`/projects/${project.id}`}>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base bg-transparent"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
