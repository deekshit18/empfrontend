import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { deleteemp, getemp } from '../services/allAPI';

function Emplist() {
  const [srch, setsrch] = useState('');
  const [allemp, setAllemp] = useState([]);

  const getAllemp = async () => {
    const response = await getemp();
    const { data } = response;
    setAllemp(data);
  };

  const removeemp = async (id) => {
    const response = await deleteemp(id);
    getAllemp();
  };

  useEffect(() => {
    getAllemp();
  }, []);

  const filteredEmps = allemp.filter((item) =>
    item.empname.toLowerCase().includes(srch.toLowerCase())
  );

  return (
    <>
      <Container>
        <div className="form-group mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name"
            id="inputDefault"
            value={srch}
            onChange={(e) => setsrch(e.target.value)}
          />
        </div>

        <table className="table table-hover border mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Employee ID</th>
              <th scope="col"> Name</th>
              <th scope="col">Email</th>
              <th scope="col">Designation</th>
              <th scope="col">image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmps.length > 0 ? (
              filteredEmps.map((item, index) => (
                <tr className="table-active" key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.id}</td>
                  <td>{item.empname}</td>
                  <td>{item.email}</td>
                  <td>{item.designation}</td>
                  <td>
                    <img src={item.url} style={{ width: '80px' }} alt="" />
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeemp(item?.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Nothing to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default Emplist;
