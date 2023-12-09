import styled from 'styled-components';

const Container= styled.div`
    display: flex;
    flex-direction: row;
    width 100vw;
    margin-bottom: 10px;
    @media(max-width:450px){
        flex-direction: column;
    }
    .image{
        width: 40%;
        @media(max-width:450px){
            width: 80%;
        }
    }

    .elements{
        display: flex;
        flex-direction: column;
    }

    .title{
        color: orange;
    }
`

function Testimony(){
    return(
        <Container>
            <div className="image">
                <img src="" alt=""/>
            </div>
            <div className="elements">
                <div className="small-title">
                    <h5 className="title">What they say about us</h5>

                    </div>
                <div className="name-country">
                    <h3>Lionel Martin, Toulouse (France)</h3>
                </div>
                <div className="testify">
                <p className="text">Konnecct e-learning is a very good platform. They helped me to increase my knowledge in web design, and i've learned a lot of new things there. I strongly recocommand it to every one. they a dynamic team that accompagny students along all the cursus  and provide a good assistance. And the methodology is also intuitive. Thak you for all.</p>
                </div>
            </div>
        </Container>
    )
}

export default Testimony;