import { storedProjects } from "../../hooks/useCalc"

export default function ProjectSelect({ mainProject, handleInputChange }: { mainProject: { id: number, name: string, percent: number, projectHours: number }, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) {
  return (
    <label htmlFor={`project-${mainProject.id}`}>
      <span className="sr-only">Project Name</span>
      <select data-parent={mainProject.id} name="project" id={`project-${mainProject.id}`} onChange={handleInputChange} autoFocus>
        <option value="">Select a Project</option>
        {storedProjects.map(project => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
    </label>
  )
}
