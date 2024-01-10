import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addemployee } from '../services/allAPI';
function Dashboard() {

    const [empadd,setempadd]=useState({
        id:'',
        empname:'',
        email:'',
        designation:'',
        url:""
    
      });
    
      const cancelll=()=>
      {setempadd({
        id:'',
        empname:'',
        email:'',
        designation:'',
        url:""
    
      });}
     const handleUpload=async()=>{
      const {id,empname,email,designation,url}=empadd
      if (!id || !empname || !email || !designation || !url) {
        toast.warning('please fill the form completely')
        
      }
      else{
        const response = await addemployee(empadd)
        console.log(response);
        if (response.status>=200 && response.status<=300) {
          setempadd(response.data)
          toast.success('upload success')
          //close model
        //   handleClose()
          
        }
        else{
          console.log(response);
          toast.error('try again later')
    
        }
      }
     }





  return (
    <>
        <Container className="mt-4">
          <h2 className="mb-4">Employee Dashboard</h2>
          <Row className="">
            <Col xs={12} sm={6} md={12} lg={12} className=''>
              <Form className=''>
                <Form.Group controlId="employeeid" className='mb-4'>
                  <Form.Control type="text" value={empadd.id} placeholder="Employee ID"  onChange={(e)=>setempadd({...empadd,id:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="employeeAge">
                  <Form.Control type="text" value={empadd.ename} placeholder="Enter Name" className='mb-4' onChange={(e)=>setempadd({...empadd,empname:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="employeePosition">
                  <Form.Control type="text" value={empadd.email} placeholder="Enter Email"  className='mb-4' onChange={(e)=>setempadd({...empadd,email:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="employeeAddress">
                  <Form.Control type="text" value={empadd.designation} placeholder="Enter Designation" className='mb-4' onChange={(e)=>setempadd({...empadd,designation:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="employeeEmail">
                  <Form.Control type="email" value={empadd.url} placeholder="Image Url" className='mb-4' onChange={(e)=>setempadd({...empadd,url:e.target.value})}/>
                </Form.Group>
                <Button variant="primary" className="mr-2 mt-3" onClick={handleUpload} type="button">
                  Add
                </Button>
                <Button variant="secondary" type="button" onClick={cancelll} className='mt-3'>
                  Cancel
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </>
  );
}

export default Dashboard;
