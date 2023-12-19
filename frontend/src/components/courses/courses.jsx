import { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import CourseData from './coursedata.jsx'
const Container= Styled.div`
    display: flex;
    flex-direction: column;
    width: 95vw;
    justify-content: space-around;
    align-items: center;
`

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
    padding-top:15px;
    padding-bottom:10px;
    width: 90vw;
    border-radius: 30px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    justify-content: space-around;
    align-items: center;
`
const StyledRow= Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80vw;
    @media(max-width:450px){
        flex-direction: column;
    }

    .card{
        display: flex;
        flex-direction:column;
        background-color:#fff;
        border-radius: 5px;
        width: 30%;
        margin-bottom: 10px;
        @media(max-width:450px){
            width:80%;
        }
    }

    .image{
        border-radius: 3px;
        width: 100%;
        align-items: center;
        padding: 5px;
    }

    .card-body{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 5px;
    }

    .card-cat{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .category, .card-like{
            border-radius: 5px;
            background-color: #f5b942;
            font-size: 9px;
            margin-left: 10px;
            margin-right: 10px;
            font-weight: bold;
            padding: 5px;
        }
    }

    .card-title{
        display: flex;
        flex-direction: column;
        .title{
        font-weight: bold;
        font-size: 13px;
        }
        .card-level{
            font-size: 9px;
            color:#858381;
        }
    }

    .subscription{
        text-decoration: none;
        color: #fff;
        width:100%;
        background-color:#287fb5;
        border: none;
        border-radius: 5px;
    }

    `
function Courses() {
    const [courses, setCourses] = useState(CourseData)
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        if (selectedCategory) {
            const filteredCourses = CourseData.filter((course) => course.category === selectedCategory);
            setCourses(filteredCourses);
            } else {
            setCourses(CourseData);
            }
    }, [selectedCategory]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return(
        <Container>
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
                    <div key={item.id} className="card">
                        <div className='image'>
                            <img src={item.img} alt={item.title} width="97%" />
                        </div>
                        <div className='card-body'>
                            <div className='card-cat'>
                                <div className='category'>{item.category}</div>
                                <div className='card-like'>{item.followers} Followers
                                </div>
                            </div>
                            <div className="card-title">
                                <div className='title'>{item.title}</div>
                                <div className='card-level'>{item.level}</div>
                            </div>
                            <Link to={`/view/${item.id}`}><button className="subscription">Discover</button></Link>                  
                        </div>
                    </div>
                ))}
            </StyledRow>
        </StyledContainer></Container>
)}

export default Courses;