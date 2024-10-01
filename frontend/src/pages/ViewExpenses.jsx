import React from 'react'

const VewExpenses = () => {
return (
<>
  <div classname="pc-container">
    <div classname="pc-content">
      <div classname="page-header">
        <div classname="page-block">
          <ul classname="breadcrumb">
            <li classname="breadcrumb-item"><a href="../dashboard/index.html">Home</a></li>
            <li classname="breadcrumb-item"><a href="javascript: void(0)">Table</a></li>
            <li classname="breadcrumb-item" aria-current="page">Advance initialization</li>
          </ul>
          <div classname="page-header-title">
            <h2 classname="mb-0">Advance initialization</h2>
          </div>
        </div>
      </div>
      <div classname="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="card">
            <div className="card-header">
              <h5>Footer Callback</h5><small>Through the use of the header and footer callback manipulation
                functions provided by DataTables (headerCallback and footerCallback), it is possible to
                perform some powerful and useful data manipulation functions.</small>
            </div>
            <div className="card-body">
              <div className="table-responsive dt-responsive">
                <div id="footer-callback_wrapper" className="dt-container dt-bootstrap5">
                  <div className="row mt-2 justify-content-between">
                    <div className="col-md-auto me-auto ">
                      <div className="dt-length"><select name="footer-callback_length" aria-controls="footer-callback"
                          className="form-select form-select-sm" id="dt-length-7">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select><label htmlFor="dt-length-7"> entries per page</label></div>
                    </div>
                    <div className="col-md-auto ms-auto ">
                      <div className="dt-search"><label htmlFor="dt-search-7">Search:</label><input type="search"
                          className="form-control form-control-sm" id="dt-search-7" placeholder
                          aria-controls="footer-callback" /></div>
                    </div>
                  </div>
                  <div className="row mt-2 justify-content-md-center">
                    <div className="col-12 ">
                      <table id="footer-callback" className="table table-striped table-bordered nowrap dataTable"
                        aria-describedby="footer-callback_info" style={{ width: 985 }}>
                        <colgroup>
                          <col data-dt-column={0} style={{ width: '201.188px' }} />
                          <col data-dt-column={1} style={{ width: '282.203px' }} />
                          <col data-dt-column={2} style={{ width: '155.828px' }} />
                          <col data-dt-column={3} style={{ width: '91.5312px' }} />
                          <col data-dt-column={4} style={{ width: '129.141px' }} />
                          <col data-dt-column={5} style={{ width: '125.109px' }} />
                        </colgroup>
                        <thead>
                          <tr role="row">
                            <th data-dt-column={0} rowSpan={1} colSpan={1}
                              className="dt-orderable-asc dt-orderable-desc dt-ordering-asc" aria-sort="ascending"
                              aria-label="First name: Activate to invert sorting" tabIndex={0}><span
                                className="dt-column-title" role="button">First
                                name</span><span className="dt-column-order" /></th>
                            <th data-dt-column={1} rowSpan={1} colSpan={1}
                              className="dt-orderable-asc dt-orderable-desc" aria-label="Last name: Activate to sort"
                              tabIndex={0}><span className="dt-column-title" role="button">Last name</span><span
                                className="dt-column-order" /></th>
                            <th data-dt-column={2} rowSpan={1} colSpan={1}
                              className="dt-orderable-asc dt-orderable-desc" aria-label="Office: Activate to sort"
                              tabIndex={0}><span className="dt-column-title" role="button">Office</span><span
                                className="dt-column-order" /></th>
                            <th data-dt-column={3} rowSpan={1} colSpan={1}
                              className="dt-type-numeric dt-orderable-asc dt-orderable-desc"
                              aria-label="age: Activate to sort" tabIndex={0}><span className="dt-column-title"
                                role="button">age</span><span className="dt-column-order" /></th>
                            <th data-dt-column={4} rowSpan={1} colSpan={1}
                              className="dt-type-date dt-orderable-asc dt-orderable-desc"
                              aria-label="DOB: Activate to sort" tabIndex={0}><span className="dt-column-title"
                                role="button">DOB</span><span className="dt-column-order" /></th>
                            <th data-dt-column={5} rowSpan={1} colSpan={1}
                              className="dt-type-numeric dt-orderable-asc dt-orderable-desc"
                              aria-label="Salary: Activate to sort" tabIndex={0}><span className="dt-column-title"
                                role="button">Salary</span><span className="dt-column-order" /></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="sorting_1">Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td className="dt-type-numeric">33</td>
                            <td className="dt-type-date">2008/11/28</td>
                            <td className="dt-type-numeric">$162,700</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td className="dt-type-numeric">66</td>
                            <td className="dt-type-date">2009/01/12</td>
                            <td className="dt-type-numeric">$86,000</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Bradley Greer</td>
                            <td>Software Engineer</td>
                            <td>London</td>
                            <td className="dt-type-numeric">41</td>
                            <td className="dt-type-date">2012/10/13</td>
                            <td className="dt-type-numeric">$132,000</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Brielle Williamson</td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td className="dt-type-numeric">61</td>
                            <td className="dt-type-date">2012/12/02</td>
                            <td className="dt-type-numeric">$372,000</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Cedric Kelly</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td className="dt-type-numeric">22</td>
                            <td className="dt-type-date">2012/03/29</td>
                            <td className="dt-type-numeric">$433,060</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Charde Marshall</td>
                            <td>Regional Director</td>
                            <td>San Francisco</td>
                            <td className="dt-type-numeric">36</td>
                            <td className="dt-type-date">2008/10/16</td>
                            <td className="dt-type-numeric">$470,600</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Colleen Hurst</td>
                            <td>Javascript Developer</td>
                            <td>San Francisco</td>
                            <td className="dt-type-numeric">39</td>
                            <td className="dt-type-date">2009/09/15</td>
                            <td className="dt-type-numeric">$205,500</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Dai Rios</td>
                            <td>Personnel Lead</td>
                            <td>Edinburgh</td>
                            <td className="dt-type-numeric">35</td>
                            <td className="dt-type-date">2012/09/26</td>
                            <td className="dt-type-numeric">$217,500</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td className="dt-type-numeric">63</td>
                            <td className="dt-type-date">2011/07/25</td>
                            <td className="dt-type-numeric">$170,750</td>
                          </tr>
                          <tr>
                            <td className="sorting_1">Gloria Little</td>
                            <td>Systems Administrator</td>
                            <td>New York</td>
                            <td className="dt-type-numeric">59</td>
                            <td className="dt-type-date">2009/04/10</td>
                            <td className="dt-type-numeric">$237,500</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr role="row">
                            <th colSpan={5} style={{ textAlign: 'right' }} data-dt-column="0,1,2,3,4" rowSpan={1}>$NaN (
                              $NaN total)</th>
                            <th data-dt-column={5} rowSpan={1} colSpan={1} className="dt-type-numeric"><span
                                className="dt-column-title" />
                            </th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className="row mt-2 justify-content-between">
                    <div className="col-md-auto me-auto ">
                      <div className="dt-info" aria-live="polite" id="footer-callback_info" role="status">
                        Showing 1 to 10 of 20 entries</div>
                    </div>
                    <div className="col-md-auto ms-auto ">
                      <div className="dt-paging paging_full_numbers">
                        <ul className="pagination">
                          <li className="dt-paging-button page-item disabled"><a className="page-link first"
                              aria-controls="footer-callback" aria-disabled="true" aria-label="First"
                              data-dt-idx="first" tabIndex={-1}>«</a></li>
                          <li className="dt-paging-button page-item disabled"><a className="page-link previous"
                              aria-controls="footer-callback" aria-disabled="true" aria-label="Previous"
                              data-dt-idx="previous" tabIndex={-1}>‹</a></li>
                          <li className="dt-paging-button page-item active"><a href="#" className="page-link"
                              aria-controls="footer-callback" aria-current="page" data-dt-idx={0} tabIndex={0}>1</a>
                          </li>
                          <li className="dt-paging-button page-item"><a href="#" className="page-link"
                              aria-controls="footer-callback" data-dt-idx={1} tabIndex={0}>2</a></li>
                          <li className="dt-paging-button page-item"><a href="#" className="page-link next"
                              aria-controls="footer-callback" aria-label="Next" data-dt-idx="next" tabIndex={0}>›</a>
                          </li>
                          <li className="dt-paging-button page-item"><a href="#" className="page-link last"
                              aria-controls="footer-callback" aria-label="Last" data-dt-idx="last" tabIndex={0}>»</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
};
export default VewExpenses