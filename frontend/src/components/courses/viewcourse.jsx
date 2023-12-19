import { useParams } from 'react-router-dom';
import CourseData from './coursedata.jsx'
import InteractiveVideo from './interactivevideos.jsx'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv= styled.div`	
    height : 200px;
    margin-top: 60px;
    color:#1F869C;
    font-wight bold;
    font-size:20px;
`;
const CourseContainer= styled.div`
    margin-top: 60px;
    margin-left:100px;
    margin-right:100px;
    padding-top:15px;
    padding-bottom:10px;
    width: 1200px;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const CourseHeader= styled.div`
    color: #1F869C;
    font-weight: bold;
    font-size:20px;
    
`

function ViewCourse() {
  const { id } = useParams();
  console.log('Données du cours:', id);
  const courseId = parseInt(id, 10); // Convertit l'ID en entier

  // Utilisez l'ID pour récupérer les données complètes du cours
  const course = CourseData.find((item) => item.id === courseId);
  console.log('Données du cours:', course); // Vérifiez les données du cours

  if (!course) {
    return <StyledDiv>Course not found</StyledDiv>;
    }

    return (
        <CourseContainer>
          <CourseHeader>{course.module[0].title}</CourseHeader>
          <h5>{course.level}</h5>
          <p>{course.desc}</p>
          {/* Affichez le reste des informations du cours */}
          <InteractiveVideo />
          <div>
          <Link>{course.module.chapter.id -1}</Link>
          </div>
        </CourseContainer>
      );
  
}

export default ViewCourse;