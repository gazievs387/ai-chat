import { NavigationBar } from 'widgets/NavigationBar';
import { Hero } from './Hero';
import { FeaturesBlock } from './FeaturesBlock';
import { UseCasesBlock } from './UseCasesBlock';
import { PriceBlock } from './PriceBlock';
import { QuestionsBlock } from './QuestionsBlock';
import { CTASection } from './CTASection';
import { Footer } from './Footer';


export function Main() {
    return (
        <main>
            <NavigationBar />

            <Hero />

            <FeaturesBlock />
            
            <UseCasesBlock />
            
            <PriceBlock />
            
            <QuestionsBlock />

            <CTASection />

            <Footer />
        </main>
    )
}
