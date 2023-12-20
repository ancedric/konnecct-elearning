import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin-bottom:20px;
    @media(max-width:450px){
        height: 100vh;
    }

    .description{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
    }

    .cards-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        @media(max-width:450px){
            flex-direction: column;
            overflow: scroll;
        }
    }

    .card{
        display: flex;
        flex-direction:column;
        background-color:#fff;
        border-radius: 5px;
        width: 30%;
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

function PopularCourse({course}){
    //on tri le tableau en fonction du nombre d'abonnés
    const sortCourses = [...course].sort((a, b) => b.followers - a.followers);
    //on prend les trois premiers cours après le tri
    const popular = sortCourses.slice(0, 3);
    
    return(
        <Container>
            <div className="description">
            <h3>Our popular courses</h3>
            <p>Online education platform is very easy way to learn anything from any where now a days.</p>
            </div>
            <div className="cards-container">
                {popular.map((item) => (
                    <div key={item.id} className="card">
                        <div className='image'>
                            <img src={item.img} alt={item.title} width="94%" />
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
        </div>
        </Container>
    );
}

export default PopularCourse;
