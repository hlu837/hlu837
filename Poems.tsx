import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Poems = () => {
  const [searchParams] = useSearchParams();
  const selectedPoem = searchParams.get('poem');

  const poemData = {
    'lost-chance': {
      title: "Lost chance",
      content: `They had the privilege to meet God in person.
    Incomparable chance time had given them,
    They were exceptional as a generation,
    Emmanuel would be their identification.
    But as soon as they notice and feel offended,
    They believe that he deserves to be crucified.
    What a pity! what a significant loss!
    To encounter God and fail to recognize
    That was the cost of their ignornce... `
    },
    'sarahs-laugh': {
      title: "Sarah's laugh",
      content: `I heard the pain in her voice,
    the tierd heart, tearful eyes,
    She had given up a thausend times'
    And grieved so many nights'
    But today she laughs,
    A wondrous laugh,
    She brust into laughter,
    uncertain of its origin
    unsure of her true feelings,
    She just laughed,
    upon learning
    That she was going to e a mother.
    She laughedat herself,
    She laughed at her past,
    She laughed at the days she thought that God lies,
    She laughed at the years she looked for her ways
    She laughed at her age wishing to know,
    looking at her body how late she is now,
    She laughed.
    When the mind fights with logic
    And the heart fights with God,
    That laugh holds sadness, also happiness
    it carrries madness and gratefulness,
    Her laugh was special,
    Prompting God to explain.`
    },
    'my-door': {
      title: "My door",
      content: `My locked door was chosen somehow,
    You came around and knocked it to show,
    The unbelievable...
    And in my bed i say to myself,
    My blanckets are too warm to leave,
    So instead lets lie and guess,
    What he could show...

    I never give that much care when it says,
    "Be not wise in thine own eyes"
`
    },
    'fate': {
      title: "Fate",
      content: ` You call it fate,
    The unchangable human destiny,
    You have grounds,
    to criticize the one who chose it to be,
    But what makes you think,
    that it can't be altered'
    Sometimes i wonder how jacob comes up,
    with the idea of buying a birthright,
    how obsessed he was with the blessing,
    even though life didn't allow him 

    That was a genuine fate,
    he declined to accept,`
    },
    'what-if': {
      title: "What if",
      content: `What if there is no heaven? 
What if there is no hell?
What if there is no compensation ? 
What if there is no pain?
What if you don't have to pay?
For what you have been choosing 
No reward, no wrath.
What if there is no such thing?
Would you still choose to follow him?
Out of love and passion 
Would you still sing about him?
That he's your shepherd and king
Follow his rules 
love his commandments. 
Admire his handmade work 
and look for his presence. 
Would u still do these
Knowing that you will end up in Sheol with the sinners
I think that's what David did
I think that's why he was called. 
"A man after my own heart."`
    },
    'its-not-about-you': {
      title: "It's not about you",
      content: `it is not about the trauma 
it is not about the therapy 
it is not about the depression 
the rage of one's past illusion 
it's not about the what if of yesterday 
and the fear of tomorrow's fate
when patterns keep standing on ones gate
the curses of generation 
unbreakable faith of people that shed them from redemption 
it's not about how broken someone can be
The unfairness of life shows up every morning 
it's about who healed u that u got broken again and again
the pills u take to sleep didn't save u from the monster in ur dream
u get given new principles each day to survive
cus when it get noon the last one expires
no meditation no medicine 
no distraction and no passion 
can answer ur soul's question 

but when the spirit gets repaired
nothing matters 
even the scars become makeup
when the love of God gets in the way
steal our eyes to see his Grace 
that's the real feeling of being alive


but since
believe what u want has became the motto of our planet
and
let the blind lead the blind is the target 
we can agree that we r lost

the world can't rescue what it breaks
u can't relay on the healers
there is no success that can save us from being dust
and there is no lie that can convince us that we r perfect
only Gods covenant if we believe it


it's not about how lost u r
it's about who find u`
    },
    'children': {
      title: "children",
      content: `Be like children, the bible says,
    And this might be one of the reasons,
    Children know how to be kind,
    children know how to give love back,
    children know how to smile,
    That instant time they were crying,
    not to hide something but,
    Happiness is what they really appriciate,
    their body chose to avoid resentment,
    They love their enemy again and again,
    there is no place for long-lasting pain,
    They can't process the daamage they endured.
    their world is big, big enough for any load,
     Children are cool,
     the type of cool the world couldn't achieve for a long time.`
    },
    'ሀና ሆይ': {
      title: "ሀና ሆይ",
      content: `ሀና ሆይ
      ጸሎትሽ ተጽፏል በቅዱሱ መጽሃፍ
      እምነትሽ ተነቧል በትውልድ ሁሉ አፍ
      ልብሽም ተጽናንቷል ደስታሽ ወሰን እስኪያልፍ.
            እስኪ ልጠይቅሽ...
      እልፍ ቆነጃጅት የኖሩትን ህይወት
      አንቺ ጋር ሲመጣ እንዴት ሆነ ስኬት?
      ብርቅ እኮ አልነበረም ልጅን ማቀፍ ወልዶ
      ግን እግዚአብሄር ከብሯል ፍለጋሽን ወዶ
          ልቤ ሊፈርድብሽ እጅጉን ከጅሏል
          ከአስር ብላቴና ህልቃና ይሻልሻል
          ግን በእግዚአብሄር ዐይን ፍለጋሽ ተወዷል ጸሎትሽ ተሰምቷል
          ያልገባኝን ትግል አንቺ አሸንፈሻል 
                        ሀና ሆይ`
    },
    'judass-mindset': {
      title: "Judas's mindset",
      content: ` What if it is us?
Who misunderstood Judas
What if he didn't regret 
And was sure about selling jesus
What if he didn't feel bad for his bad luck and forfeiture
Just because he fall for 30 pieces of silver
What if he felt bad for himself because he really thought 
his desolation would be filled by the money he will get.
All of those days, all of those years
He deceived himself by thinking the wealth would find him peace
And at the end the hole in his soul was still vacant. 
What if the mistake is not selling him
Because He was there The whole time
People get healed. He has seen them
And Never dare to ask
For redemption 
Because he didn't believe that he could heal him 
From the illness that nobody acknowledged 
From the person that he call "ME"
He might not know he might not believe
Or he might have thought he could deal with it
He might have thought he was unsolvable. 
Yet it cost him his life.`
    },
    'illusion': {
      title: "illusion",
      content: `The mind is blank when it comes to basic questions.  
Look for guidance, hear some advice just to fail better  
"Maybe one day... maybe one day,"  
That's what they say.  
But how can someone live with "maybe one day" hope?  
Life doesn't side with the weak and dumb.  
We need to believe in something bigger  
That can always make things better,  
With or without trying to change.  
Life can be lived, days can be passed,  
But then what? What is the point?  
Aren't we expected  
To beat our cage and smallness?  
Isn't accepting sometimes a curse?  
Isn't passing a priority?  
Shouldn't growing be a necessity?  
So for those mysterious things that suck energy,  
Faith is missed, I guess.  
It is not like being illusional; 
It is assured later we can rely on.`
    },
    'figure-it-out': {
      title: "figure it out",
      content: `Life....
As dark as it looks,  
There is some light I found in it.  
As vivid as it appears 
Such emptiness has filled the spaces.  
"It's not what it seems" is my usual phrase;  
Not disappointed, not surprised—  
It is simply "as expected."  
But, to find peace in chaos, plus  
To achieve success in mere existence—  
That's something else!  
Everybody knows life is more than this,  
Yet we just cope by making memories,  
As if we should look back and say, "Those good old days."  
But who cares?  
Our tomorrow should always be top,  
Which will embrace countless hopes.  
At the end of the day, our purity shall reflect;  
Innocence is a gift,  
But if it is not, we need to earn it.  
Otherwise, it's all gonna be waste.`
    },
    'say-it-out': {
      title: "say it out",
      content: ` Whatever thing you think about
Whatever questions your heart have,  
Whatever laws and commandment,  
Whatever God's way you couldn't love,  

Why don't you say it out?  

Do not live your life with embitterment,  
As if God is too far to meet.  
Do not practice toleration  
As if the Bible owes you no explanation.  
Don't trust your mind that much;  
Even if you are smart,  
There is always something  
You haven't discovered and found out.  

So stand upon your watch and ask for His word.  
Say what you have to say until you are convinced.  
He knows He is right,  
So let Him show you that.  

His word gives life his law restores soul
Anything u believe to have no answer
U will say" it was so simple and obvious" with wonder`
    },
    'as-david-said': {
      title: "As david said",
      content: `Well, I never prayed for the sun. 
though she keeps rising anyway. 
Who would I be to obey her to stand?
I am far from being that special.
But since the sun sets and rises
And my mind still counts,
The hours of  the days
Without figuring out what life is.
It resembles a dream or a nightmare.
Everybody runs to get nowhere?
Or am I overlooking something and stacking?


I simply inquired about my end. 
As David said...`
    },
    'oh-god': {
      title: "Oh God",
      content: `For I said in my haste,
 I  am cut off before his eyes,
and my city was rounded,
When gates are closed and hopes faded
i was on the verge of being a  witness,
that God betrays!
oh God,
you've made me believe,
And you drew me with bands of love
For someone who is adept ,
in moaning without rest,
It is difficult not to notice,
 that you are patient,
oh God ,
there would be no me,
if not for your mercy,
you created...
 heaven and earth,
life and death ,
and I am surprised ,
how creating me was in your mind,
oh God,
i am so  grateful,
For having you who have saved my soul,
And count me in your covenant.
I hate tp be hypocrite
But honestly  
if luck was a person
It would be me`
    },
    'what-matters': {
      title: "what matters",
      content: `Since everything's vain
Which one would be
To be smart enough or to be negligent 
To be sad or to be confident
To be enthusiastic or to be cool
To be empty or to be full
To be emotional or to be cold
To be humble or to be proud 
To be diligent or to be bored
To be happy or to be anxious 
To be gluttony or to be selfless
To sing or to cry 
To sleep or to pray
Which one would be right in God's eyes
That's what matters.`
    },
    'for-what-do-you-know-me': {
      title: "For what do you know me",
      content: `𝙛𝙤𝙧 𝙬𝙝𝙖𝙩 𝙙𝙤 𝙮𝙤𝙪 𝙠𝙣𝙤𝙬 𝙢𝙚?


Guess who i am,
I am the least person in God's kingdom,
When they say " late is better than never "
I took it seriously tho i lived with honour. 
I am real example of 'when God says he says'
My birth was miracle my life irresistible,
one blameless person Always purposeful, indestructible.
i master discipline i deny all my will.
I didn't overact and it never felt burden.
Nah, don't ask me for advice,
I am condemner not soft hearted teacher.
I lived telling facts criticism lover.
So trust me when i say,
you will be ahead of me,
I bet u wonder why,
Because i am ...
The one who will be acknowledged by his glimmer faith,
Who was on the verge of almost denying his belief,
That's sad truly,
I was human after all.
So how was your guess,
"for what do you know me?"
You know moses for his humbleness,
You know David for his songs,
You know Solomon for his wisdom ,
And Absalom he was handsome ,
Oh, never mind; I will tell you straight forward , 
This is what i was called,
"Among them that are born of women 
there hath not risen a greater than john"
Yet i am still the least at God's kingdom.

some know me for prophet,
Some as a baptizer,
Some know for a road sweeper  
And some as failure ,
Somebody who died due to the wish of one girl.

It's all up to you,
To chose how to know me,
It will define you as it defines me!`
    },
    'transgression': {
      title: "Transgression",
      content: `Those proud Israelites,
      they were called your own,
      your commandments were their lifestyle,
      They were certain to death'
      that they have got the sole correct path'
      All they wanted was,
      to regain their realm,
      to please you with freedom,
      believing that...
      Embracing your covenant for centuries,
      was all they need to find out your intentions,
      Not to chase and catch the truth,
      But what truth?
      what did they miss?
      All they did was waiting for your promise,
      What could they do?
      other than being a believer,
      while you send a prophet instead of a warrior,
      He even alleged that he was God,
      knowing you were their only lord,
      How would they not kill him for good,
      ...
      They never deny you
      Yet they never know you.
      `
    },
    'but-we': {
      title: "But we",
      content: `Million things the mind analyzes,
    Judging my choices every damn seconds,
    for the natural man impossible move,
    i never thought i would say this too!
    The jews require a sign
    The greeks seek after wisdom
    But we...
    We look for your righteousness and kingdom.`
    },
    'insanity': {
      title: "insanity",
      content: `The fact they will say "oh lord!"
"How could you say we'r not recognized? 
Weren't we with you all the time?
Didn't we pray in your name?"
How did they not know when he left them
That's insanity 
               .
               .
               .
Not misunderstanding `
    },
    'do-something': {
      title: "do something",
      content: `You can accept it or ignore and die
Hell is real and we all seem okay 
Did i miss something?
Since i am good at not judging people
Saying this out has become simple
Y'all seem you know what you are upto
Don't confuse heaven and earth 
Some of you are sure like you are a  guaranteed member
ANd don't even know the bare minimum The lord in number
We have many issues to discuss about
Most of the times God is not in it
Soo..
What is the plan what are we doing


I will hold your hand when i say this one
It is offensive yet i can not lie
Hell is real and you r not ready
Clock is ticking, you shall do something`
    },
    'new-tomorrow': {
      title: "New tomorrow",
      content: `There is a new chance, a new tomorrow.
There is a new life after the sorrow.
There is a freedom; God paid the price.
We disobeyed, and he was mad, of course.
But
What else could save one other than mercy?
children of wrath we were already
We wouldn't reach out for him through our way.
We wouldn't know that love can change a story.
It is not some consolation that we get for our loss.
It is a pure gift that the Son of God died for us.
Forgotten, cursed, hopeless, unloved
Bitter heart, cold soul, uneasy mind...
God chose to save us; let's choose the same.

There is still life until we're gone. `
    }
  };

  const currentPoem = selectedPoem ? poemData[selectedPoem as keyof typeof poemData] : null;

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="px-10 py-10">
        {currentPoem ? (
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="text-poetry-blue hover:text-poetry-blue-dark transition-colors mb-6 inline-block"
            >
              ← Back to Home
            </Link>
            
            <div className="bg-poetry-content-bg rounded-xl shadow-soft p-8">
              <h1 className="text-3xl font-bold mb-6 text-center">{currentPoem.title}</h1>
              <div className="text-lg leading-relaxed whitespace-pre-line">
                {currentPoem.content}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">All Poems</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(poemData).map(([key, poem]) => (
                <Link
                  key={key}
                  to={`/poems?poem=${key}`}
                  className="bg-poetry-content-bg rounded-xl shadow-soft p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <h2 className="text-xl font-semibold text-center hover:text-poetry-blue transition-colors">
                    {poem.title}
                  </h2>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/" 
                className="text-poetry-blue hover:text-poetry-blue-dark transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Poems;
