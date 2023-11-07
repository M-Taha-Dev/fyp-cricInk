function compileComparisonAnalysis(template, variables) {
  let compiledArticle = '';
  template.forEach((section) => {
    let paragraph = section.paragraph;
    for (const [key, value] of Object.entries(variables)) {
      const pattern = new RegExp(`{${key}}`, 'g');
      paragraph = paragraph.replace(pattern, value);
    }
    compiledArticle += `\n\n${section.heading}\n\n${paragraph}\n`;
  });

  return compiledArticle;
}
function replaceVariablesInTemplate(template, variables) {
  const replacedTemplate = template.map((section) => {
    const { heading, paragraph } = section;
    const replacedParagraph = paragraph.replace(/{(\w+)}/g, (match, key) => {
      return variables[key] || match;
    });

    return { heading, paragraph: replacedParagraph };
  });

  return replacedTemplate;
}

const comparisonAnalysisTemplate = [
  {
    heading: 'Comprehensive Comparison Analysis',
    paragraph:
      "In this in-depth analysis, we will compare the batting prowess of {name} with another cricketing legend, {comparisonPlayer}. Our goal is to assess various aspects of their game to gain insights into their respective strengths and styles.",
  },
  {
    heading: 'Batting Average Comparison',
    paragraph:
      "When we examine the batting averages, {name} boasts an impressive average of {nameBattingAverage}, while {comparisonPlayer} maintains an average of {comparisonBattingAverage}. This statistic highlights {name}'s consistent run-scoring ability.",
  },
  {
    heading: 'Shot Selection and Range',
    paragraph:
      "{name}'s shot selection is known for its versatility. {HeShe} can play a wide range of shots, including {nameShot1}, {nameShot2}, and {nameShot3}. On the other hand, {comparisonPlayer}'s shot selection is characterized by {comparisonShotStyle}.",
  },
  {
    heading: 'Boundary-Hitting Prowess',
    paragraph:
      "When it comes to hitting boundaries, {name} excels in finding gaps and clearing the ropes. {HisHer} ability to hit {nameBoundary1} and {nameBoundary2} with ease sets {himHer} apart. In contrast, {comparisonPlayer} is known for {comparisonBoundaryStyle}.",
  },
  {
    heading: 'Conclusion',
    paragraph:
      "In conclusion, the comparison analysis reveals that both {name} and {comparisonPlayer} are exceptional batsmen in their own right. {name}'s impressive batting average and versatile shot selection make {himHer} a force to be reckoned with. As we anticipate their performances in future matches, it's evident that these two cricketing legends bring unique strengths to the game.",
  },
];

const comparisonAnalysisVariables = {
  name: 'Babar Azam',
  comparisonPlayer: 'Virat Kohli',
  nameBattingAverage: '55.34',
  comparisonBattingAverage: '53.12',
  nameShot1: 'elegant cover drives',
  nameShot2: 'effortless flicks off the pads',
  nameShot3: 'aggressive lofted drives',
  nameBoundary1: 'sixes over long-on',
  nameBoundary2: 'finding gaps in the deep midwicket region',
  comparisonShotStyle: 'a classical approach with a focus on technique',
  comparisonBoundaryStyle: 'attacking strokes and clearing the boundary with power',
};

//   const compiledComparisonAnalysis = compileComparisonAnalysis(comparisonAnalysisTemplate, comparisonAnalysisVariables);
const compiledComparisonAnalysis = replaceVariablesInTemplate(comparisonAnalysisTemplate, comparisonAnalysisVariables);
const getComparison = () => {
  return compiledComparisonAnalysis
}
export default getComparison 