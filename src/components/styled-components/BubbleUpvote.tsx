import styled from 'styled-components'

export const BubbleUpvote = styled.span<{upvote: boolean, up: boolean}>`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: rgba(0, 0, 0, .3);
  color: #FFF;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: ${props => props.upvote ? "20px" : "10px"};

`
