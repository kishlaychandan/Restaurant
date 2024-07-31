import React from 'react'
import './Body.css'


const arr = [
    {
      "Quote": "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      "Author": "Adam Scott"
    },
    {
      "Quote": "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      "Author": "Adelle Davis"
    },
    {
      "Quote": "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      "Author": "Adelle Davis"
    },
    {
      "Quote": "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
      "Author": "Albert Einstein"
    },
    {
      "Quote": "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
      "Author": "Alice May Brock"
    },
    {
      "Quote": "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, \"Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.\" Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
      "Author": "Anthelme Brillat-Savarin"
    },
    {
      "Quote":"Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
      "Author":"Calvin Trillin"
    }
    ,
    {
      "Quote":"Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
      "Author":"Calvin Trillin"
    }
    ,
    {
      "Quote":"Tell me what you eat, and I will tell you what you are.",
      "Author":"Cyra McFadden"
    }
    ,
    {
      "Quote":"Health food makes me sick.",
      "Author":"Eike von Repkow"
    }
    ,
    {
      "Quote":"The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.",
      "Author":"Epictetus"
    }
    ,
    {
      "Quote":"I no longer prepare food or drink with more than one ingredient.",
      "Author":"Epictetus"
    }
    ,
    {
      "Quote":"Eating is really one of your indoor sports. You play three times a day, and it's well worth while to make the game as pleasant as possible.",
      "Author":"Fran Lebowitz"
    }
    ,
    {
      "Quote":"My ability to tolerate shame, to compartmentalize it, to swallow it, increased right along with my belt size. it came with the territory of being heavy. Obese people have a lifetime of experience with shame.",
      "Author":"Fran Lebowitz"
    }
    ,
    {
      "Quote":"The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.",
      "Author":"G. K. Chesterton"
    }
    ,
    {
      "Quote":"He who comes first, eats first. [Familiar as: First come first served.]",
      "Author":"Geoffrey Neighor"
    }
    ,
    {
      "Quote":"Bear in mind that you should conduct yourself in life as at a feast.",
      "Author":"George Bernard Shaw"
    }
    ,
    {
      "Quote":"Preach not to others what they should eat, but eat as becomes you, and be silent.",
      "Author":"George Dennison Prentice"
    }
    ,
    {
      "Quote":"I have never cared much for fish - it floats in the belly as much as in the pond.",
      "Author":"Henry Bromel"
    },
    {
      "Quote":"If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.",
      "Author":"J. R. R. Tolkien"
    },
    {
      "Quote":"Food is an important part of a balanced diet.",
      "Author":""
    },
    {
      "Quote":"My favourite animal is steak.",
      "Author":""
    },
    {
      "Quote":"Music with dinner is an insult both to the cook and the violinist.",
      "Author":""
    },
    {
      "Quote":"Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean.",
      "Author":""
    },
    {
      "Quote":"We don't get fat because we overeat; we overeat because we're getting fat.",
      "Author":""
    },
    {
      "Quote":"Good food ends with good talk.",
      "Author":""
    },
    {
      "Quote":"There is no love sincerer than the love of food.",
      "Author":""
    },
    {
      "Quote":"What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease",
      "Author":""
    },
    {
      "Quote":"It's important to begin a search on a full stomach.",
      "Author":""
    },
    {
      "Quote":"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
      "Author":""
    }
  ];
const Body = () => {
  return (
    <div className="section1">
        <div className="main">
            {arr.map((ele,index)=>{
                return(
                    <div key={index} className="para">
                        <p className='quote'>{ele.Quote}</p>
                        <p className='author'>{ele.Author}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default Body;