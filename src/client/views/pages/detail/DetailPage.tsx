import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import DetailPageBody, { DetailPageBodyProps } from "./body/DetailPageBody";

export interface DetailPageProps {
    title: string;
    searchbar: SearchBarProps;
    body: DetailPageBodyProps;
}

const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => {
    document.title = props.title;
    return (
        <>
            <SearchBar {...props.searchbar} />
            <DetailPageBody {...props.body} />
        </>
    );
};

export default DetailPage;