import React from "react";
import { Input,Label } from "reactstrap";
const ViewController = ({view,changeView})=> (
    <div className="d-flex">
        <Label for="list-view" className="mr-4">
            <Input 
                type="radio"
                name="view"
                value="list"
                onChange={changeView}
                id="list-view"
                className="d-inline-block"
                checked={view === 'list'}
            />List view
        </Label>
        <Label for="table-view" className="mr-4">
            <Input 
                type="radio"
                name="view"
                value="table"
                onChange={changeView}
                id="table-view"
                className="d-inline-block"
                checked={view === 'table'}
            />
            Table View
        </Label>
    </div>
)

export default ViewController