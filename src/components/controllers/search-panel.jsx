import React from "react";
import { Input,Button } from "reactstrap";
import PropTypes from 'prop-types'

const SearchPanel = ({term, handleSearch, toggleForm})=> (
    <div className="d-flex">
        <Input 
            placeholder="Search here"
            value={term}
            onChange={(e)=> handleSearch(e.target.value)}
            className='mr-3'
        />
        <Button color="success" onClick={toggleForm}>
            New
        </Button>

    </div>
)
SearchPanel.propTypes = {
	term: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired
};

export default SearchPanel