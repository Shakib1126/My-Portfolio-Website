import React from 'react'
import styled from 'styled-components';

function ReviewItem({text}) {
    return (
        <ReviewItemstyled>
            <p>{text}</p>
        </ReviewItemstyled>
    )
}

const ReviewItemstyled = styled.div`
    width: 50%;
    padding: .8rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    transition: all 1s ease;

    &:hover{
            border-left: 6px solid var(--primary-color);
            transform: scale(1.1)
        }

    &:not(:first-child){
        margin-left:1rem;
    }

    &:after{
        content: '';
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        bottom: 0;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
        border-style: solid;

    }

    p{
        padding: 1rem 0;

    }

`;

export default ReviewItem;
