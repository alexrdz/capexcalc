export default function ProjectsList({ projectsList, handleDelete }: { projectsList: { id: number, name: string, percent: number, projectHours: number }[]; handleDelete: (e: React.MouseEvent) => void }) {
  return (
    <div className="projects-list">
        {projectsList.length > 0 && projectsList.map(p => p.name && (
          <div key={p.id} id={p.id} className="project">
            <p>{p.name}</p>
            <p>{p.percent}%</p>
            <p>{p.projectHours.toFixed(2)} hrs</p>
            <div><button type="button" className="delete" data-id={p.id} onClick={handleDelete}>&times;</button></div>
          </div>
        ))}
      </div>
  )
}
