import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StarRatings from '../index';
const StarsRatingComponent = ({average}) => {


    return (
        <div className="page-wrap">
            <div>
                <StarRatings
                    rating={this.state.rating}
                    isSelectable={true}
                    starRatedColor={'blue'}
                    isAggregateRating={false}
                    changeRating={this.changeRating}
                    numOfStars={6}
                />
            </div>
            <div>
                <StarRatings
                    rating={3.33}
                    isSelectable={false}
                    isAggregateRating={true}
                    starWidthAndHeight={'40px'}
                    starSpacing={'15px'}
                />
            </div>
        </div>
    )
}