import { useContext, useState } from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/use-firestore';
import { useRef } from 'react';

import ProjectList from '../components/ProjectList';
import { AuthContext } from '../store/auth-context';
import Lists from '../components/Lists';

export default function DashboardPage() {
  const [form, setForm] = useState({
    title: '',
    details: '',
    isComplete: false,
    userId: '',
  });
  const [showActive, setShowActive] = useState(false);
  const { addDocument } = useFirestore('projects');
  const formRef = useRef(null);

  // useEffect(() => {`
  //   const unSub = getLiveCollection();
  //   console.log(collectionData);
  //   console.log("here");
  //   return () => unSub();
  // }, [getLiveCollection]);

  const { user } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addDocument(form);
    formRef.current.reset();
  };

  const titleChangeHandler = (e) => {
    setForm({ ...form, title: e.target.value, userId: user.uid });
  };

  const detailsChangeHandler = (e) => {
    setForm({ ...form, details: e.target.value, userId: user.uid });
  };

  return (
    <Wrapper>
      <PageHeader>Dashboard</PageHeader>
      <Projects>
        <ProjectHeader>
          <Title>Project list</Title>
          <label>
            <input
              type="checkbox"
              onClick={() => setShowActive(!showActive)}
            ></input>
            Only show active
          </label>
        </ProjectHeader>
        <ProjectList showActive={showActive} />
      </Projects>
      <SideBar>
        <Lists />
      </SideBar>
      <CreateProject>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
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
        </Form>
      </CreateProject>
    </Wrapper>
  );
}

const SideBar = styled.aside``;

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
  line-height: 1;
`;

const CreateProject = styled.div`
  margin-left: var(--space-5);
  background-color: var(--color-white);
  padding: var(--space-5);
  border-radius: var(--border-radius-large);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  height: 300px;
  width: 500px;
`;

const PageHeader = styled.h1`
  grid-area: title;
  line-height: 1;
  margin-bottom: var(--space-5);
  padding-bottom: var(--space-4);
  color: var(--color-blueGray-400);
  font-size: var(--font-size-7);
  border-bottom: 1px solid var(--color-blueGray-100);
`;

const ProjectHeader = styled.h2`
  margin-bottom: var(--space-4);
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: var(--font-size-5);
  color: var(--color-blueGray-800);
  font-weight: var(--font-weight-medium);
  line-height: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'title title title'
    'sidebar projects form';
  grid-template-columns: 200px auto 1fr;
  grid-template-rows: auto;
`;

const Form = styled.form`
  display: grid;
  grid-area: form;
  height: 100%;
`;

const Projects = styled.div`
  grid-area: projects;
  padding-right: var(--space-5);
  /* justify-self: start; */
  background-color: var(--color-white);
  padding: var(--space-5);
  border-radius: var(--border-radius-large);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  min-width: 300px;
`;
