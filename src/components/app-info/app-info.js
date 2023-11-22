import './app-info.css'

const AppInfo = (props) => {
    const {maxId, calcIncrease} = props
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {maxId}</h2>
            <h2>Премию получат: {calcIncrease}</h2>
        </div>
    )
}

export default AppInfo