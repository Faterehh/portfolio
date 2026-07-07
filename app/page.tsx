import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { ProjectsGrid } from "@/components/projects-grid"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProjectsGrid />
        <About />
        <Skills />
      </main>
      <SiteFooter />
    </>
  )
}
