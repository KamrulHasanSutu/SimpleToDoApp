import React from "react";
import { Row,Col } from "reactstrap";
import SearchPanel from "./search-panel";
import BulkController from "./bulk-controller";
import ViewController from "./view-controller";
import FilterController from "./filter-controller";


const Controller = ({term, handleSearch, toggleForm,handleFilter,view,changeView,clearSelected, clearCompleted, reset})=> (
    <div>
        <SearchPanel 
            term={term}
            handleSearch={handleSearch}
            toggleForm={toggleForm}
        />

        <Row className="my-4">
            <Col md={{size:4}}>
                <FilterController 
                    handleFilter={handleFilter}
                    view={view}
                />
            </Col>
            <Col md={{size:4}}>
                <ViewController 
                    view={view}
                    changeView={changeView}
                />
            </Col>
            <Col md={{size:4}} className="d-flex">
                <div className="ml-auto">
                <BulkController 
                    clearSelected={clearSelected} 
                    clearCompleted={clearCompleted} 
                    reset={reset}
                />
                </div>
            </Col>
        </Row>
    </div>
)

export default Controller