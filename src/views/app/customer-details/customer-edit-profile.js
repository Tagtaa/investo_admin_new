import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';


const CustomerEditProfile = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Edit Customer" match={match} />
         
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <form action="#">
          <div className="edit-ipo">
            <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <h4>Main Information</h4>
            </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Last Name</p>
                <input type="text" className="input" name="last_name" />
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">First Name</p>
                <input type="text" className="input" name="first_name" />
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Email</p>
                <input type="email" className="input" name="email" />
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Phone</p>
                <input
                  type="text"
                  className="input"
                  name="phone"
                  value=""
                />
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">National ID</p>
                <input type="text" className="input" name="national_id" />
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Status</p>
                <select  type="text" className="input">
                  <option>Verified</option>
                  <option>Pending</option>
                  </select>
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Status</p>
                <select  type="text" className="input">
                  <option>Verified</option>
                  <option>Pending</option>
                  </select>
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
              <p className="name mt-3">Password</p>
                <input
                  type="password"
                  className="input"
                  name="password"
                />
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
              <p className="name mt-3">Repeat Password</p>
                <input
                  type="password"
                  className="input"
                  name="repeatpassword"
                />
              </div>
              <button type="submit" className="save mt-3 ml-3">
                SAVE CHANGES
              </button>
            </div>
          </div>
      </form>


      <form action="#" className='mt-3'>
          <div className="edit-ipo">
            <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <h4>Account Information</h4>
            </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">National ID</p>
                <input type="text" className="input" name="nationalID" />
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Whether to participate in foreign and domestic trade</p>
                <select  type="text" className="input">
                  <option>Domestic</option>
                  </select>
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Foreign trading contract</p>
                <select  type="text" className="input">
                  <option>No</option>
                  </select>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Domestic trading fee</p>
                <select  type="text" className="input">
                  <option>1.5%</option>
                  </select>
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Government Bond trading fee</p>
                <select  type="text" className="input">
                  <option>1%</option>
                  </select>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Company Bond trading fee</p>
                <select  type="text" className="input">
                  <option>1%</option>
                  </select>
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Content</p>
                <input type='file' name='content' />
              </div>
              <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <button type="submit" className="save mt-3">
                SAVE CHANGES
              </button>
              </div>
            </div>
          </div>
      </form>


      <form action="#" className='mt-3'>
          <div className="edit-ipo">
            <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <h4>Withdrow</h4>
            </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Bank Account Type</p>
                <input type="text" className="input" name="bankaccounttype" />
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Bank Account Name</p>
                <input type="text" className="input" name="account_name" />
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name mt-3">Bank Account</p>
                <input type="email" className="input" name="bank_account" />
              </div>
              <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <button type="submit" className="save mt-3">
                SAVE CHANGES
              </button>
              </div>
            </div>
          </div>
      </form>

    </>
  );
};
export default CustomerEditProfile;
