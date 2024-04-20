export type question = {
  title: string;
  options: string[];
  correct: number;
}

async function fetchQuestionsData() {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
  }
}


function processQuestionsData(data: any) : question[] {
  let questions = data.results;

  if (!questions) {
    return [];
  }

  let processedQuestions : [question] = new Array(questions.length) as [question];

  for (let i = 0; i < questions.length; i++) {
    
    questions[i].options = questions[i].incorrect_answers;
    questions[i].correct = Math.floor(Math.random() * 4);
    questions[i].options.splice(questions[i].correct, 0, questions[i].correct_answer);
    
    processedQuestions[i] = {
      title:   questions[i].question,
      options: questions[i].options,
      correct: questions[i].correct
    };
  }

  return processedQuestions;
}
  
export async function getQuestionsData() {
    const rawData = await fetchQuestionsData();
    const processedData = processQuestionsData(rawData);
    return processedData;
}
