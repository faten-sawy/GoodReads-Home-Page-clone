import React, { useEffect, useState } from 'react'
import * as BooksAPI from '../../BooksAPI'
import {Container,Row,Col,Button} from 'react-bootstrap'
import './detailsStyle.css'

function Details(props){
    console.log(props.match.params.id)
    const id = props.match.params.id
    const[book,setBook]=useState()
    const[page,setPage]=useState()

    useEffect(()=>{
        BooksAPI.get(id)
        .then((res)=>setBook(res))       
    },[])

    const handleChange=(e)=>{
        if(e.target.value!=""){
            console.log(e.target.value)
        }
    }
    console.log(book)
    return(
       <Container className="mt-5">
           {book && <Row>
               <Col>
               <img src={book.imageLinks.smallThumbnail}/>
               </Col>
               <Col>
               <h1>{book.title}</h1>
               {book.authors.map((item)=>(<span>{item}</span>))}
               {/* <p>{book.description} ... </p> */}              
               <Button>See More</Button>
               {book.shelf==="currentlyReading" && 
               <input value={page} onChange={()=>handleChange}/>}             
               </Col>
           </Row>}
           
       </Container>
    )
}
export default Details