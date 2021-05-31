import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Styles/Layout';
import ReviewItem from './ReviewItem';
import Title from './Title';


function Review() {
    return (

            <Reviewstyled>
                <Title title={'Reviews'} span={'Reviews'} />
                <InnerLayout>
                    <div className="reviews">
                        <ReviewItem text={'lorem bhdi hskaib hfir  baarpura best wowo good awesome thanks welcome.'}/>
                        <ReviewItem text={'lorem bhdi hskaib hfir  baarpura best wowo good awesome thanks welcome.'}/>
                        
                    </div>
                </InnerLayout>
            </Reviewstyled>
       
        )
        
        
}

const Reviewstyled = styled.div`
.reviews{
    display: flex;
}
`;


export default Review;
