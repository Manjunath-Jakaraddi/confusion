import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);

  }

  renderDish(dish) {
    if(dish != null) {
      const comments = this.props.dishdetail.comments.map((cmt) => {
        return (
          <div key={cmt.id}>
          <p>{cmt.comment}</p>
          <p>--{cmt.author},{cmt.date}</p>
          </div>
        );
      });

      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1 mt-1">
            <h3>Comments</h3>
            {comments}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  render(props) {
    return (
      <div>
          {this.renderDish(this.props.dishdetail)}
      </div>
    );
  }
}

export default DishDetail;
