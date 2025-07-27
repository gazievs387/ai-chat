import { NavigationBar } from 'widgets/NavigationBar';
import { Block1 } from './Block1';
import { FeaturesBlock } from './FeaturesBlock';
import { UseCasesBlock } from './UseCasesBlock';
import { PriceBlock } from './PriceBlock';
import { QuestionsBlock } from './QuestionsBlock';
import { Block6 } from './Block6';
import { Block7 } from './Block7';


export function Main() {
    return (
        <main>
            <NavigationBar />

            <Block1 />

            <FeaturesBlock />
            
            <UseCasesBlock />
            
            <PriceBlock />
            
            <QuestionsBlock />

            <Block6 />

            <Block7 />
        </main>
    )
}
