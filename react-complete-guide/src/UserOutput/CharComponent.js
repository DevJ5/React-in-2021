import React from 'react'
// import Radium from 'radium'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: inline-block;
padding: ${props => props.altaaa ? '1px' : '2px'};
text - align: center;
margin: 16px;
border: 1px solid black;
&: hover {
    background - color: red;
}
`;

function CharComponent(props) {
    // const style = {
    //     display: "inline-block",
    //     padding: "16px",
    //     textAlign: "center",
    //     margin: "16px",
    //     border: "1px solid black",
    //     ':hover': {
    //         backgroundColor: "red"
    //     },
    //     '@media (min-width: 1000px)': {
    //         padding: "4px"
    //     }
    // }



    const isOn = true;

    return (
        <StyledDiv altaaa={isOn} onClick={props.onDelete}>
            {props.value}
        </StyledDiv>
    )
}

//export default Radium(CharComponent);
export default CharComponent
