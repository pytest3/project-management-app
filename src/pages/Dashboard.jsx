import styled from "styled-components";

export default function DashboardPage() {
  return (
    <Wrapper>
      <h1>This is the project dashboard</h1>;
      <Form>
        <label htmlFor="title" name="title">
          Project title
        </label>
        <input type="text" id="title"></input>
        <label htmlFor="title" name="title">
          Details
        </label>
        <input type="text" id="title"></input>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Form = styled.form`
  display: grid;
`;
