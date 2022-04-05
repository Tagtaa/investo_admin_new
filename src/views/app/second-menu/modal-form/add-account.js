import React from 'react';
import {Label,Input} from 'reactstrap'

const AddAccount = ({ show, setShow }) => {
  return (
    <>
      <div
        tabIndex="-1"
        style={{
          position: 'relative',
          zIndex: 1050,
          display: show ? 'block' : 'none',
        }}
      >
        <div className="modal-right">
          <div
            className="modal fade show"
            role="dialog"
            tabIndex="-1"
            style={{ display: 'block' }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Account</h5>
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true" onClick={() => setShow(false)}>
                      {' '}
                      ×
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <Label className="">Customer Name</Label>
                  <Input type="text" className="form-controller" placeholder='Search customer'/>
                  <Label className="mt-4">National ID</Label>
                  <Input type="text" className="form-controller" />
                   <Label className="mt-4">Customer type</Label>
                   <select value="" className="form-controller form-control">
                    <option value="" className="form-control">Mongolian Citizen</option>
                  </select>
                  <Label className="mt-4">Phone number</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Email</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Registration Payment Method</Label>
                  <select value="" className="form-controller form-control">
                    <option value="" className="form-control">Credit Card</option>
                  </select>

                  <Label className="mt-4">Whether to participate in foreign and domestic trade</Label>
                  <select value="" className="form-controller form-control">
                    <option value="" className="form-control">Domestic</option>
                  </select>
                  <Label className="mt-4">Foreign Trading Contract</Label>
                  <Input type="file" name="file" className='form-control' />
                  <Label className="mt-4">Domestic Trading Fee</Label>
                  <select value="" className="form-controller form-control">
                    <option value="" className="form-control">1.5%</option>
                  </select>
                  <Label className="mt-4">Government Bond Trading Fee</Label>
                  <select value="" className="form-controller form-control">
                    <option value="" className="form-control">1%</option>
                  </select>
                  <Label className="mt-4">Company Bond Trading Fee</Label>
                  <select value="" className="form-controller form-control">
                    <option value="" className="form-control">1%</option>
                  </select>
                  <Label className="mt-4">Content</Label>
                  <Input type="file" name="file" className='form-control' />
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
export default AddAccount;
