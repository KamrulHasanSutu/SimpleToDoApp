import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearSelected, clearCompleted, reset }) => (

    <ButtonGroup>
        <Button color="danger" onClick={clearSelected}>clear selected</Button>
        <Button color="danger" onClick={clearCompleted}>clear Completed</Button>
        <Button color="danger" onClick={reset}>reset</Button>
    </ButtonGroup>
)

export default BulkController;