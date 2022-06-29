import React from "react";
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearSelected, clearCompleted, reset }) => (

    <ButtonGroup>
        <Button color="danger" onClick={clearSelected}>clear selected</Button>
        <Button color="danger" onClick={clearCompleted}>clear Completed</Button>
        <Button color="danger" onClick={reset}>reset</Button>
    </ButtonGroup>
)
BulkController.propTypes = {
	clearSelected: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired
};
export default BulkController;