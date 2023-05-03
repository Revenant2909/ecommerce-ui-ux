import styled from "styled-components"

const Container = styled.div`
    display: flex;
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    font-size: 14px;
    justify-content: center;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>End of Season Sale! Upto 50% OFF on orders above 299$.</Container>
  )
}

export default Announcement