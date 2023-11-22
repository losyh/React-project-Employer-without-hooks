import { Component } from 'react'
import './serch-panel.css'


class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }
    render() {
        return (
            <input type="text"
                   className="form-control"
                   placeholder="Найти сотрудника"
                   value={this.state.term}
                   onChange={this.onUpdateSearch}
            />
        )
    }
}

export default SearchPanel