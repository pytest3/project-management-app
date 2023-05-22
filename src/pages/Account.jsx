import styled from "styled-components";

export default function AccountPage() {
  return (
    <>
      <form>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <input type="text" id="email"></input>
        </Field>
        <Field>
          <Label htmlFor="password">Update password</Label>
          <input type="numbers" id="password"></input>
          <Info>Password must be at least 8 characters long</Info>
        </Field>
        <Field>
          <Label htmlFor="gender">Gender</Label>
          <select type="" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <Info>
            This information may be used to improve your recommendations and ads
          </Info>
        </Field>
        <Field>
          <Label htmlFor="country">Country</Label>
          <input type="text" id="country"></input>
          <Info>This is your primary location</Info>
        </Field>
        <SubmitButton>Submit</SubmitButton>
      </form>
    </>
  );
}

const Label = styled.div`
  font-weight: 550;
`;
const Info = styled.p`
  font-size: 12px;
  color: gray;
`;
const Field = styled.div`
  display: grid;
  padding: 8px 0;

  &:first-of-type {
    padding-top: 28px;
  }
`;

const SubmitButton = styled.button`
  margin: 8px 0px;
  padding: 3px 8px;
  line-height: 1;
  border-radius: 8px;
  border: 1px solid gray;
  font-weight: 550;
`;
