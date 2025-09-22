'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from './ProjectCard'
import { projects, queryMap } from './projectsData'
import { useSearchParams } from 'next/navigation';


export const ProjectsGrid = () => {
    const searchParams = useSearchParams();
    const project = searchParams.get("search") as keyof typeof queryMap;

  return (
    <>
    <Tabs defaultValue={queryMap[project] || "all"} className="mb-8 md:mb-12">
              <div className="flex justify-center overflow-x-auto pb-2 -mx-4 px-4">
                <TabsList className="flex space-x-2 p-1 rounded-lg bg-muted">
                  <TabsTrigger value="all" className="px-4 py-2 text-sm rounded-md">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="ecommerce" className="px-4 py-2 text-sm rounded-md">
                    E-commerce
                  </TabsTrigger>
                  <TabsTrigger value="software" className="px-4 py-2 text-sm rounded-md">
                    Software
                  </TabsTrigger>
                  <TabsTrigger value="marketing" className="px-4 py-2 text-sm rounded-md">
                    Marketing
                  </TabsTrigger>
                  <TabsTrigger value="cloud" className="px-4 py-2 text-sm rounded-md">
                    Cloud
                  </TabsTrigger>
                  <TabsTrigger value="logistics" className="px-4 py-2 text-sm rounded-md">
                    Logistics
                  </TabsTrigger>
                  <TabsTrigger value="ai" className="px-4 py-2 text-sm rounded-md">
                    AI Integration
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-6 md:mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ecommerce" className="mt-6 md:mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {projects
                    .filter((project) => project.category === "E-commerce")
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="software" className="mt-6 md:mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {projects
                    .filter((project) => project.category === "Software Development")
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="mt-6 md:mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {projects
                    .filter((project) => project.category === "Media Marketing")
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="cloud" className="mt-6 md:mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {projects
                    .filter((project) => project.category === "Cloud Services")
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
    </>
  )
}
