import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const EditSecondaryMaket = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Edit Secondary Market" match={match} />

          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <form action="#">
        <div className="container">
          <div className="edit-ipo">
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Stock Name</p>
                <input type="text" className="input" name="name" value="ADL" />

                <p className="name mt-3">Address</p>
                <input
                  type="text"
                  className="input"
                  name="date"
                  value="2022/03/09"
                />

                <p className="name mt-3">Icon</p>
                <input type="file" className="input" name="name" />
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Stock Full Name</p>
                <input
                  type="text"
                  className="input"
                  name="name"
                  value="Адуун Чулуун ХХК"
                />

                <p className="name mt-3">Founded</p>
                <input
                  type="text"
                  className="input"
                  name="date"
                  value="2022/03/09"
                />
                <p className="name mt-3">Type</p>
                <select className="form-control form-select">
                  <option value="" selected="selected">
                    choose
                  </option>
                </select>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">CEO</p>
                <input
                  type="text"
                  className="input"
                  name="active"
                  value="1500"
                />
                 <p className="name mt-3">IPO released date</p>
                 <select className="form-control form-select">
                  <option value="" selected="selected">
                    choose
                  </option>
                </select>
                 <p className="name mt-3">Status</p>
                 <select className="form-control form-select">
                  <option value="" selected="selected">
                    choose
                  </option>
                </select>
              </div>
                <div className='col-lg-12 col-12'>
                  <p className="name mt-3">About</p>
                  <textarea className="about-textarea" name="active" />  
                </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                <p className='mt-3'>Bulls say 1 Title</p>
                  <input type='text' className='input' name='BullsSayTitle' />
              </div>
              <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                <p className='mt-3'>Bulls say 1 Author</p>
                  <input type='text' className='input' name='BullsSayAuthor' />
              </div>
              <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                <p className='mt-3'>Bulls Say 1 text</p>
                  <input type='text' className='input' name='BullsSayText' />
              </div>
              
              {/* second */}
              <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                <p className='mt-3'>Bulls say 2 Title</p>
                  <input type='text' className='input' name='BullsSayTitle' />
              </div>
              <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                <p className='mt-3'>Bulls say 2 Author</p>
                  <input type='text' className='input' name='BullsSayAuthor' />
              </div>
              <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                <p className='mt-3'>Bulls Say 2 text</p>
                  <input type='text' className='input' name='BullsSayText' />
              </div>

              {/* third */}
              <div className='col-lg-3 col-sm-3 col-md-3 col-12'>
                <p className='mt-3'>Analysts Ratings</p>
                  <input type='text' className='input' name='Analysts Ratings' />
              </div>
              <div className='col-lg-3 col-sm-3 col-md-3 col-12'>
                <p className='mt-3'>Buy percent</p>
                  <input type='text' className='input' name='Buy percent' />
              </div>
              <div className='col-lg-3 col-sm-3 col-md-3 col-12'>
                <p className='mt-3'>Hold percent</p>
                  <input type='text' className='input' name='Hold percent' />
              </div>
              <div className='col-lg-3 col-sm-3 col-md-3 col-12'>
                <p className='mt-3'>Sell percent</p>
                  <input type='text' className='input' name='Sell percent' />
              </div>
              <button type="submit" className="save mt-3 ml-3">
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default EditSecondaryMaket;
