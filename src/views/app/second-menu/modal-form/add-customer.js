import React from 'react';
import { Label, Input } from 'reactstrap';


const AddCustomer = ({ show, setShow }) => {
  return (
    <>
      <div
        tabIndex="-1"
        style={{
          position: 'relative',
          zIndex: 1050,
          display: show ? 'block' : 'none',
          height: '10vh'
        }}
      >

        <div className="modal-right">
          <div
            className="modal fade show"
            role="dialog"
            tabIndex="-1"
            style={{ display: 'block' }}
          >
            <div
              className="modal-dialog"
              role="document"
              style={{ height: '100vh' }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Customer</h5>
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true" onClick={() => setShow(false)}>
                      {' '}
                      ×
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <Label className="">First Name</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Lastname</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Email</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Phone number</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Profile image</Label>
                  <Input type="file" className="form-controller" />
                  <Label className="mt-4">Password</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Repeat password</Label>
                  <Input type="text" className="form-controller" />
             
                  {/* </PerfectScrollbar> */}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary">
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" />
        </div>
   
      </div>
    </>
  );
};
export default AddCustomer;
