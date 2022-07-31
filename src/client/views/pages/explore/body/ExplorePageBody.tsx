import CardsSection, { CardsSectionProps } from "client/views/components/cards-section/CardsSection";
import { FunctionComponent } from "react";

export interface ExplorePageBodyProps {
    sections?: CardsSectionProps[];
}

const ExplorePageBody: FunctionComponent<ExplorePageBodyProps> = (props: ExplorePageBodyProps) => (
    <div className="xl:px-28 space-y-8">
        {props.sections?.map(section => <CardsSection {...section} key={section.title} />)}
    </div>
)

export default ExplorePageBody;