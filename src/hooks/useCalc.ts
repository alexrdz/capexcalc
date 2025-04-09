import { useState } from 'react'
export const storedProjects = [
  {id: 1, name: 'CJ Business Systems'},
  {id: 2, name: 'CJ Global Enhancements'},
  {id: 3, name: 'CJ Verify'},
  {id: 4, name: 'CJ Design'},
  {id: 5, name: 'CJ Employer Enhancements'},
]

const newProject = () => ({
  id: Date.now(),
  name: '',
  percent: 0,
  projectHours: 0
})
const initialProjectsMap = new Map()
initialProjectsMap.set(newProject().id, newProject())


function useCalc() {
  const [totalHours, setTotalHours] = useState(0)
  const [projectsMap, setProjectsMap] = useState(initialProjectsMap)
  const [error, setError] = useState<string | null>(null)
  const [totalPercent, setTotalPercent] = useState(0)
  const projectsList = Array.from(projectsMap.values())

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const mainProjectId = e.target.dataset.parent
    const mainProject = projectsMap.get(Number(mainProjectId))

    switch (name) {
      case 'totalHours':
        setTotalHours(Number(value))
        break;

      case 'project': {
        const updatedProject = { ...mainProject, name: storedProjects.find(p => p.id === Number(value))?.name || '' }
        setProjectsMap(prev => new Map(prev.set(updatedProject.id, updatedProject)))
        break;
      }

      case 'percent': {

        const newPercent = Number(value)
        let newProjectHours = totalHours * (newPercent / 100)

        if (totalPercent + newPercent > 100) {
          setError('Total percent cannot exceed 100%')
          return
        }

        const error = calculateTotalPercent()
        if (error) {
          newProjectHours = 0
        }

        const updatedProject = { ...mainProject, percent: newPercent, projectHours: newProjectHours }
        setProjectsMap(prev => new Map(prev.set(updatedProject.id, updatedProject)))
        break;
      }

      default:
        break;
    }
  }

  const calculateTotalPercent = () => {
    // get total percent of main project
    const totalPercent = projectsList.reduce((acc, p) => acc + p.percent, 0)
    setTotalPercent(totalPercent)
    if (totalPercent > 100) {
      setError('Total percent cannot exceed 100%')
    } else {
      setError(null)
    }
    return totalPercent > 100
  }

  const handleAddProject = (e: React.MouseEvent) => {
    e.preventDefault()

    const error = calculateTotalPercent()
    if (error) {
      return
    }
    setProjectsMap(prev => new Map(prev.set(newProject().id, newProject())))
  }

  const handleDelete = (e: React.MouseEvent) => {
    const button = e.target as HTMLButtonElement
    const id = button.dataset.id
    const updatedProjectsMap = new Map(projectsMap)
    updatedProjectsMap.delete(Number(id))
    setProjectsMap(new Map(updatedProjectsMap))
  }

  return {
    totalHours,
    projectsMap,
    error,
    handleInputChange,
    handleAddProject,
    projectsList,
    totalPercent,
    handleDelete,
  }
}

export default useCalc
