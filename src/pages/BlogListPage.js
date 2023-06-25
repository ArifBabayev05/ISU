import React, { useEffect, useState } from 'react'
import PaginationComponent from '../components/PaginationComponent'
import Pageheader from '../utils/PageHeader'
import { Col, Container, Row } from 'react-bootstrap'
import BlogForListComponent from '../components/BlogForListComponent'
import axios from 'axios'

const BlogListPage = () => {
  const url = `https://fakestoreapi.com/products`
  const [query, setQuery] = useState("")


  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
  })



  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false

    })

    axios.get(url)
      .then(response => {
        setProducts({
          loading: false,
          data: response.data,
          error: false
        })

          .catch(() => {
            setProducts({
              loading: false,
              data: null,
              error: true
            })
          })
      })
  }, [url])

  let content = null


  if (products.error) {
    content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
  }

  if (products.data) {
    content =
      products.data.map((product) =>
        <div key={product.id}>
          <BlogForListComponent product={product} />
        </div>
      )

  }

  if (products.data) {
    content =
      products.data.map((product) =>
        <div key={product.id}>
          <BlogForListComponent product={product} />
        </div>
      ).reverse();
  }
  return (
    <Container >
      <Row >
        <Pageheader header="Blog" />
        <Col md={12}>
          <div>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-lg-3 g-4 mx-5'>
              {content}
            </div>
          </div>

          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default BlogListPage