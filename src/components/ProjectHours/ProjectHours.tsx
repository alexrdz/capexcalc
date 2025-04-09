export default function ProjectHours({ mainProject }: { mainProject: { id: number, name: string, percent: number, projectHours: number } }) {
  return (
    <label htmlFor={`projectHours-${mainProject.id}`}>
      <span className="sr-only">Project Hours</span>
      {/* <span>{mainProject.projectHours.toFixed(0)}hrs</span> */}
      <input
        type="text"
        name="projectHours"
        id={`projectHours-${mainProject.id}`}
        readOnly
        value={`${mainProject.projectHours.toFixed(0)}hrs`}
        tabIndex={-1}
      />
    </label>
  )
}
