import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  const RenderDish = ({dish}) => {
    if(dish != null) {


      return (
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
      );
    } else {
      return (<div></div>);
    }
  }

  const RenderComments = ({dish}) => {
    if(dish!=null) {
      const comments = dish.comments.map((cmt) => {
        return (
          <div key={cmt.id}>
          <p>{cmt.comment}</p>
          <p>--{cmt.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
          </div>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1 mt-1">
          <h3>Comments</h3>
          {comments}
        </div>
      );
    } else {
      return <div></div>
    }
  }
  const DishDetail = (props) => {
    return (
      <div className="row">
        <RenderDish dish={props.dishdetail}/>
        <RenderComments dish={props.dishdetail}/>
      </div>
    );
  }


export default DishDetail;
