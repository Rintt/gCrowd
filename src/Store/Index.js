const redux = require("redux");

const initialState = {counter : 0, page : window.location.pathname, ideas: [
  {
  id:1,
  short:'I want to give vegetarians the possibility to pursue their environmental friendly lifestyle also in Singapore.',
  long:'I want to give vegetarians the possibility to pursue their environmental friendly lifestyle also in Singapore. Meat is one of the biggest producer of CO2, so vegetarian lifestyle really has an impact on the wellbeing of the planet.',
  need:'I need vegetarian food recipes containing mainly asian groceries to keep the price low. Those dishes can be approved by professional cooks to maintain high quality.',
  team:'I am Jannik and currently in my last year Management and Technology at the technical university of Munich. I am really interested in sustainable topics as it helps to maintain our planet for future generations.',
  founderInfo:'Jannik Moench',
  likes:0,
  phase: 1,
  campus:'SMU',
  imgSource:'A',
  title: 'Vegeterian Food Stall',
  progress:'10'
},
{
  id:2,
  short:'I want A Food Court with Zero Food Waste. Creating collection windows for leftover food to be picked up by students, faculty or administration before the stalls close down and throws it away.',
  long:'I want to tackle the food waste on campus. At the end of the day, all the food left over on the food stalls which is still in good conditions to be consumed could be repurposed, instead of being just thrown away. We could establish a collection time window in which these foods are sold at a discount or even donated, to prevent them from ending in the bin.',
  need:'Code & platform design: I need the specific platform to operate and execute the idea. It could take the form of an APP that sends students a message when there is leftover food ready for collection. Students who receive the message could be able to accept the request on a FCFS basis and walk physically to the food stall to collect it within the timeframe provided.',
  team:'I am Mariona Planella, currently on my last year at ESADE University in Barcelona pursuing my exchange semester at SMU. My previous professional career has enabled be to experience sustainability from a close standpoint and this has enabled me to more proactively initiate conversations around this topic. Now, in Singapore, I see an opportunity to further continue those conversations and hopefully generate more impact and contribute to a more sustainable world.',
  founderInfo:'Mariona Planella',
  likes:0,
  phase: 2,
  campus:'SMU',
  imgSource:'B',
  title: 'Zero Food Waste',
  progress:'30',

},
{
  id:3,
  short:'The university lacks environmentally friendly food options. Therefore I propose a food stall “GreenFood” with a range of vegetarian and vegan food options.',
  long:'I want to give vegetarians the possibility to pursue their environmental friendly lifestyle also in Singapore. Meat is one of the biggest producer of CO2, so vegetarian lifestyle really has an impact on the wellbeing of the planet.',
  need:'I need vegetarian food recipes containing mainly asian groceries to keep the price low. Those dishes can be approved by professional cooks to maintain high quality.',
  team:'I am Jannik and currently in my last year Management and Technology at the technical university of Munich. I am really interested in sustainable topics as it helps to maintain our planet for future generations.',
  founderInfo:'Paul Henrik Gosch',
  likes:0,
  phase: 0,
  campus:'SMU',
  imgSource:'C',
  title: 'GreenFood',
  progress:'55'

},
{
id:4,
short:'Setting up multiple trash cans for garbage separation on campus to improve recyclability and usage of the remaining value found in waste.',
long:'All the trash cans on campus are only for general waste. What if there were multiple trash cans for different kinds of waste on campus? The remaining value in our waste could be split up for example into plastics, biodegradables, paper and much more. This way, the materials could all be recycled much more effectively, according to their individual remaining utility. ',
need:'Funds to set up different bins, workforce to manage the disposal / regular emptying of the trash cans as well as workforce for coordination with garbage recycling partners.',
team:'Hi, Im a third year exchange student from Munich, Germany where I study Management & Technology at the Technological University. My previous experiences in controlling, accounting and logistics in the car manufacturing and e-commerce industry help me tackle problems like the "IdeasJam 2022" at NTU this year.',
founderInfo:'Georg Graf',
likes:0,
phase: 1,
campus:'SMU',
imgSource:'D',
progress:'25',
title: 'Waste Seperation Trash Cans',

},

]}  

function rootReducer(state = initialState, action) {
  // console.log(state.page)
  switch (action.type) {
    case 'pageChange':
      return {
        ...state,
        page : action.value,
        
      }
    case 'increment':
      let newIdeas = [...state.ideas];
      let newIdea = newIdeas[action.id-1]
      if((parseInt(newIdea.progress) ) >= 100){
        return state;
      }
      newIdea.progress = (parseInt(newIdea.progress) + 1).toString();
      newIdeas[action.id-1] = newIdea; 
      return {
        ...state,
        ideas: newIdeas
      }
    case 'newIdea':
      let newIdeas2 = [...state.ideas];
      let newIdea2 = {
        id: state.ideas.length + 1,
        short: action.short,
        long:action.short,
        need:action.need,
        team:action.team,
        founderInfo:action.founderInfo,
        likes:0,
        phase: 1,
        campus:action.campus,
        imgSource:'anon',
        progress:'0',
        title: action.title,
        }
        newIdeas2.push(newIdea2);
      return {...state,
      ideas: newIdeas2}
    default:
      return state
  }
}

const Store = redux.createStore(rootReducer)

export default Store;
