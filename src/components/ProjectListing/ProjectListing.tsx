import ProjectHours from "../ProjectHours/ProjectHours"
import ProjectPercent from "../ProjectPercent/ProjectPercent"
import ProjectSelect from "../ProjectSelect/ProjectSelect"

export default function ProjectListing({ mainProject, handleInputChange }: { mainProject: { id: number, name: string, percent: number, projectHours: number }, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) {
  return (
    <div key={mainProject.id} id={String(mainProject.id)} className="project">
      <ProjectSelect mainProject={mainProject} handleInputChange={handleInputChange} />
      <ProjectPercent mainProject={mainProject} handleInputChange={handleInputChange} />
      <ProjectHours mainProject={mainProject} />
    </div>
  )
}
