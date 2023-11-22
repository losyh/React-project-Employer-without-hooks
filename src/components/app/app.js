import { Component } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../serch-panel/serch-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'

import'./app.css'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Lexa A.', salary: 800, increase: true, rise: true,  id: 1},
                {name: 'Oleg O.', salary: 3000, increase: false, rise: false,  id: 2},
                {name: 'Vasya G.', salary: 5000, increase: true, rise: false,  id: 3}
            ],
            term: '',
            filter: ''
        }
        this.maxId = 4
        this.increaseNumber = 0
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    seachEmp = (items, term) => {
        if(term.length === 0){
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => {
                    return item.rise === true
                })
            case 'over' :
                return items.filter(item => {
                    return item.salary >= 1000
                })
            default:
                return items
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const increased = this.state.data.filter(item => item.increase).length
        const employees = this.state.data.length
        const visibleData = this.filterPost(this.seachEmp(data, term), filter)
        return (
            <div className="app">
                <AppInfo
                calcIncrease={increased}
                maxId={employees}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployersAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App