import useCalc from './hooks/useCalc'
import TotalHours from './components/TotalHours/TotalHours'
import ProjectListing from './components/ProjectListing/ProjectListing'
import ProjectsList from './components/ProjectsList/ProjectsList'

function App() {
  const {totalHours, projectsList, error, handleInputChange, handleAddProject, totalPercent, handleDelete} = useCalc()


  return (
    <>
      <h1>Capex Calculator</h1>
      <TotalHours totalHours={totalHours} handleInputChange={handleInputChange} />
      {error && <div className="error-message" role="alert">{error}</div>}

      <form className={totalHours > 0 ? 'show' : 'hide'}>
        {projectsList.map((mainProject, idx) => {
          const isLastProject = idx === projectsList.length - 1
          return (
          <div key={mainProject.id} id={String(mainProject.id)} className="project-row">
            <ProjectListing mainProject={mainProject} handleInputChange={handleInputChange} />
            {isLastProject ? <button type="button" onClick={handleAddProject} disabled={totalPercent >= 100}>Add Project</button> : <button className="invisible" disabled> </button>}
          </div>
        )})}
      </form>


      <ProjectsList
        projectsList={projectsList}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default App
