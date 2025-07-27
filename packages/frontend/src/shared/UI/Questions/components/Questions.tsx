import { Box } from '@mui/material';
import { useState } from 'react';
import QuestionElement from './QuestionElement'; 


export function Questions({questions}: {questions: [number, string, string][]}) {
    const [expandedQuestion, setExpandedQuestion] = useState<undefined | number>(undefined)


    return (
        <Box sx={(t) => ({maxWidth: 768, mt: 4, [t.breakpoints.down("lg")]: {mt: 2}})}>
            {questions.map((question) => {
                return (
                    <QuestionElement 
                        key={question[0]} 
                        expanded={question[0] === expandedQuestion} 
                        question={question[1]}
                        onChange={(e, expanded) => {
                            if (expanded) {
                                setExpandedQuestion(question[0])
                            } else {
                                setExpandedQuestion(undefined)
                            }
                        }}
                    >
                        {question[2]}
                    </QuestionElement>
                )
            })}
        </Box>
    )
}
