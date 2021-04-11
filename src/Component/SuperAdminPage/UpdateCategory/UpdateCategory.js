import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addCategory } from '../../../Redux/Actions/StoreActions';
import { updateJSONData } from '../../../utils/dataControllers';

const UpdateCategory = ({show, handleClose, catDetails, categories, addCategory}) => {
    const {register, errors, handleSubmit} = useForm();

    const handleCategoryUpdate = data => {
        updateJSONData(`http://localhost:5000/updateCatInfo/${catDetails?._id}`, data)
        .then(returnedData => {
            if(returnedData){
                const newCatList = categories.filter(user => user._id !== catDetails._id);
                const singleCatInfo = {...catDetails, categoryName: data?.categoryName, categoryDetails: data?.categoryDetails};
                addCategory([...newCatList, singleCatInfo]);
                handleClose();
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
        <Modal size="md" show={show} onHide={handleClose}>
            <form onSubmit={handleSubmit(handleCategoryUpdate)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Category Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="categoryName" placeholder="Category Name" className="form-control" defaultValue={catDetails?.categoryName}/>
                        {errors.categoryName && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea rows={3} ref={register({ required: true })} name="categoryDetails" placeholder="Category Details" className="form-control" defaultValue={catDetails?.categoryDetails}/>
                        {errors.categoryDetails && <span className="text-danger">This field is required</span>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Done
                    </Button>
                    <input type="submit" className="btn btn-primary rounded" />
                </Modal.Footer>
            </form>
        </Modal>
        </>
    );
};

const mapStateToProps = state => {
    return{
        categories: state.categories
    }
}

const mapDispatchToProps = {
    addCategory: addCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCategory);