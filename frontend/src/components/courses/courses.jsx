import { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import CourseData from './coursedata.jsx'

const StyledSelect= Styled.select`
    border-radius: 5px;
    border: 1px solid grey;
    margin-bottom: 3px;
    margin-left:100px;
    padding: 5px;
    width: 260px;
`
const StyledContainer= Styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    margin-left:100px;
    margin-right:100px;
    padding-top:15px;
    padding-bottom:10px;
    width: 1200px;
    height: 100%;
    border-radius: 30px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    justify-content: center;
    align-items: center;
`
const StyledRow= Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 10px;
`
const StyledCard= Styled.div`    
    width: 25%;
    height: 400px;
    margin: 10px;
    border: 1px solid grey;
    jusutify-content: center;
`
const StyledDiv= Styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid grey;
    width: 300px;
    height: 200px;
    justify-content: center;
`
const StyledCardtitle= Styled.div`
    color: #1F869C;
    font-weight: bold;
    font-size: 20px;
`
const Subscribe= Styled.div`
    background-color:#1F869C;
    color: #fff;
    text-decoration: none;
    font-size:13px;
    justify-content:center;
    padding-left: 20px;
    margin-top: 5px;
    margin-left: 5px;
    width: 80px;
    height: 30px;
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    &:hover{
      background-color: #03fce3;
    }
`
const Title= Styled.h1`
    font-size: 40px;
    color: #1F869C;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-top:150px;
    margin-bottom:5px;
    text-align: center;
`
function Courses() {
    const [courses, setCourses] = useState(CourseData)
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        if (selectedLevel) {
        const filteredCourses = CourseData.filter((course) => course.level === selectedLevel);
        setCourses(filteredCourses);
        } else {
        setCourses(CourseData);
        }
        if (selectedCategory) {
            const filteredCourses = CourseData.filter((course) => course.category === selectedCategory);
            setCourses(filteredCourses);
            } else {
            setCourses(CourseData);
            }
    }, [selectedLevel, selectedCategory]);

    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return(
        <>
        <Title> Available courses </Title>
        <label htmlFor="level">Filter by level</label><br/>
        <StyledSelect value={selectedLevel} onChange={handleLevelChange} name="level">
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </StyledSelect><br/>
        <label htmlFor="category">Filter by Categories</label><br/>
        <StyledSelect value={selectedCategory} onChange={handleCategoryChange} name="category">
          <option value="">All categories</option>
          <option value="Design">Design</option>
          <option value="Gaming">Gaming</option>
          <option value="Web Development">Web Development</option>
        </StyledSelect>
        <StyledContainer>
            <StyledRow>
                {courses.map((item) => (
                    <StyledCard key={item.id}>
                        <StyledDiv>
                            <img src={item.img} alt='' width="295px" height="200px" />
                        </StyledDiv>
                        <div className='card-body'>
                        <StyledCardtitle>
                            {item.title} -- {item.level}
                        </StyledCardtitle>
                        <div className='card-text'>
                            {item.desc}
                            <Link to={`/view/${item.id}`}><Subscribe>Discover</Subscribe></Link>
                        </div>
                        
                </div>
                    </StyledCard>
                ))}
            </StyledRow>
        </StyledContainer></>
)}

export default Courses;