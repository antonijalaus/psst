
document.addEventListener("DOMContentLoaded",function(){

  const quotesPool = [['I love the way you look at me.'],
['I love how you can make me feel like I’m the only person in the world.'],
['I love how with you I can be myself.'],
['You make my heart & soul go ashdugfuzawgzfgaw.'],
['Pretty sure that at this point you know me better than I know myself.'],
['You are always willing to help.'],
['You make me smile when nobody else can.'],
['I love how non-judgemental you are.'],
['You’re always there for me, no matter what.'],
['You motivate me to always do better.'],
['Your honesty.'],
["When you read me stories even when you're exhausted and have work in the morning."],
['You make me feel like I can get through anything, as long as I have you.'],
['You are so so hard-working, it impresses me every time.'],
['You take care of me and spoil me. :)'],
['You make time for just the two of us.'],
['How determined you are to make this relationship work.'],
['You help me see the world differently.'],
['Your jokes. (Yes, even the puns)'],
['I love how well we understand each other.'],
['I love it when we think or say the same thing at the same time.'],
['Your arms feel like home.'],
['You somehow manage to help me stay calm when my life is in absolute chaos.'],
['You keep your promises.'],
['You help me understand things.'],
['You listen to my playlists without ever complaining about it even though they’re not exactly your cuppa tea.'],
['I love how forgiving you kind are you.'],
['You are the handsomest and I can’t believe I get to call you mine.'],
['Because when things don’t go as planned, you roll with it, instead of getting stressed.'],
['You always believe in me and inspire me.'],
['I can always talk to you about literally everything.'],
['I love how goofy you can be sometimes.'],
['I love it when you do your bouncy hair thing.'],
['You love me even when I’m being horrible and hard to be around.'],
['I love it when you ramble about things you’re passionate about.'],
['You are doing everything to become a better person for yourself and for us.'],
['I love how thoughtful you are.'],
['You make me a better person.'],
['I love how supportive you are and how you’re my biggest fan.'],
['You made so many of my dreams come true.'],
['You motivate me to do the things I’m afraid of.'],
['Because I can’t imagine life without you.'],
['You don’t just tell me you love me, you show me.'],
['You never give up on me, even when I’m at my worst.'],
['You’re dedicated to your job and genuinely enjoy it.'],
['You always have an idea of something fun to do.'],
['You make me feel completely cherished and adored.'],
['I love how you never cease to give me butterflies.'],
['I love that I get to go through life with you.'],
['You notice the little things.'],
['I love the way you inspire me.'],
['I love how open-minded you are.'],
['Your laugh.'],
['Your sleepy voice. :)'],
['You make the dark a little less scary.'],
['You are everything I never knew I needed.'],
['I love how deeply you care about your family and the people close to you.'],
['You’re not afraid to be silly with me.'],
['You’re always sending me memes because you want me to enjoy them too.'],
['I love that you make my fears melt away.'],
['I love that you take care of me when I forget to.'],
['I love you because you’re the reason I can go to sleep with a smile on my face.'],
['You make me laugh, even when I feel like crying.'],
['When you order for me.'],
['I love how the time flies whenever we’re together.'],
['I love that you let me steal your food.'],
['I love it when you sing something in a goofy voice.'],
['I love how passionate you are about all things hot pink.'],
['I love how you value my opinions.'],
['I love it when we’re on a call while you’re driving home from work.'],
['When you imitate Mr. Blush and his movements.'],
['I love how deep you can get into a game you enjoy.'],
['I love how you’re always helping me make decisions, big and small.'],
['I love how close to you I always feel, even when we’re far away from each other.'],
['How you’ve introduced me to so many things I now enjoy.'],
['I love being yours.'],
['I love knowing I’m 100% safe with you.'],
['I love how you pay attention to me even when there’s other people around.'],
['I truly look up to you.'],
['I love randomly smiling and realising I’m thinking of you.'],
['I love how loyal you are.'],
['I love that you’re so incredibly emotionally intelligent.'],
['I love that you let me take pictures of you.'],
['I love knowing that no matter how far we are from each other, you’re still always with me.'],
['How you taught me to trust and let people in again.'],
['I love waking up to a good morning message from you.'],
['I love how you let me wake you up in the middle of the night if I need you.'],
['I love every present you got me.'],
['I love how you stand your ground.'],
['That you care about the same things and social issues as I do.'],
['How jeans will always remind me of you.'],
['When you tell me about you day.'],
['I love that you gave me your meow shirt so we can both feel close to each other.'],];


  let oldQuoteIndex;

  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }


  function generateNewQuote() {
    let index = generateNumber(quotesPool);

    while (index === oldQuoteIndex) {
      index = generateNumber(quotesPool);
    }
    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");

//Show new quote and author on page
    quote.innerHTML = newQuote[0];

    oldQuoteIndex = index;
  }

  function generateNewColor() {
    let index = generateNumber(colorsPool);

    while (index === oldColorIndex) {
      index = generateNumber(colorsPool);
    }
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let background = document.body;
    let text = document.querySelector(".container");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];

    oldColorIndex = index;
  }

  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
      generateNewColor();
    });
  }

  onQuoteButtonClick();

// Get the first quote and color scheme on window load
  window.onload = function () {
    generateNewQuote();
  };

});
