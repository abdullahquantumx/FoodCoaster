import styled from 'styled-components'
import { Link } from "react-router-dom"
const Restaurant = () => {
    return (
        <>
            <Container>
                <div className='heading'>
                    <h1>Kitchens</h1>
                </div>
                <cards className='cards'>
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="./images/chicken.jpg" alt="Card image cap" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Calorie</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/Restaurants/Calorie.js" className="btn btn-success">Try Me</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="./images/pizza.jpg" alt="Card image cap" />
                        <div className="card-body text-center">
                            <h5 className="card-title">DosaPlaza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/Restaurants/DosaPlaza.js" className="btn btn-success">Try Me</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="./images/fry.jpg" alt="Card image cap" />
                        <div className="card-body text-center">
                            <h5 className="card-title">AgainEat</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/Restaurants/AgainEat.js" className="btn btn-success">Try Me</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="./images/rolls.jpg" alt="Card image cap" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Hexagon</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/Restaurants/Hexagon.js" className="btn btn-success">Try Me</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="./images/butter.jpg" alt="Card image cap" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Rankol</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/Restaurants/Rankol.js" className="btn btn-success">Try Me</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="./images/dal.jpg" alt="Card image cap" />
                        <div className="card-body text-center">
                            <h5 className="card-title">LT-6</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/Restaurants/LT6.js" className="btn btn-success">Try Me</Link>
                        </div>
                    </div>
                </cards>
                <footer>
                   <div >
                    
                   </div>
                </footer>
            </Container>
        </>
    )
}

export default Restaurant
const Container = styled.div`
background: rgba(0,0,0,0.45)url('./images/dc.webp')no-repeat center center/cover;
color:blue;
background-blend-mode: darken;
.cards{
    display: flex;
    flex-wrap: wrap;
    margin-left:180px;
    margin-top: 40px;
    gap: 130px;
    /* background-color: black; */
}
.card{
    border-radius: 10px;
    background-color: black;
    opacity: 0.6;
}
.card-body{
color: white;
/* opacity: 0.6; */

}
.btn{
    transition: all 0.1s ease 0.1s;
}
.btn:hover{
    background-color: #198754;
    padding: 12px 24px;
    box-shadow: 0 0 0 0px #198754,
    0 0 25px #198754,0 0 50px #198754,
    0 0 100px #198754,0 0 200px #198754;
}
.heading{
    color: #fff;
    text-transform:uppercase;
    text-shadow: 0 0 30px #fff;
    text-align: center;
}

`


