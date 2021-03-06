import React, {Component} from 'react';
import './item-status-filter.css'
export default class ItemStatusFilter extends Component{
        button = [
                {name: 'all', label: 'All'},
                {name: 'active', label: 'Active'},
                {name: 'done', label: 'Done'}
        ]
        render(){
                const { filter, onFilterChange } = this.props;
               
                const button = this.button.map(({name, label})=> {
                        const isActive = filter === name;
                        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
                        return (
                                <button
                                 key={name}
                                 type="button"
                                  className={`btn ${clazz}`}
                                  onClick={()=> onFilterChange(name)}
                                  >{label}</button>
                        )
                })
         return (
        <div className="btn-group">
         {button}
        </div>
          )
          }
 }

