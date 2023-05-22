import styled from "styled-components";

export default function ProfilePage() {
  return (
    <Wrapper>
      <ProfileField>
        <Header>Add/Change Profile Picture</Header>
        <button>Choose image</button>
        <button>Upload image</button>
      </ProfileField>
      <ProfileField>
        <Header>Bio</Header>
        <Label htmlFor="bio">Describe yourself</Label>
        <textarea id="bio" name="bio" rows="4" cols="50"></textarea>
      </ProfileField>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 16px;
`;

const Header = styled.h1`
  font-size: 20px;
  line-height: 1;
  padding-bottom: 8px;
`;

const ProfileField = styled.article`
  &:not(:last-of-type) {
    padding-bottom: 16px;
  }
`;

const Label = styled.label``;
