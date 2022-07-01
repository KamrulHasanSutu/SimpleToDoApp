import React from "react";
import { Button,ButtonGroup } from "reactstrap";

const FilterController = ({handleFilter,filter}) => {
  
    return (

    <ButtonGroup>    
        <Button color={filter==='all'?'success':'danger'} onClick={()=> handleFilter('all')}>All</Button>
        <Button color={filter==='running'?'success':'danger'}  onClick={()=> handleFilter('running')} >Running</Button>
        <Button color={filter==='completed'?'success':'danger'}  onClick={()=> handleFilter('completed')}>Completed</Button>
    </ButtonGroup>
    )
}

export default FilterController;