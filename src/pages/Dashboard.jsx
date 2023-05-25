import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/use-firestore';
import { useRef } from 'react';
import useCollection from '../hooks/use-collection';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import ProjectList from '../components/ProjectList';

export default function DashboardPage() {
  const [form, setForm] = useState({ title: '', details: '' });
  const { addDocument } = useFirestore('projects');
  const formRef = useRef(null);

  // useEffect(() => {
  //   const unSub = getLiveCollection();
  //   console.log(collectionData);
  //   console.log("here");
  //   return () => unSub();
  // }, [getLiveCollection]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addDocument(form);
    formRef.current.reset();
  };

  const titleChangeHandler = (e) => {
    setForm({ ...form, title: e.target.value });
  };

  const detailsChangeHandler = (e) => {
    setForm({ ...form, details: e.target.value });
  };

  return (
    <Wrapper>
      <Header>Project dashboard</Header>
      <Projects>
        <ProjectHeader>Project list</ProjectHeader>
        <ProjectList />
      </Projects>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <CreateProject>
          <CreateProjectHeader>Create Project</CreateProjectHeader>
          <StyledLabel htmlFor="title" name="title">
            Project title
          </StyledLabel>
          <input type="text" id="title" onChange={titleChangeHandler}></input>
          <StyledLabel htmlFor="title" name="title">
            Details
          </StyledLabel>
          <textarea
            rows="4"
            cols="50"
            id="details"
            onChange={detailsChangeHandler}
          ></textarea>
          <StyledButton>Add</StyledButton>
        </CreateProject>
      </Form>
    </Wrapper>
  );
}

const StyledButton = styled.button`
  margin-top: var(--space-3);
`;

const StyledLabel = styled.h2`
  font-size: var(--font-size-2);
  margin-bottom: var(--space-1);
  color: var(--color-blueGray-400);

  &:not(:first-of-type) {
    margin-top: var(--space-1);
  }
`;

const CreateProjectHeader = styled.h1`
  font-size: var(--font-size-5);
  margin-bottom: var(--space-4);
  color: var(--color-blueGray-800);
  font-weight: var(--font-weight-medium);
`;

const CreateProject = styled.div`
  display: grid;
`;

const Header = styled.h1`
  grid-area: title;
  margin-bottom: var(--space-5);
  color: var(--color-blueGray-400);
  /* margin-bottom: 20px; */
`;

const ProjectHeader = styled.h2`
  font-size: var(--font-size-4);
  margin-bottom: var(--space-5);
  color: var(--color-blueGray-800);
  font-weight: var(--font-weight-medium);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'title title'
    'projects form';
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto;
  gap: 16px;
`;
const Form = styled.form`
  display: grid;
  grid-area: form;
  height: 200px;
`;

const Projects = styled.div`
  grid-area: projects;
`;
