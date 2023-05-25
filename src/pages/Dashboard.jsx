import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/use-firestore';
import { useRef } from 'react';
import useCollection from '../hooks/use-collection';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import ProjectList2 from '../components/ProjectList';

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
        <ProjectList>
          <ProjectList2></ProjectList2>
        </ProjectList>
      </Projects>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <label htmlFor="title" name="title">
          Project title
        </label>
        <input type="text" id="title" onChange={titleChangeHandler}></input>
        <label htmlFor="title" name="title">
          Details
        </label>
        <textarea
          rows="4"
          cols="50"
          id="details"
          onChange={detailsChangeHandler}
        ></textarea>
        <button>Add</button>
      </Form>
    </Wrapper>
  );
}

const Header = styled.h1`
  grid-area: title;
  margin-bottom: 32px;
`;

const ProjectHeader = styled.h2`
  font-size: 20px;
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
const ProjectList = styled.ul``;
const Projects = styled.div`
  grid-area: projects;
`;
