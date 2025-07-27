import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { IoIosArrowDown } from 'react-icons/io';


interface QuestionElementProps {
    expanded: boolean;
    question: string;
    onChange: (event: React.SyntheticEvent, expanded: boolean) => void;
}


function QuestionElement({question, children, expanded, onChange}: PropsWithChildren<QuestionElementProps>) {
    return (
        <Accordion disableGutters expanded={expanded} onChange={onChange} variant="outlined">
            <AccordionSummary
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                    "& span": {
                        fontSize: 17, fontWeight: 500
                    }
                }}
            >
                {question}
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{fontSize: 15}}>
                {children}
            </Typography>
            </AccordionDetails>
        </Accordion>
    )
}


export default QuestionElement;