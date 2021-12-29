import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import Header from '../../components/header/Header'
import { HomeImg, ImgDiv, MainContainer } from './HomeStyle'
import RecipeCardComp from './RecipeCardComp'
import homeSvg from '../../assets/home.svg' 


const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"]
const API_ID = "c859312d"
const API_KEY = "415004370ffc68d74d5a40febdf844f9"
const Home = () => {
    const [query, setQuery] = useState("pizza")
    const [recipes, setRecipes] = useState()
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase())

    const url=`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`;

    const getData = async () =>{
        if(query !== ""){
            const result = await axios.get(url)
            if(!result.data.more){
                alert("no food such a this name")
                setQuery("")
            }
            setRecipes(result.data.hits)
            setQuery("")
        }else{
            alert("Please fill the form")
        }
    }
    return (
        <div>
            <Header
            setQuery={setQuery}
            query={query}
            getData={getData}
            mealTypes={mealTypes}
            setMeal={setMeal}
            meal={meal}
            />
            {recipes?(
                <MainContainer>
                    {recipes.map((recipe, index) => (
                        <RecipeCardComp key={index} recipe={recipe.recipe}/>
                    ))}
                </MainContainer> ) :
                <ImgDiv>
                    <HomeImg src={homeSvg}/>
                </ImgDiv>
            }
        </div>
        
    )
}

export default Home
